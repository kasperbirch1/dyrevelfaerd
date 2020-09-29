import React from 'react'
import { useForm } from "react-hook-form";
// import axios from 'axios'
import styled from 'styled-components'
const StyledContactForm = styled.form`
    display: grid;

    label {
        text-transform: capitalize;
        font-weight: bold;
        /* margin-bottom: .25rem; */
    }

    input {
        ::placeholder {
          text-transform: capitalize;  
        }
    }

    .form-errors {
        --error-size: 1rem;
        min-height: var(--error-size);
        font-size: calc(var(--error-size) - 25%);
        color: red;
        text-transform: capitalize;
    }
`


function ContactForm() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        console.log(data);

        // axios({
        //     method: 'post',
        //     url: '',
        //     headers: {
        //         'Content-Type': ''
        //     },
        //     data: data
        // }).then(res => {
        //     console.log(res);
        //     console.log(res.data);
        // })
    }
    return (
        <StyledContactForm onSubmit={handleSubmit(onSubmit)} noValidate>
            <label htmlFor="firstName"> first Name</label>
            <input
                type="text"
                name="firstName"
                placeholder="enter your firstName"
                ref={register({
                    required: {
                        value: true,
                        message: "required"
                    },
                    pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "invalid firstName"
                    }
                })} />
            <span className="form-errors">{errors.firstName && errors.firstName.message}</span>

            <label htmlFor="lastName"> last Name</label>
            <input
                type="text"
                name="lastName"
                placeholder="enter your lastName"
                ref={register({
                    required: {
                        value: true,
                        message: "required"
                    },
                    pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "invalid lastName"
                    }
                })} />
            <span className="form-errors">{errors.lastName && errors.lastName.message}</span>

            <label htmlFor="email"> email</label>
            <input
                type="email"
                placeholder="enter your Email"
                name="email"
                ref={register({
                    required: {
                        value: true,
                        message: "required"
                    },
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                    }
                })}
            />
            <span className="form-errors">{errors.email && errors.email.message} </span>

            <label htmlFor="phone"> tel</label>
            <input
                type="tel"
                name="phone"
                placeholder="enter your phone"
                ref={register({
                    required: {
                        value: true,
                        message: "required"
                    },
                    minLength: {
                        value: 8,
                        message: "Minimum 8"
                    },
                    pattern: {
                        value: /^([+](\d{1,3})\s?)?((\(\d{3,5}\)|\d{3,5})(\s)?)\d{3,8}$/g,
                        message: "invalid phone number"
                    }
                })} />
            <span className="form-errors">{errors.phone && errors.phone.message}</span>

            <input type="submit" value="Submit" />

        </StyledContactForm>
    )
}

export default ContactForm
