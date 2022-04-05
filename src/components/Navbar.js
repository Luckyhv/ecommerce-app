import React from 'react'
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";

function Navbar() {
        const quantity = useSelector(state => state.cart.count);
        return (
            <div style={{ marginTop: "0px" }}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">SHOPPE</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Home</a>
                                </li>
                                {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                            </ul>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/register">REGISTER</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link end" href="/login">SIGN IN</a>
                                </li>
                                <li className="nav-item d-flex">
                                    <a className="nav-link end" href="/cart">
                                        <Badge badgeContent={quantity} color="primary">
                                            <ShoppingCartOutlinedIcon />
                                        </Badge>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
}

export default Navbar
