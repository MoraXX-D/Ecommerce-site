import xiao from '../assets/xiao.jpg'
import { Link } from 'react-router-dom'
import '../index.css'



const CheckOut = (props) => {
    return (
        <div className="table-responsive">
            <table className="table table-secondary table-bordered">
                <thead>
                    <tr>
                        <th scope="col" className="w-33 text-center">#</th>
                        <th scope="col" className="w-33 text-center align-middle">Product</th>
                        <th scope="col" className="w-33 text-center">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="align-middle">
                        <td scope="row" className="text-center">1</td>
                        <td className="text-center">
                            <Link to="#">
                                <img
                                    src={xiao}
                                    alt="Img not found"
                                    className="img-thumbnail w-25 d-block mx-auto"
                                />
                            </Link>
                            <Link to="#">
                                <p>Xiao-Genshin-impact poster</p>
                            </Link>
                        </td>
                        <td className="text-center">500</td>
                    </tr>
                    <tr className="align-middle">
                        <td scope="row" className="text-center">3</td>
                        <td className="text-center">
                            <Link to="#">
                                <img
                                    src={xiao}
                                    alt="Img not found"
                                    className="img-thumbnail w-25 d-block mx-auto"
                                />
                            </Link>
                            <Link to="#">
                                <p>Xiao-Genshin-impact poster</p>
                            </Link>
                        </td>
                        <td className="text-center">500</td>
                    </tr>
                    <tr className="align-middle">
                        <td scope="row" className="text-center">3</td>
                        <td className="text-center">
                            <Link to="#">
                                <img
                                    src={xiao}
                                    alt="Img not found"
                                    className="img-thumbnail w-25 d-block mx-auto"
                                />
                            </Link>
                            <Link to="#">
                                <p>Xiao-Genshin-impact poster</p>
                            </Link>
                        </td>
                        <td className="text-center">500</td>
                    </tr>
                    <tr className="align-middle">
                        <td scope="row" className="text-center">4</td>
                        <td className="text-center">
                            <Link to="#">
                                <img
                                    src={xiao}
                                    alt="Img not found"
                                    className="img-thumbnail w-25 d-block mx-auto"
                                />
                            </Link>
                            <Link to="#">
                                <p>Xiao-Genshin-impact poster</p>
                            </Link>
                        </td>
                        <td className="text-center">500</td>
                    </tr>

                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td className="w-33 text-center align-middle">SubTotal</td>
                        <td >2000</td>
                    </tr>
                    <tr>
                        <td colSpan="3" align="center">
                            <Link to="/categories" className="btn btn-secondary">Continue Shoping</Link>
                            <Link className="btn btn-success ms-1">Proceed to pay</Link>
                        </td>
                    </tr>
                </tfoot>

            </table>
        </div>

    )
}

export default CheckOut;