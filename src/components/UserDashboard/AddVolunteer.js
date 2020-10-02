import React, { useState } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { useForm } from "react-hook-form";

export const AddVolunteer = ({ style, UserInfo }) => {
    const types = ['image/png', 'image/jpeg'];
    const checkExtension = (file) => {
        if (types.includes(file.type)) {
            return "Det skal være png eller jpeg";
        }
    };


    const [responseData, setResponseData] = useState(null);
    const { register, handleSubmit, errors } = useForm();
    // console.log("UserInfo.token", UserInfo.token);
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("file", data.picture[0]);
        try {
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
            console.log("her er AssetId", UploadImagesResponse);
            const response = await axios.post(
                'https://dyrevelfaerd.herokuapp.com/api/v1/volunteers',
                qs.stringify({
                    name: data.name,
                    content: data.content,
                    extra: data.extra,
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
            <h2>Opret Volunteer</h2>
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

                <label htmlFor="content">content</label>
                <input
                    type="text"
                    placeholder="content"
                    name="content"
                    ref={register({
                        required: {
                            value: true,
                            message: "content skal udfyldes",
                        },
                    })} />
                <span className="form-errors">{errors.content && errors.content.message}</span>

                <label htmlFor="extra">extra</label>
                <input
                    type="text"
                    placeholder="extra"
                    name="extra"
                    ref={register()} />
                <span className="form-errors">{errors.extra && errors.extra.message}</span>

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
