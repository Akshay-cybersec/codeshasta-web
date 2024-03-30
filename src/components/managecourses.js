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
                title: "Dummy Course 1",
                description: "Description for Dummy Course 1",
                amount: "₹100"
            },
            {
                title: "Dummy Course 2",
                description: "Description for Dummy Course 2",
                amount: "₹200"
            }
        ];

        // Merge dummy data with existing course data
        setCourseData(prevData => [...prevData, ...dummyData]);
    }, []);

    return (
        <div className="maindiv" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: 20 }}>
            {courseData.map((data, index) => (
                <Card key={index} elevation={4} style={{ width: '350px', padding: '16px' }}>
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
    );
}

export default Managecourses;
