import React, { useState } from 'react'
import useSessionStorage from '../hooks/useSessionStorage'
import { Wrapper } from '../components/page-elements'
import LoginForm from '../components/LoginForm/LoginForm'
import UserDashboard from '../components/UserDashboard/UserDashboard'

const Login = () => {
  const [UserInfo, setUserInfo] = useSessionStorage("UserInfo");
  const [Loading, setLoading] = useState(false)
  // console.log("UserInfo", UserInfo);

  return (
    <Wrapper>
      { UserInfo
        ? <UserDashboard UserInfo={UserInfo} />
        : Loading
          ? <p>loading........</p>
          : <LoginForm setUserInfo={setUserInfo} setLoading={setLoading} />
      }
    </Wrapper>
  )
}

export default Login
