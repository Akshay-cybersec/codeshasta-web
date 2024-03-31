import React, { useState, useEffect } from "react";
import "./homestyle.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import courseimg from '../resources/course.png';
import { SearchBar } from '@cred/neopop-web/lib/components';
import { colorGuide } from '@cred/neopop-web/lib/primitives';
import { BsBell } from "react-icons/bs";
import bgimg from "../resources/bg.jpeg"

const CardContentWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Adjusted alignment to left
    textAlign: 'left', // Adjusted text alignment
});

function Managecourses() {
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        // Fetch data from local storage
        const savedData = JSON.parse(localStorage.getItem("courseFormData"));
        if (savedData) {
            setCourseData([savedData]);
        }

        // Add an empty dependency array to ensure this effect runs only once
    }, []);

    // Add dummy data
    useEffect(() => {
        const dummyData = [
            {
                title: "Crypto Currency",
                description: "Description for crypto",
                amount: "₹10000"
            },
            {
                title: "Blockchain",
                description: "Description for blockchain",
                amount: "₹20000"
            },
            {
                title: "Django",
                description: "Description for Django",
                amount: "₹5000"
            }
        ];

        // Merge dummy data with existing course data
        setCourseData(prevData => [...prevData, ...dummyData]);
    }, []);

    return (
        <div className="maindiv" style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
            <div className="navbar">
                <SearchBar
                    iconUrl="https://cdn-icons-png.flaticon.com/512/482/482631.png"
                    placeholder="search query here"
                    colorConfig={colorGuide.lightComponents.searchBar}
                    inputColorConfig={colorGuide.lightComponents.inputFields}
                />
                <BsBell style={{ width: 24, height: 21, color: "black", paddingLeft: 12 }} />
            </div>
            <h2 style={{paddingLeft:12}}>Manage Courses</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {courseData.map((data, index) => (
                    <Card key={index} elevation={4} style={{ width: '350px', padding: '16px', margin: '16px' }}>
                        {/* Image */}
                        <img src={courseimg} alt="Product" style={{ width: '100%', height: 'auto' }} />

                        <CardContent style={{ padding: '16px' }}>
                            <CardContentWrapper>
                                {/* Title */}
                                <Typography variant="h6" gutterBottom>
                                    {data.title}
                                </Typography>
                                {/* Description */}
                                <Typography variant="body2" color="textSecondary" gutterBottom>
                                    {data.description}
                                </Typography>
                                {/* Price */}
                                <Typography variant="subtitle1" gutterBottom>
                                    {data.amount}
                                </Typography>
                            </CardContentWrapper>
                        </CardContent>

                        <CardActions style={{ justifyContent: 'center' }}>
                            {/* Buttons in a column */}
                            <Box display="flex" flexDirection="column" width="100%">
                                {/* Button 1 (Transparent) */}
                                <Button
                                    variant="contained"
                                    size="small"
                                    color="primary"
                                    style={{
                                        marginBottom: '8px',
                                        width: '100%',
                                        backgroundColor: 'rgba(100, 10, 244, 0.07)',
                                        border: '1px solid rgba(100, 10, 244, 1)',
                                        color: 'rgba(100, 10, 244, 1)'
                                    }}
                                >
                                    Add Video to your course
                                </Button>
                                {/* Button 2 (Colored) */}
                                <Button
                                    variant="contained"
                                    size="small"
                                    color="primary"
                                    style={{ width: '100%', backgroundColor: 'rgba(100, 10, 244, 1)' }}
                                >
                                    Manage Course
                                </Button>
                            </Box>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Managecourses;
