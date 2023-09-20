"use client";
import React, { useState } from "react";

const Form = () => {
    const countries = ["Ireland", "Canada", "Sweden", "Germany", "United States"];
    const languages = ["English", "Irish", "Spanish", "German", "Polish"];

    const [selectedCountry, setSelectedCountry] = useState("");

    const handleCountryChange = (event: any) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <div className="p-10">
            <div className="bg-neutral-200 shadow-xl rounded-md p-10">
                <form className="flex flex-col" method="GET">
                    <label className="text-sm">Email Address</label>
                    <input
                        className="shadow-md border-b-4 rounded-md border-teal-100 focus:border-teal-300 h-8 indent-2 mb-5"
                        type="text"
                        id="email"
                        name="email"
                        required
                    />
                    <label className="text-sm">Country/Region</label>
                    <select
                        id="country"
                        className="shadow-md border-b-4 rounded-md border-teal-100 focus:border-teal-300 h-8 indent-2 mb-5"
                        value={selectedCountry}
                        onChange={handleCountryChange}>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                    <label className="text-sm">Language</label>
                    <select id="language" className="shadow-md border-b-4 rounded-md border-teal-100 focus:border-teal-300 h-8 indent-2 mb-5">
                        {languages.map((language, index) => (
                            <option key={index} value={language}>
                                {language}
                            </option>
                        ))}
                    </select>
                    <div className="p-2 flex">
                        <button className="ml-10 bg-slate-100 p-2 border-teal-300 border-2 text-sm font-bold hover:border-teal-500">SAVE</button>
                        <button className="ml-12 pl-1 p-2  border-teal-300 border-y-2 hover:border-teal-500">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
