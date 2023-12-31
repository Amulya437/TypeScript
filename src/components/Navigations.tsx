import React, { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navigations = () => {
    const [isloggedIn,setIsLoggedIn] = useState(false);

    const navigate=useNavigate();
    useEffect(()=>{

        if(sessionStorage.getItem("emailId")!=null)
        
        setIsLoggedIn(true);
        
          })
    
    const logout=()=>{
        sessionStorage.clear();
        navigate("/")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/productDetails/:id'>ProductDetails</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/aboutus'>AboutUs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contactus'>ContactUs</Link>
                            </li>
                            {isloggedIn?<li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/addproduct'>AddProduct</Link>
                            </li>:""}
                            <li className="nav-item">
                                <button  onClick={logout}>Logout</button>
                            </li>
                            
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
