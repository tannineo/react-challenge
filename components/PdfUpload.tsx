import React from "react";

const PdfUpload = () => {
    return (
        <div className="p-10">
            <form>
                <h1 className="mb-4">Upload a PDF file</h1>
                <input type="file" accept="application/pdf" />
                <div className="mt-4">
                    <button className="p-2 border-teal-500 border-4 rounded-2xl text-sm" type="submit">
                        Upload
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PdfUpload;
