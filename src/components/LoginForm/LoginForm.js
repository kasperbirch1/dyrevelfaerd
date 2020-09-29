import React from 'react'
import { useSetRecoilState } from 'recoil';
import { loginState } from '../../Globalstates/Atoms'
import axios from 'axios'
import { useForm } from "react-hook-form";
import styled from 'styled-components'
const StyledLoginForm = styled.form`
  display: grid;
  grid-gap: .5rem;
`

const LoginForm = ({ setUserInfo }) => {
    const setToggleLogin = useSetRecoilState(loginState);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            const response = await axios.post('https://reqres.in/api/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            // console.log("response", response);
            setUserInfo({ token: response.data.token, data: data })
            setToggleLogin(true)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
            {/* <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
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
      <span className="form-errors">{errors.username && errors.username.message}</span> */}

            <label htmlFor="email">Email eve.holt@reqres.in</label>
            <input
                type="email"
                placeholder="Enter your email"
                name="email"
                ref={register({
                    required: {
                        value: true,
                        message: "Email skal udfyldes"
                    },
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                    }
                })}
            />
            <span className="form-errors">{errors.email && errors.email.message} </span>

            <label htmlFor="password">Password cityslicka</label>
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
                        value: 6,
                        message: "Minimum 6 tegn"
                    },
                })}
            />
            <span className="form-errors">{errors.password && errors.password.message}</span>
            <input type="submit" />
        </StyledLoginForm>

    )
}

export default LoginForm
