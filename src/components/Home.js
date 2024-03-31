import "./homestyle.css"
import { SearchBar } from '@cred/neopop-web/lib/components';
import { colorGuide } from '@cred/neopop-web/lib/primitives';
import { BsBell } from "react-icons/bs";
import bgimg from "../resources/bg.jpeg"
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';

function Home() {
    const analyticsData = [
        { title: "Total Views", value: "750K",valme:30 },
        { title: "Total subscriber ", value: "960" ,valme:10},
        { title: "Total revenue", value: "$ 350k" ,valme:50},
    ];
    return (
        <div>
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
                                <p style={{ fontSize: 30, color: 'white' }}>Welcome back, Jay</p>
                                <p style={{ fontSize: 18, color: 'white' }}>You’ve have completed your milestone,</p>
                                <p style={{ fontSize: 18, color: 'white' }}>Keep it up and improve your progress</p>
                                <button className="buttonwelcome">Go back to the lesson</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <h2 style={{paddingLeft:12}}>Analytics</h2>
            <div className="analytics-container">
                {analyticsData.map((data, index) => (
                    <div key={index} className="analytics-card">
                        <Card variant="soft" color="neutral" invertedColors>
                            <CardContent orientation="horizontal">
                                <CircularProgress size="lg" determinate value={data.valme}>
                                    <SvgIcon>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                            />
                                        </svg>
                                    </SvgIcon>
                                </CircularProgress>
                                <CardContent>
                                    <Typography level="body-md">{data.title}</Typography>
                                    <Typography level="h2">{data.value}</Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;