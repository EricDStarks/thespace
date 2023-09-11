import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"



function UserProfileComponent() {

    const [file, setFile] = useState(null)
    const [file2, setFile2] = useState(null)
    const [file3, setFile3] = useState(null)

    const handleFileChange = (e) => {
        // Handle the selected file
        let files = e.target.files[0]
        if (files) {
            let filesURL = URL.createObjectURL(files)
            console.log(filesURL)
            setFile(filesURL)
        }

    };

    const handleFileChange2 = (e) => {
        // Handle the selected file
        let files = e.target.files[0]
        if (files) {
            let filesURL = URL.createObjectURL(files)
            console.log(filesURL)
            setFile2(filesURL)
        }

    };

    const handleFileChange3 = (e) => {
        // Handle the selected file
        let files = e.target.files[0]
        if (files) {
            let filesURL = URL.createObjectURL(files)
            console.log(filesURL)
            setFile3(filesURL)
        }

    };



    return (
        <div id="UserProfileComponentContainer">
            <div id="UserProfileContent">
                {/* <h1 id="profileH1">Profile</h1> */}
                <div id="SnapShotAndResumeContainer">

                    <h4 id="PortfolioH4">Portfolio Snapshot</h4>
                    <div id="PortfolioSnapchot">

                        <div id="PortfolioItems">
                            {file ? (
                              
                                <img src={file} alt="Selected Profile" width="50%" height="100%" />
                             
                            ) : (
                                <label htmlFor="fileInput1" className="file-label">
                                    {/* SVG icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="60%" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16">
                                <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2Zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672Z" />
                                <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5Z" />
                            </svg>
                                    <input
                                        type="file"
                                        className="file-input"
                                        onChange={handleFileChange}
                                        id="fileInput1"
                                        style={{ display: "none" }}
                                    />
                                </label>
                            )}
                        </div>
                        <div>
                        {file2 ? (
                                <img src={file2} alt="Selected Profile" width="50%" height="100%" />
                            ) : 
                            <label  class="file-label" htmlFor="fileInput2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="60%" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16">
                                <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2Zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672Z" />
                                <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5Z" />
                            </svg>
                            <input type="file" class="file-input" id="fileInput2" onChange={handleFileChange2} style={{ display: "none" }} />
                        </label>}
                        </div>
                        <div>
                        {file3 ? (
                                <img src={file3} alt="Selected Profile" width="50%" height="100%" />
                            ) : 
                            <label htmlFor="fileInput3" class="file-label">``
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="60%" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16">
                                <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2Zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672Z" />
                                <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5Z" />
                            </svg>
                            <input type="file" id="fileInput3" class="file-input" onChange={handleFileChange3} />
                        </label>}
                        </div>
                    </div>
                    <div id="ResumeContainer">
                        <h4>Pitch</h4>
                        <textarea id="ResumeTextArea"></textarea>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label><h4>Upload Resume</h4></Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Button type="submit" id="ResumeSubmitButton">Create Profile</Button>
                    </div>
                </div>
                <div id="ProfileContainer">
                    <h4>Profile Info</h4>
                    <div id="ProfileContentContainer">
                        <h3>Add Photo</h3>
                        <div style={{ width: "60%", height: "25%", border: "none" }}>
                            <label for="fileInput" class="file-label">
                                <svg style={{ width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />

                                </svg>
                                <input type="file" id="fileInput" class="file-input" />
                            </label></div>

                        <input placeholder="Name" />
                        <input placeholder="Email" />
                        <input placeholder="Phone Number" />
                        <input placeholder="Link" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserProfileComponent