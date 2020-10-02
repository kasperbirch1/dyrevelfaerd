import React from 'react'
import axios from 'axios'
import qs from 'querystring'
import { useForm } from "react-hook-form";
import styled from 'styled-components'
const StyledLoginForm = styled.form`
  display: grid;
  grid-gap: .5rem;
`

const LoginForm = ({ setUserInfo, setLoading }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            setLoading(true);
            const response = await axios.post(
                'https://dyrevelfaerd.herokuapp.com/auth/token',
                qs.stringify({
                    username: data.username,
                    password: data.password
                }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
            console.log("response", response);
            setUserInfo({ token: response.data.token, username: data.username })
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                placeholder="Enter your username"
                ref={register({
                    required: {
                        value: true,
                        message: "Skal udfyldes"
                    },
                    pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "ingen specialtegn"
                    }
                })} />
            <span className="form-errors">{errors.username && errors.username.message}</span>



            <label htmlFor="password">Password</label>
            <input
                type="password"
                placeholder="Enter your password"
                name="password"
                ref={register({
                    required: {
                        value: true,
                        message: "Password skal udfyldes",
                    },
                    minLength: {
                        value: 4,
                        message: "Minimum 4 tegn"
                    },
                })}
            />
            <span className="form-errors">{errors.password && errors.password.message}</span>
            <input type="submit" />
        </StyledLoginForm>

    )
}

export default LoginForm
