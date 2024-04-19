import { useState, useRef } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { ClipLoader } from "react-spinners";




function Certificate() {
    const [thumbnail, setThumbnail] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const thumbnailInputRef = useRef(null);

    const handleThumbnailChange = (event) => {
        const file = event.target.files[0];
        setThumbnail(file);
    };

    const handleThumbnailClick = () => {
        thumbnailInputRef.current.click();
    };

    const handleNextButtonClick = async () => {
        setIsLoading(true);

        try {
            const formData = new FormData();
            formData.append("certificate_file", thumbnail);

            const requestOptions = {
                method: 'POST',
                body: formData,
                redirect: 'follow'
            };

            const response = await fetch("https://6a66-2401-4900-57ff-350c-dc09-e9f2-92a5-b9f9.ngrok-free.app/api/verify-certificate/", requestOptions);
            const result = await response.json(); // Parse JSON response
            const message = result.message; // Access the "message" property

            window.alert(`${message}\n`); // Display alert
            setShowSuccessMessage(true);
        } catch (error) {
            console.error('Error uploading certificate:', error);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="maindiv">
            <div className="createcourse">
                <p className="titlebar" style={{ fontWeight: "bold" }}>
                    Certificate Validation
                </p>
                <p className="childtitles">ID</p>
                <input className="inputfield" placeholder="Enter Your ID" />
                <h2 style={{ paddingTop: 20 }}>Or</h2>
                <div className="thumbnailpart">
                    <input
                        type="file"
                        id="thumbnailInput"
                        accept="image/*, .pdf"
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
                        {isLoading ? (
                            <ClipLoader color={"#ffffff"} loading={isLoading} size={20} />
                        ) : (
                            "Verify"
                        )}
                    </button>
                </div>
                {showSuccessMessage && (
                    <div className="success-message">
                        Certificate uploaded successfully!
                    </div>
                )}
            </div>
        </div>
    );
}

export default Certificate;
