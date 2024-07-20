import { Link } from "react-router-dom";
import '../../index.css'
import '../../App.css'
const Register = () => {
    return (
        <div className="container ">
            <div className="container">
                <h1 className="text-center mt-4 ">Register</h1>
            </div>
            
            <form className="border m-5 p-5">
                <div className="d-flex justify-content-between">
                <div className="mb-3 w-45">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" />
                </div>
                <div className="mb-3 w-45">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastname" />
                </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="userName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailId" className="form-label">Email</label>
                    <input type="email" className="form-control" id="emailId" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Register;