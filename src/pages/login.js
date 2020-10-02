import React, { useState } from 'react'
import useSessionStorage from '../hooks/useSessionStorage'
import Loading from '../components/Loading'
import LoginForm from '../components/LoginForm/LoginForm'
import UserDashboard from '../components/UserDashboard/UserDashboard'

const Login = () => {
  const [UserInfo, setUserInfo] = useSessionStorage("UserInfo");
  const [LoadingStatus, setLoadingStatus] = useState(false)
  // console.log("UserInfo", UserInfo);

  return (
    <section className="wrapper">
      { UserInfo
        ? <UserDashboard UserInfo={UserInfo} />
        : LoadingStatus
          ? <Loading />
          : <LoginForm setUserInfo={setUserInfo} setLoading={setLoadingStatus} />
      }
    </section>
  )
}

export default Login
