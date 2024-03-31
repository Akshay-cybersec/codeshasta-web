import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../resources/logo.png";
import { Color } from "../resources/color";
import homeicon from "../resources/homeicon.png";
import explore from "../resources/explore.png";
import learning from "../resources/learning.png";
import live from "../resources/liveclass.png";
import download from "../resources/download.png";
import { BsFillPersonFill } from "react-icons/bs";
import { TfiWallet } from "react-icons/tfi";

function Leftdiv() {
    const [activeItem, setActiveItem] = useState("home");

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <div className="leftdiv">
            <div className="logopart">
                <img src={logo} className="logoimg" />
                <h1 style={{ color: Color.maincol, paddingLeft: 10 }}>SkillZone</h1>
            </div>
            <div className="navitem">
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/"
                    className={`navitemsingle ${activeItem === "home" ? "active" : ""
                        }`}
                    onClick={() => handleItemClick("home")}
                >
                    <img className="innerimg" src={homeicon} />
                    <span className="iteminnerstyle">Home</span>
                </Link>
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/transaction"
                    className={`navitemsingle ${activeItem === "explore" ? "active" : ""
                        }`}
                    onClick={() => handleItemClick("explore")}
                >
                    <img className="innerimg" src={explore} />
                    <span className="iteminnerstyle">Transaction</span>
                </Link>
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/managecourse"
                    className={`navitemsingle ${activeItem === "courses" ? "active" : ""
                        }`}
                    onClick={() => handleItemClick("courses")}
                >
                    <img className="innerimg" src={learning} />
                    <span className="iteminnerstyle">Manage Courses</span>
                </Link>
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/certificate"
                    className={`navitemsingle ${activeItem === "live" ? "active" : ""}`}
                    onClick={() => handleItemClick("live")}
                >
                    <img className="innerimg" src={live} />
                    <span className="iteminnerstyle">Certificate Validate</span>
                </Link>
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/course"
                    className={`navitemsingle ${activeItem === "add" ? "active" : ""}`}
                    onClick={() => handleItemClick("add")}
                >
                    <img className="innerimg" src={download} />
                    <span className="iteminnerstyle">Add Courses</span>
                </Link>
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/profile"
                    className={`navitemsingle ${activeItem === "add" ? "active" : ""}`}
                    onClick={() => handleItemClick("add")}
                >
                    <BsFillPersonFill className="innerimg" color="grey" />
                    <span className="iteminnerstyle">Profile Setting</span>
                </Link>
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/wallet"
                    className={`navitemsingle ${activeItem === "add" ? "active" : ""}`}
                    onClick={() => handleItemClick("add")}
                >
                    <TfiWallet
                    className="innerimg"
                        style={{
                            color: "black"
                        }}
                    />
                    <span className="iteminnerstyle">Wallet</span>
                </Link>
            </div>
        </div>
    );
}

export default Leftdiv;
