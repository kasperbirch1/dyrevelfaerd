import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";
import styled from 'styled-components'
const StyledDeleteSubscribersForm = styled.form`
   display: grid;
   grid-template-columns: 3fr 1fr;
   grid-gap: 1rem;

    input, button {
        border-radius: .25rem;
        padding: .5rem 1.25rem;
    }
    input {
        width: 100%;
    }
    button {
        /* background-color: var(--link-color-blue); */
        background-color: red;
        border: none;
        color: white;
        font-weight: bold;
    }
    .textOutput {
        grid-column: 1/-1;
        text-align: center;
        color: var(--link-color-blue);
        padding: .5rem 1.25rem;
    }
`

const DeleteSubscribers = () => {
    const [textOutput, setTextOutput] = useState(null)
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            setTextOutput(null)
            const response = await axios.delete(`https://dyrevelfaerd.herokuapp.com/api/v1/subscribers/${data.email}`);
            console.log("response", response);
            setTextOutput(`${data.email} er nu afmeldt`)
        } catch (error) {
            console.error(error);
        }

    }
    return (
        <>
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
                <button type="submit" >Afmeld</button>
                <p className="textOutput">{textOutput}</p>
            </StyledDeleteSubscribersForm>
        </>
    )
}

export default DeleteSubscribers