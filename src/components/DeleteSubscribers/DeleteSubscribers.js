import React from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";
import styled from 'styled-components'
const StyledDeleteSubscribersForm = styled.form`
   
`

const DeleteSubscribers = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await axios.delete(`https://dyrevelfaerd.herokuapp.com/api/v1/subscribers/${data.email}`);
            console.log("response", response);
        } catch (error) {
            console.error(error);
        }

    }
    return (
        <StyledDeleteSubscribersForm onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    ref={register({
                        required: {
                            value: true,
                            message: "Email skal udfyldes"
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Ugyldig email adresse"
                        }
                    })}
                />
            </label>
            <input type="submit" />
        </StyledDeleteSubscribersForm>
    )
}

export default DeleteSubscribers