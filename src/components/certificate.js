import "./homestyle.css";
import Leftdiv from "./leftdiv";
import { useState, useRef } from "react";
import "./course.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { AiOutlineUpload } from "react-icons/ai";
import { css } from "@emotion/react"; // Import css function from react-spinners
import { ClipLoader } from "react-spinners"; // Import ClipLoader component from react-spinners

function Certificate() {
    const [paidChecked, setPaidChecked] = useState(false);
    const [unpaidChecked, setUnpaidChecked] = useState(false);
    const [thumbnail, setThumbnail] = useState(null);
    const [videoFile, setVideoFile] = useState(null);
    const [videoFileName, setVideoFileName] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // State to control the loading state
    const thumbnailInputRef = useRef(null);
    const videoInputRef = useRef(null);

    const handlePaidChange = () => {
        setPaidChecked(true);
        setUnpaidChecked(false);
    };

    const handleUnpaidChange = () => {
        setPaidChecked(false);
        setUnpaidChecked(true);
    };

    const handleThumbnailClick = () => {
        thumbnailInputRef.current.click();
    };

    const handleVideoUploadClick = () => {
        videoInputRef.current.click();
    };

    const handleThumbnailChange = (event) => {
        const file = event.target.files[0];
        setThumbnail(file);
    };

    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        setVideoFile(file);
        setVideoFileName(file.name);
    };

    const handleNextButtonClick = () => {
        setIsLoading(true); // Set loading state to true
        // Simulate loading for 2 seconds (replace with your actual API call or loading logic)
        setTimeout(() => {
            setIsLoading(false); // Set loading state to false after 2 seconds
            setShowSuccessMessage(true);
        }, 2000);
    };

    return (
        <div className="maindiv">
            <div className="createcourse">
                <p className="titlebar" style={{ fontWeight: "bold" }}>
                    Certificate Validation
                </p>
                <p className="childtitles">Id</p>
                <input className="inputfield" placeholder="Enter Your ID" />
                <h2 style={{ paddingTop: 20 }}>Or</h2>
                <div className="thumbnailpart">
                    <input
                        type="file"
                        id="thumbnailInput"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleThumbnailChange}
                        ref={thumbnailInputRef}
                    />
                    <div onClick={handleThumbnailClick} className="upload-box">
                        <p className="childtitles">Certificate Image</p>
                        {thumbnail ? (
                            <img
                                src={URL.createObjectURL(thumbnail)}
                                alt="Thumbnail"
                                className="thumbnail-image"
                            />
                        ) : (
                            <div className="uploadbutton">
                                <AiOutlineUpload
                                    style={{
                                        width: 40,
                                        height: 40,
                                        color: "rgba(118, 118, 118, 1)",
                                    }}
                                />
                                <p style={{ color: "rgba(118, 118, 118, 1)" }}>
                                    Upload Certificate
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="nextbtn">
                    <button className="nextbtnstyle" onClick={handleNextButtonClick}>
                        {isLoading ? ( // Display loader if isLoading is true
                            <ClipLoader color={"#ffffff"} loading={isLoading} size={20} />
                        ) : (
                            "Next"
                        )}
                    </button>
                </div>
                {showSuccessMessage && (
                    <div className="success-message">
                        Course uploaded successfully!
                    </div>
                )}
            </div>
        </div>
    );
}

export default Certificate;
