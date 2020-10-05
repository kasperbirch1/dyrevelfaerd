import React from 'react'
import { navigate } from 'gatsby'
import axios from 'axios';
import qs from 'querystring';
import { useForm } from "react-hook-form";
import styled from 'styled-components'
const StyledAddNewSection = styled.section`
margin-bottom: 1rem;
form,fieldset { 
    display: grid;
    input {
        width: 100%;
    }
}
form {
padding: .25rem;
    border: 5px solid green;
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
            if (data.picture) {
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
                    `https://dyrevelfaerd.herokuapp.com/api/v1${resourceType}`,
                    qs.stringify({
                        ...data,
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
                navigate('/login');
            } else {
                const response = await axios.post(
                    `https://dyrevelfaerd.herokuapp.com/api/v1${resourceType}`,
                    qs.stringify(data),
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization': `Bearer ${UserInfo.token}`
                        }
                    });
                console.log("response", response);
                alert("sucess")
                navigate('/login');
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <StyledAddNewSection>
            <h3 className="sub-title">Add New {resourceType}</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                {response && Object.keys(response[0]).filter(el => contentTypes.includes(el)).map((ObjectElenemt, index) => {
                    console.log("errors", errors && errors);

                    return (
                        <>
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
                                <span className="form-errors">{errors[ObjectElenemt] && errors[ObjectElenemt].message}</span>
                            </fieldset>
                        </>
                    );
                })}
                {response && response[0].assetId && <>
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
                    <span className="form-errors">{errors.picture && errors.picture.message}</span>

                </>}
                <button type="submit">create new</button>
            </form>

        </StyledAddNewSection>
    )
}

export default AddNew