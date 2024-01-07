import React, { useState } from 'react';
import './MyCss/Headers.css';
import { useNavigate } from 'react-router-dom';

export default function Headers() {

    const [search, setSearch] = useState("");
    let navigate = useNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                <div className="container-fluid">
                    <a className="navbar-brand" >Eshop_Myntrajbjb</a>
                    <a className="navbar-brand" >
                        <img src=" https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png" alt="Myntra Logo" height="50" width="auto" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between align-items-center">
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <a className="nav-link text-dark" >Tops</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" >Bottoms</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" >Accessories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" >Footwear</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form className="d-flex search-bar" id="query1" >
                        <input id="SearchQuery" name="SearchQuery" className="form-control me-2" type="search" placeholder="Search for products, brands, and more" aria-label="Search"
                            onChange={(e) => { setSearch(e.target.value) }}
                        />
                        <button className="custom-search-btn" type="submit"
                        onClick={(e)=>{
                            e.preventDefault();
                            navigate("/products",{state:{data:search}})}}
                        >Search</button>
                    </form>

                    <div className="logo">
                        <a className="navbar-brand me-3" href="/Home/Profile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCoBM4pEZksf1qU68_NJQwty7o_trvlA1DQ&usqp=CAU" alt="Logo 1" height="40" width="40" />
                        </a>
                        <a className="navbar-brand" >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUA3Ty6BIqa538_9vJTxwVzOCtRCybnePRjg&usqp=CAU" alt="Logo 2" height="40" width="40" />
                        </a>
                    </div>
                </div>
            </nav>

        </>
    )
}
