import "./homestyle.css"
import { SearchBar } from '@cred/neopop-web/lib/components';
import { colorGuide } from '@cred/neopop-web/lib/primitives';
import { BsBell } from "react-icons/bs";
import bgimg from "../resources/bg.jpeg"
import { LineChart } from '@mui/x-charts/LineChart';

import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
function Home() {
    const analyticsData = [
        { title: "Total Views", value: "750K", valme: 30 },
        { title: "Total subscriber ", value: "960", valme: 10 },
        { title: "Total revenue", value: "$ 350k", valme: 50 },
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
            <h2 style={{ paddingLeft: 12, paddingBottom: 30 }}>Analytics</h2>
            <div className="analytics-container">

                <PieChart
                    className="graph"
                    series={[
                        {
                            data: [
                                { id: 0, value: 10, label: 'series A' },
                                { id: 1, value: 15, label: 'series B' },
                                { id: 2, value: 20, label: 'series C' },
                            ],
                        },
                    ]}
                    width={600}
                    height={300}
                />
                <h2 style={{ paddingLeft: 12, paddingBottom: 30 }}>Analytics2</h2>
                <BarChart
                    className="graph"
                    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                    width={600}
                    height={300}
                />
                <h2 style={{ paddingLeft: 12, paddingBottom: 30 }}>Analytics3</h2>
                <LineChart
                    className="graph"
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                    ]}
                    width={600}
                    height={300}
                />
            </div>

        </div>
    );
}

export default Home;