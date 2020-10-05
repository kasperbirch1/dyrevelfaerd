import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import styled from 'styled-components'
const StyledUploadPictureForm = styled.form`
    display: grid; 
    grid-gap: 1rem;
`

export const UploadPicture = ({ UserInfo, setAssetId }) => {
    const { register, handleSubmit, errors } = useForm();
    const checkExtension = (file) => {
        const types = ['image/jpeg'];
        // console.log("checkExtension", types.includes(file[0].type))
        if (!types.includes(file[0].type)) {
            return "Det skal være  jpeg";
        }
    };
    const onSubmit = async (data) => {
        console.log("UploadPicture", data);
        try {
            const formData = new FormData();
            formData.append("file", data.picture[0]);
            const UploadImagesResponse = await axios.post(
                "https://dyrevelfaerd.herokuapp.com/api/v1/assets",
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${UserInfo.token}`
                    },
                });
            console.log("UploadImagesResponse", UploadImagesResponse);
            setAssetId({ assetId: `${UploadImagesResponse.data.id}` });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <StyledUploadPictureForm onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="picture">picture</label>
            <input
                type="file"
                name="picture"
                ref={register({
                    required: {
                        value: true,
                        message: "file skal udfyldes",
                    },
                    validate: checkExtension
                })} />
            <button type="submit">upload picture</button>
            <p>Husk at trykke på update data knappen efter du har uploadet picture</p>
            <span className="form-errors">{errors.picture && errors.picture.message}</span>
        </StyledUploadPictureForm>
    );
};
