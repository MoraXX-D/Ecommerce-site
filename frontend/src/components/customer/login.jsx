import { useState } from "react";
import axios from "axios";


import '../../index.css'
import '../../App.css'
const Login = () => {

    const baseUrl = 'http://127.0.0.1:8000/api/'
    const[formError,setFormError] =useState(false)
    const[errorMsg,setErrorMsg] =useState('')

    const [loginFormData, setLoginFormData] = useState({
        'userName': '',
        'password': ''
    })

    const inputHandler = (event) => {
        setLoginFormData({
            ...loginFormData,  // spread operator
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        const formData = new FormData()
        formData.append('username', loginFormData.userName)
        formData.append('password', loginFormData.password)

        axios.post(baseUrl + 'customer/login/', formData)
            .then(function (response) {
                if(response.data.bool==false){
                    setFormError(true)
                    setErrorMsg(response.data.msg)
                }
                else{
                    localStorage.setItem('customer_login',true)
                    localStorage.setItem('customer_username',response.data.user)
                    setFormError(false)
                    setErrorMsg('')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const userStatus = localStorage.getItem('customer_login')
    if(userStatus){
        window.location.href='/customer/dashboard'
    }

    const buttonEnable = (loginFormData.userName != '') && (loginFormData.password != '')

    return (
        <div className="container">
            <div className="container">
                <h1 className="text-center mt-4 ">Login</h1>
            </div>

            <form className="border m-5 p-5">
                <div className="mb-3">
                {formError &&
                    <p className="text-danger">
                        {errorMsg}
                    </p>
                    }
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input type="text" name="userName" value={loginFormData.userName} onChange={inputHandler} className="form-control" id="userName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={loginFormData.password} name="password" onChange={inputHandler} className="form-control" id="password" />
                </div>
                <button type="button" disabled={!buttonEnable} onClick={submitHandler} className="btn btn-primary">Submit</button>
                
            </form>
        </div>
    )
}
export default Login;