import React from "react";
import { Link } from "react-router-dom";
import Blog from "./BlogList";

const Header = () => {
    return (
        <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <Link class="navbar-brand" to="/">AC2K's HomePage</Link>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><Link class="nav-link" to="/">Home</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/blog">Blog</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>
    );
}

export default Header;