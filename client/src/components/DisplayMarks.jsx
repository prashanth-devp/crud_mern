// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const DisplayMarks = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://crud-api-gamma-three.vercel.app/")
            .then(result => {
                // Sort data based on percentage in descending order
                const sortedData = result.data.sort((a, b) => {
                    const percentageA = ((a.english + a.science + a.maths + a.social) / 400) * 100;
                    const percentageB = ((b.english + b.science + b.maths + b.social) / 400) * 100;
                    return percentageB - percentageA;
                });

                setData(sortedData);
            })
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`https://crud-api-gamma-three.vercel.app/${id}`)
            .then(res => {
                console.log(res);
                // Update state to trigger a re-render without page reload
                setData(prevData => prevData.filter(student => student._id !== id));
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-2xl font-bold mb-4">Student Marks</h2>
            <table className="table-auto border-collapse w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 border">Name</th>
                        <th className="py-2 px-4 border">Total Marks</th>
                        <th className="py-2 px-4 border">Percentage</th>
                        <th className="py-2 px-4 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student) => (
                        <tr key={student._id} className="border">
                            <td className="py-2 px-4">{student.name}</td>
                            <td className="py-2 px-4">{student.english + student.science + student.maths + student.social}</td>
                            <td className="py-2 px-4">{((student.english + student.science + student.maths + student.social) / 400) * 100}</td>
                            <td className="py-2 px-4">
                                <Link to={`/update/${student._id}`}>
                                    <button className="bg-green-700 text-white mr-2 mb-2 py-1 px-2">Update</button>
                                </Link>
                                <button className="bg-red-700 text-white py-1 px-2" onClick={() => handleDelete(student._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayMarks;
