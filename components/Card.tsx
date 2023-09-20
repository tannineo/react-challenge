import React from "react";

const Card = () => {
    return (
        <div className="p-8">
            <div className="w-64 h-80 bg-white shadow-xl rounded-md overflow-hidden p-5">
                <div className="h-40 overflow-hidden">
                    <img src="favicon.ico" alt="Sample Image"></img>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-1">Title 1 line</h2>
                    <p className="text-sm font-medium mb-4">body copy</p>
                    <button className="p-2 border-teal-500 border-4 rounded-2xl text-sm">
                        Post
                        <span className="pl-3 text-teal-500">&#8594;</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
