import React from 'react'
import logo from '../images/validLogo.PNG'
import {Navbar} from 'react-bootstrap'
function Topbar() {
    return (
        <Navbar bg="dark">
            <Navbar.Brand >
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        </Navbar>
    )
}

export default Topbar
