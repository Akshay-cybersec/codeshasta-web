import React, { useState, useEffect } from "react";
import "./homestyle.css";
import "./course.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { LiaFileUploadSolid } from "react-icons/lia";

function Course() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        paidChecked: false,
        unpaidChecked: false,
        amount: "",
        videoFile: null,
        videoFileName: "",
        thumbnail: null,
        showSuccessMessage: false
    });

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("courseFormData"));
        if (savedData) {
            setFormData(savedData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("courseFormData", JSON.stringify(formData));
    }, [formData]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    const handleThumbnailChange = (event) => {
        const file = event.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            thumbnail: file
        }));
    };

    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            videoFile: file,
            videoFileName: file.name
        }));
    };

    const handleNextButtonClick = () => {
        // Merge new data with previous data
        const newData = {
            ...formData,
            showSuccessMessage: true
        };

        // Store merged data in local storage
        localStorage.setItem("courseFormData", JSON.stringify(newData));

        // Update state with merged data
        setFormData(newData);
    };

    return (
        <div className="maindiv">
            <div className="createcourse">
                <p className="titlebar">Create Course</p>
                <ProgressBar bgColor="#640AF4" baseBgColor="rgba(100, 10, 244, 0.46)" height="13" className="progbar" completed={40} customLabel=" " />
                <p className="childtitles">Title</p>
                <input className="inputfield" name="title" value={formData.title} onChange={handleInputChange} placeholder="Add a title of Course" />
                <p className="childtitles">Description</p>
                <textarea rows={5} className="textareafield" name="description" value={formData.description} onChange={handleInputChange} placeholder="Add a Description of Course" />
                <div className="thumbnailpart">
                    <input
                        type="file"
                        id="thumbnailInput"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleThumbnailChange}
                    />
                    <div onClick={() => document.getElementById("thumbnailInput").click()} className="upload-box">
                        <p className="childtitles">Thumbnail</p>
                        {formData.thumbnail ? (
                            <img src={URL.createObjectURL(formData.thumbnail)} alt="Thumbnail" className="thumbnail-image" />
                        ) : (
                            <div className="uploadbutton">
                                <LiaFileUploadSolid style={{ width: 40, height: 40, color: 'rgba(118, 118, 118, 1)' }} />
                                <p style={{ color: 'rgba(118, 118, 118, 1)' }}>Upload thumbnail</p>
                            </div>
                        )}
                    </div>
                    <div className="bottomthumbnail">
                        <div className="centerme">
                            <p className="childtitles">Choose paid or unpaid</p>
                        </div>
                        <div className="uploadanother">
                            <div className="innerchkbox">
                                <div className="chkbox">
                                    <input
                                        type="checkbox"
                                        className="bigbro"
                                        name="paidChecked"
                                        checked={formData.paidChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <p style={{ paddingLeft: 12 }}>Paid</p>
                                </div>
                                <div className="chkbox">
                                    <input
                                        type="checkbox"
                                        className="bigbro"
                                        name="unpaidChecked"
                                        checked={formData.unpaidChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <p style={{ paddingLeft: 12 }}>UnPaid</p>
                                </div>
                            </div>
                            <div className="addcoursetitle">
                                <input className="inputfield" name="amount" value={formData.amount} onChange={handleInputChange} placeholder="Enter an Amount" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="childtitles">Add Video</p>
                    <div onClick={() => document.getElementById("videoInput").click()} className="upload-box">
                        <div className="uploadbutton">
                            <LiaFileUploadSolid style={{ width: 40, height: 40, color: 'rgba(118, 118, 118, 1)' }} />
                            <p style={{ color: 'rgba(118, 118, 118, 1)' }}>Add video or choose video</p>
                        </div>
                    </div>
                    <input
                        type="file"
                        id="videoInput"
                        style={{ display: "none" }}
                        onChange={handleVideoChange}
                    />
                    {formData.videoFile && (
                        <div style={{ width: 260 }}>
                            <p className="childtitles">Selected Video</p>
                            <div className="selected-file">{formData.videoFileName}</div>
                        </div>
                    )}
                </div>
                <div className="nextbtn">
                    <button className="nextbtnstyle" onClick={handleNextButtonClick}>Next</button>
                </div>
                {formData.showSuccessMessage && (
                    <div className="success-message">
                        Course uploaded successfully!
                    </div>
                )}
            </div>
        </div>
    );
}

export default Course;
