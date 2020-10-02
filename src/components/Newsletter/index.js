import React, { useState } from 'react'
import { navigate } from 'gatsby'
import axios from 'axios'
import qs from 'querystring'
import { useForm } from "react-hook-form";
import { breakpoints } from '../../theme/breakpoints'
import styled from 'styled-components'
const StyledNewsletterSection = styled.section`
    padding: var(--section-padding);
    background-color: var(--theme-background-color);
    .wrapper {
        display: grid;
        grid-gap: 1.5rem;
        @media ${breakpoints.md} {
            grid-template-columns: repeat(2, 1fr);
        }
        >:first-child {
            grid-column: 1/-1;
        }
        form {
            display: grid;
            grid-row-gap: .5rem;
            @media ${breakpoints.md} {
                grid-template-columns: repeat(2,1fr);
                grid-column-gap: 2rem;
            }

       label {
           input {
            border-radius: .25rem;
            padding: .5rem;
            width: 100%;
            border: none;
           }
       }
       .form-errors {
           /* align-self: center; */
           /* padding-left: .5rem; */
       }
       button {
            border-radius: .25rem;
            width: auto;
            justify-self: flex-end;
            background-color: var(--link-color-blue);
            border: none;
            padding: .5rem 1.25rem;
            color: white;
            font-weight: bold;
       }
   }
}
`

const Newsletter = () => {
    const [Error, setError] = useState(null)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            setError(null)
            const response = await axios.post(
                'https://dyrevelfaerd.herokuapp.com/api/v1/subscribers',
                qs.stringify({
                    name: data.name,
                    email: data.email
                }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
            console.log("response", response);
            navigate('/nyhedsbrev-tak-for-din-tilmelding');
        } catch (error) {
            console.error(error);
            setError(error)
        }
    }
    return (
        <StyledNewsletterSection>
            <div className="wrapper">
                <h2 className="sub-title" style={{ margin: "0" }}>Tilmed vores nyhedsbrev</h2>
                <p>Få inspiration og nyheder om dyrevelfærd og deres arbejde, direkte i din indbakke</p>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
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

                    <label >
                        <input
                            type="text"
                            name="name"
                            placeholder="Navn"
                            ref={register({
                                required: {
                                    value: true,
                                    message: "Navn skal udfyldes"
                                },
                                pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: "ingen specialtegn eller mellemrum"
                                }
                            })} />
                    </label>
                    <div className="error-container">
                        {Error &&
                            <p className="form-errors">Du kan ikke tilmelde den sammen mail flere gange</p>
                        }
                        <p className="form-errors">{errors.email && errors.email.message || errors.name && errors.name.message} </p>
                    </div>

                    <button type="submit">Tilmeld</button>
                </form>
            </div>

        </StyledNewsletterSection>
    )
}

export default Newsletter