import "./homestyle.css"
import { SearchBar } from '@cred/neopop-web/lib/components';
import { colorGuide } from '@cred/neopop-web/lib/primitives';
import { BsBell } from "react-icons/bs";
import bgimg from "../resources/bg.jpeg"
import Leftdiv from "./leftdiv";

function Home() {
    return (
        <div className="maindiv">
            <div className="rightdiv">
                <div className="navbar">
                    <SearchBar
                        iconUrl="https://cdn-icons-png.flaticon.com/512/482/482631.png"
                        placeholder="search query here"
                        colorConfig={colorGuide.lightComponents.searchBar}
                        inputColorConfig={colorGuide.lightComponents.inputFields}
                    />
                    <BsBell style={{ width: 24, height: 21, color: "black", paddingLeft: 12 }} />
                </div>
                <div>
                    <div className="welcomescr">
                        <img src={bgimg} />
                        <div className="welcomecontent">
                            <p style={{ fontSize: '25' ,color:'white'}}>Welcome back, Jay</p>
                            <p style={{ fontSize: '18' ,color:'white'}}>you’ve have complete your 75% of
                                your course, keep it up and improve your
                                progress</p>
                            <button className="buttonwelcome">Go back to the lessoon</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;