"use client";

import React, { useState } from "react";

const PdfUpload = () => {
    const [selectedFile, setSelectedFile] = useState("");

    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a PDF file to upload!");
            return;
        }

        const formData = new FormData();
        formData.append("pdfFile", selectedFile);
    };

    return (
        <div className="p-10">
            <form>
                <h1 className="mb-4">Upload a PDF file</h1>
                <input type="file" accept="application/pdf" onChange={handleFileChange} />
                <div className="mt-4">
                    <button className="p-2 border-teal-500 border-4 rounded-2xl text-sm" type="submit" onClick={handleUpload}>
                        Upload
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PdfUpload;
