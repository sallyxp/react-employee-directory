import React from "react";
//React-Router-dom links
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <Link className="navbar-brand" to="/">
            My<b>React</b>App
        </Link>
    </nav>
    );
}