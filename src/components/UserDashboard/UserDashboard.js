import React, { useState } from 'react'
import { Link } from 'gatsby'
import axios from 'axios'
import qs from 'querystring'
import { useForm } from "react-hook-form";
// import * as yup from 'yup';
// import { yupResolver } from "@hookform/resolvers";
import styled from 'styled-components'
const StyledUserDashboardSection = styled.section`
    .Logout-btn {
        color: red;
    }
   form {
       display: grid;
       grid-gap: .5rem;
   }
`
// { resolver: yupResolver(schema), }


const UserDashboard = ({ UserInfo }) => {
    // const imagesTypes = ['image/png', 'image/jpeg'];
    // const schema = yup.object().shape({
    //     picture: yup
    //         .mixed()
    //         .required("You need to provide a file")
    //         .test("type", "We only support jpeg or png", (value) => {
    //             return value && imagesTypes.includes(value[0].type);
    //         })
    //         .test("fileSize", "The file is too large", (value) => {
    //             return value && value[0].size <= 2000000;
    //         }),
    // });

    const [responseData, setResponseData] = useState(null)
    const { register, handleSubmit, errors } = useForm();
    // console.log("UserInfo.token", UserInfo.token);

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("file", data.picture[0])
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
                })
            console.log("her er AssetId", UploadImagesResponse);
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
                })
            console.log("response", response);
            setResponseData(response)
        } catch (error) {
            console.error(error);
        }
    }

    const handleLogout = (e) => {
        window.sessionStorage.removeItem("UserInfo");
    }

    return (
        <StyledUserDashboardSection>
            <h1>Du er logget ind med: {UserInfo.username}</h1>
            <p>{`Token: ${UserInfo.token}`}</p>
            <Link to="/" className="Logout-btn" onClick={handleLogout}>Log out</Link>
            <br></br>
            <pre>{JSON.stringify(UserInfo.data, null, 2)}</pre>
            <br></br>
            <h2>Opret Animal</h2>
            <br></br>

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
                    })}
                />
                <span className="form-errors">{errors.age && errors.age.message}</span>

                <input type="file" name="picture" ref={register} />
                <span className="form-errors">{errors.picture && errors.picture.message}</span>



                <input type="submit" />
            </form>
            {responseData &&
                <pre>{JSON.stringify(responseData, null, 2)}</pre>
            }
        </StyledUserDashboardSection>
    )
}

export default UserDashboard


