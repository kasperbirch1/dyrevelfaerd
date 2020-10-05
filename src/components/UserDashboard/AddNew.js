import React, { useState } from 'react'
import axios from 'axios';
import qs from 'querystring';
import { useForm } from "react-hook-form";
import styled from 'styled-components'
const StyledAddNewSection = styled.section`
padding: .25rem;
border: 2px solid green;
form,fieldset { 
    display: grid;
    input {
        width: 100%;
    }
}

`
const AddNew = ({ response, resourceType, UserInfo }) => {
    let contentTypes = ["title", "name", "content", "description", "age", "extra"];
    const { register, handleSubmit, errors } = useForm();

    const checkExtension = (file) => {
        const types = ['image/jpeg'];
        // console.log("checkExtension", types.includes(file[0].type))
        if (!types.includes(file[0].type)) {
            return "Det skal være jpeg";
        }
    };

    const onSubmit = async (data) => {
        console.log("data", data);
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

            const response = await axios.post(
                'https://dyrevelfaerd.herokuapp.com/api/v1/animals',
                qs.stringify({
                    name: data.name,
                    description: data.description,
                    age: data.age,
                    assetId: UploadImagesResponse.data.id
                }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${UserInfo.token}`
                    }
                });
            console.log("response", response);
            alert("sucess")
        } catch (error) {
            alert(error)
        }
    }

    return (
        <StyledAddNewSection>
            <h3 className="sub-title">Add New</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                {response && Object.keys(response[0]).filter(el => contentTypes.includes(el)).map((ObjectElenemt, index) => {
                    return (
                        <fieldset style={{ display: 'grid' }} key={ObjectElenemt}>
                            <label htmlFor={ObjectElenemt}>{ObjectElenemt}</label>
                            <input style={{ width: '100%' }} type={typeof response[0][ObjectElenemt] === "string" ? "text" : "number"}
                                placeholder={ObjectElenemt}
                                name={ObjectElenemt}
                                ref={register({
                                    required: {
                                        value: true,
                                        message: `${ObjectElenemt} skal udfyldes`,
                                    },
                                })} />
                            <span className="form-errors">{errors.ObjectElenemt && errors.ObjectElenemt.message}</span>
                        </fieldset>
                    );
                })}
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
                <button type="submit">create new</button>

            </form>

        </StyledAddNewSection>
    )
}

export default AddNew