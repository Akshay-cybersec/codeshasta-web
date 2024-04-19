import React, { useState, useEffect } from "react";
import "./homestyle.css";
import "./course.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { LiaFileUploadSolid } from "react-icons/lia";

function Course() {
    const [formData, setFormData] = useState({
        name: "",
        quantity: "",
        weight: "",
        cost: "",
        unit: "",
        precautions: "",
        origin: "",
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
                <p className="titlebar">Add Data</p>
                <ProgressBar bgColor="#640AF4" baseBgColor="rgba(100, 10, 244, 0.46)" height="13" className="progbar" completed={40} customLabel=" " />
                <p className="childtitles">Name</p>
                <input className="inputfield" name="name" value={formData.name} onChange={handleInputChange} placeholder="Add a title of Course" />
                <p className="childtitles">Quantity</p>
                <input className="inputfield" name="quantity" value={formData.quantity} onChange={handleInputChange} placeholder="Add quantity" />
                <p className="childtitles">Weight</p>
                <input className="inputfield" name="weight" value={formData.weight} onChange={handleInputChange} placeholder="Add weight" />
                <p className="childtitles">Cost</p>
                <input className="inputfield" name="cost" value={formData.cost} onChange={handleInputChange} placeholder="Add cost" />
                <p className="childtitles">Unit</p>
                <input className="inputfield" name="unit" value={formData.unit} onChange={handleInputChange} placeholder="Add unit" />
                <p className="childtitles">Precautions</p>
                <textarea rows={5} className="textareafield" name="precautions" value={formData.precautions} onChange={handleInputChange} placeholder="Add Precautions here" />
                <p className="childtitles">Origin</p>
                <input className="inputfield" name="origin" value={formData.origin} onChange={handleInputChange} placeholder="Add origin" />
                
                <div className="nextbtn">
                    <button className="nextbtnstyle" onClick={handleNextButtonClick}>Next</button>
                </div>
                {formData.showSuccessMessage && (
                    <div className="success-message">
                        Data Added successfully!
                    </div>
                )}
            </div>
        </div>
    );
}

export default Course;
