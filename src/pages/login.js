import React from 'react'
import useSessionStorage from '../hooks/useSessionStorage'
import { Wrapper } from '../components/page-elements'
import LoginForm from '../components/LoginForm/LoginForm'
import UserDashboard from '../components/UserDashboard/UserDashboard'

const Login = () => {
  const [UserInfo, setUserInfo] = useSessionStorage("UserInfo");
  console.log("UserInfo", UserInfo);

  return (
    <Wrapper>
      { UserInfo
        ? <UserDashboard UserInfo={UserInfo} />
        : <LoginForm setUserInfo={setUserInfo} />
      }
    </Wrapper>
  )
}

export default Login
