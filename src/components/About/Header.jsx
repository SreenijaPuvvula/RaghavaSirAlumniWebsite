import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div>

            <Link style={{ textDecoration: "none" }} className="navbar-brand" to="/">
                <div className="header ">
                    <img className="cvrLogo" src="./images/cvr.png" alt="cvrLogo" />
                    <div className="logoName">
                        <h1 className="logoHeading">CVR College Of Engineering</h1>
                        <p className="logoSubHeading">In pursuit of excellence</p>
                    </div>
                </div>
            </Link>
            <div className="navBarContainer">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <li className="nav-item dropdown about">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        About
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/">About Us</Link></li>
                                        <li><Link className="dropdown-item" to="/ourTeam">Our Team</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Alumni Engagement
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/bousIqac">BOS&IQAC</Link></li>
                                        <li><Link className="dropdown-item" to="/MoUs">MoUs</Link></li>
                                        <li><Link className="dropdown-item" to="/techTalks">Tech Talks</Link></li>
                                        <li><Link className="dropdown-item" to="/exhibits">Exhibits</Link></li>
                                        <li><Link className="dropdown-item" to="/fdps">FDP's</Link></li>
                                        <li><Link className="dropdown-item" to="/alumniGallery">Alumni Gallery</Link></li>
                                        <li><Link className="dropdown-item" to="/campusDrives">Campus Drives</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Alumni Chapters
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/">India Chapter</Link></li>
                                        <li><Link className="dropdown-item" to="/">Foreign Chapters</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Reunions
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/overseas">Overseas</Link></li>
                                        <li><Link className="dropdown-item" to="/onCampus">On Campus</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/wallOfFame" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Wall Of Fame
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/doctorates">Doctorates</Link></li>
                                        <li><Link className="dropdown-item" to="/govtOfficials">Government Officials</Link></li>
                                        <li><Link className="dropdown-item" to="/celebrities">Celebrities</Link></li>
                                        <li><Link className="dropdown-item" to="/warble">Warble</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/alumniAwards" aria-expanded="false">
                                        Alumni Awards
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/joinUs" aria-expanded="false">
                                        Join Us
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/" aria-expanded="false">
                                        Videos
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div >
    )
}
