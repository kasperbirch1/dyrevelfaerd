import React, { useState } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { useForm } from "react-hook-form";

// import useUploadImage from '../../hooks/useUploadImage'

export const AddAnimals = ({ style, UserInfo }) => {
    const types = ['image/png', 'image/jpeg'];
    const checkExtension = (file) => {
        if (!types.includes(file.type)) {
            return "Det skal være png eller jpeg";
        }
    };


    const [responseData, setResponseData] = useState(null);
    const { register, handleSubmit, errors } = useForm();
    // console.log("UserInfo.token", UserInfo.token);
    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("file", data.picture[0]);
            console.log("data", data);
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
            setResponseData(response);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <section style={style}>
            <h2 className="sub-title">Opret Animal</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    ref={register({
                        required: {
                            value: true,
                            message: "Name skal udfyldes",
                        },
                    })} />
                <span className="form-errors">{errors.name && errors.name.message}</span>

                <label htmlFor="description">description</label>
                <input
                    type="text"
                    placeholder="description"
                    name="description"
                    ref={register({
                        required: {
                            value: true,
                            message: "description skal udfyldes",
                        },
                    })} />
                <span className="form-errors">{errors.description && errors.description.message}</span>

                <label htmlFor="age">age</label>
                <input
                    type="number"
                    placeholder="age"
                    name="age"
                    ref={register({
                        required: {
                            value: true,
                            message: "age skal udfyldes",
                        },
                    })} />
                <span className="form-errors">{errors.age && errors.age.message}</span>

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
                    }
                    )} />
                <span className="form-errors">{errors.picture && errors.picture.message}</span>

                {console.log("errors", errors)}
                <input type="submit" />
            </form>
            {responseData &&
                <pre>{JSON.stringify(responseData, null, 2)}</pre>}
        </section>
    );
};
