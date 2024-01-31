// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CreateMarks = () => {
    const [name, setName] = useState("");
    const [english, setEnglish] = useState(0);
    const [science, setScience] = useState(0);
    const [maths, setMaths] = useState(0);
    const [social, setSocial] = useState(0);
    const navigate = useNavigate();
    // axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://crud-mern-api-seven.vercel.app/createUser", { name, english, science, maths, social })
            .then(result => {
                console.log(result);
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-2xl font-semibold leading-7 text-gray-900 mb-6">Student Data</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-400 focus:border-indigo-400"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="col-span-1">
                    <label htmlFor="english" className="block text-sm font-medium leading-6 text-gray-900">English</label>
                    <input
                        type="text"
                        name="english"
                        id="english"
                        autoComplete="family-name"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-400 focus:border-indigo-400"
                        onChange={(e) => setEnglish(e.target.value)}
                    />
                </div>

                <div className="col-span-1">
                    <label htmlFor="science" className="block text-sm font-medium leading-6 text-gray-900">Science</label>
                    <input
                        type="text"
                        name="science"
                        id="science"
                        autoComplete="science"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-400 focus:border-indigo-400"
                        onChange={(e) => setScience(e.target.value)}
                    />
                </div>

                <div className="col-span-1">
                    <label htmlFor="maths" className="block text-sm font-medium leading-6 text-gray-900">Maths</label>
                    <input
                        type="text"
                        name="maths"
                        id="maths"
                        autoComplete="maths"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-400 focus:border-indigo-400"
                        onChange={(e) => setMaths(e.target.value)}
                    />
                </div>

                <div className="col-span-1">
                    <label htmlFor="social" className="block text-sm font-medium leading-6 text-gray-900">Social</label>
                    <input
                        type="text"
                        name="social"
                        id="social"
                        autoComplete="social"
                        className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-400 focus:border-indigo-400"
                        onChange={(e) => setSocial(e.target.value)}
                    />
                </div>

                <div className="col-span-2 sm:col-span-1 md:col-span-3 lg:col-span-4">
                    <button
                        type="submit"
                        className="mt-6 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateMarks;
