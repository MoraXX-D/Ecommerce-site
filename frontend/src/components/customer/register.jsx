import { useState } from "react";
import axios from "axios";
import '../../index.css'
import '../../App.css'
const Register = () => {

    const baseUrl = 'http://127.0.0.1:8000/api/'
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const [registerFormData, setRegisterFormData] = useState({
        'first_name': '',
        'last_name': '',
        'username': '',
        'mobile': '',
        'email': '',
        'password': ''
    })

    const inputHandler = (event) => {
        setRegisterFormData({
            ...registerFormData,  // spread operator
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        const formData = new FormData()
        formData.append('first_name', registerFormData.first_name)
        formData.append('last_name', registerFormData.last_name)
        formData.append('email', registerFormData.email)
        formData.append('mobile', registerFormData.mobile)
        formData.append('username', registerFormData.username)
        formData.append('password', registerFormData.password)

        axios.post(baseUrl + 'customer/register/', formData)
            .then(function (response) {
                if (response.data.bool == false) {
                    setErrorMsg(response.data.msg)
                    setSuccessMsg('')
                }
                else {
                    setRegisterFormData({
                        'first_name': '',
                        'last_name': '',
                        'username': '',
                        'mobile': '',
                        'email': '',
                        'password': ''
                    })
                    setErrorMsg('')
                    setSuccessMsg(response.data.msg)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const buttonEnable = (registerFormData.first_name != '') && (registerFormData.last_name != '') && (registerFormData.
        username != '') && (registerFormData.email != '') && (registerFormData.mobile != '') && (registerFormData.password != '')

    return (
        <div className="container ">

            <form className="border m-5 p-5">
                <div className="container">
                    <h1 className="text-center mt-4 "><strong>Register</strong></h1>
                </div>
                <hr />
                {successMsg &&
                    <p className="text-success">{successMsg}</p>
                }
                {errorMsg &&
                    <p className="text-danger">{errorMsg}</p>
                }

                <p className="text-muted text-end"><strong>Note:</strong> All field are required</p>
                <div className="d-flex justify-content-between">
                    <div className="mb-3 w-45">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" name='first_name' onChange={inputHandler} value={registerFormData.first_name} className="form-control" id="firstName" />
                    </div>
                    <div className="mb-3 w-45">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input type="text" name='last_name' onChange={inputHandler} value={registerFormData.last_name_name} className="form-control" id="lastname" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input type="text" name='username' onChange={inputHandler} value={registerFormData.username} className="form-control" id="userName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailId" className="form-label">Email</label>
                    <input type="email" name='email' onChange={inputHandler} value={registerFormData.email} className="form-control" id="emailId" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Phone No.</label>
                    <input type="number" name='mobile' onChange={inputHandler} value={registerFormData.mobile} className="form-control" id="mobile" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' onChange={inputHandler} value={registerFormData.password} className="form-control" id="password" />
                </div>
                <button type="button" onClick={submitHandler} disabled={!buttonEnable} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Register;