import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'

const DisplayMarks = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:3001")
        .then(result => setData(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://127.0.0.1:3001/deleteUser/'+id)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        <h2 className="font-bold mb-4">Student Marks</h2>
        {/* <Link to="/create"><button className="bg-blue-700 text-white">Add +</button></Link> */}
        <table className="table-auto">
            <thead>
                <tr>
                    <th>Name</th>
                    {/* <th>English</th>
                    <th>Maths</th>
                    <th>Physics</th>
                    <th>Actions</th> */}
                    <th>Total Marks</th>
                    <th>Percentage</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((student) => (
                    // eslint-disable-next-line react/jsx-key
                    <tr>
                        <td>{student.name}</td>
                        <td>{student.english + student.science + student.maths + student.social}</td>
                        <td>{((student.english + student.science + student.maths + student.social)/400)*100}</td>
                        {/* <td>{student.physics}</td> */}
                        <Link to={`/update/${student._id}`}><button className="bg-green-700 text-white mr-2 mb-2">Update</button></Link>
                        <button className="bg-red-700 text-white" onClick={() => handleDelete(student._id)}>Delete</button>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default DisplayMarks