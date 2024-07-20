import { Link } from "react-router-dom";
import '../../index.css'
import '../../App.css'
const Login = () => {
    return (
        <div className="container">
            <div className="container">
                <h1 className="text-center mt-4 ">Login</h1>
            </div>
            
            <form className="border m-5 p-5">
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="userName" />
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
export default Login;