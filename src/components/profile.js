import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners"; // Import ClipLoader from react-spinners

function Profile() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: ""
    });

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Load user data from local storage when component mounts
        const savedData = JSON.parse(localStorage.getItem("userData"));
        if (savedData) {
            setFormData(savedData);
        }
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleNextButtonClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setShowSuccessMessage(true);
            // Save user data to local storage
            localStorage.setItem("userData", JSON.stringify(formData));
        }, 2000);
    };

    return (
        <div className="maindiv">
            <div className="createcourse">
                <p className="titlebar" style={{ fontWeight: "bold" }}>
                    Profile Setting
                </p>
                <p className="childtitles">Firstname</p>
                <input className="inputfield" name="firstName" placeholder="Your Name" value={formData.firstName} onChange={handleInputChange} />
                <p className="childtitles">Lastname</p>
                <input className="inputfield" name="lastName" placeholder="Your Lastname" value={formData.lastName} onChange={handleInputChange} />
                <p className="childtitles">Password</p>
                <input className="inputfield" name="password" placeholder="Your Password" type="password" value={formData.password} onChange={handleInputChange} />
                <p className="childtitles">Email</p>
                <input className="inputfield" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} />
                
                <div className="nextbtn">
                    <button className="nextbtnstyle" onClick={handleNextButtonClick}>
                        {isLoading ? (
                            <ClipLoader color={"#ffffff"} loading={isLoading} size={20} />
                        ) : (
                            "Save"
                        )}
                    </button>
                </div>
                {showSuccessMessage && (
                    <div className="success-message">
                        Profile Changed successfully!
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;
