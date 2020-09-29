import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { loginState } from '../../Globalstates/Atoms'
import { Link } from 'gatsby'
import axios from 'axios'
import { useForm } from "react-hook-form";
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

const UserDashboard = ({ UserInfo }) => {
    const [responseData, setResponseData] = useState(null)
    const [, setLoginStateValue] = useRecoilState(loginState);
    // console.log("UserInfo.token", UserInfo.token);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        // console.log("data", data);
        try {
            const response = await axios.post('https://reqres.in/api/users', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${UserInfo.token}`
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
        setLoginStateValue(false)
    }

    return (
        <StyledUserDashboardSection>
            <h1>Du er logget ind med {UserInfo.data.email}</h1>
            <p>{`Token: ${UserInfo.token}`}</p>
            <Link to="/" className="Logout-btn" onClick={handleLogout}>Log out</Link>
            <br></br>
            <pre>{JSON.stringify(UserInfo.data, null, 2)}</pre>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name morpheus</label>
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

                <label htmlFor="job">Job leader</label>
                <input
                    type="text"
                    placeholder="job"
                    name="job"
                    ref={register({
                        required: {
                            value: true,
                            message: "Job skal udfyldes",
                        },
                    })} />
                <span className="form-errors">{errors.job && errors.job.message}</span>

                <input type="submit" />
            </form>
            {responseData &&
                <pre>{JSON.stringify(responseData, null, 2)}</pre>
            }
        </StyledUserDashboardSection>
    )
}

export default UserDashboard