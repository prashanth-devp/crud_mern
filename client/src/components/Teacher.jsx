import { Link } from 'react-router-dom'

const Teacher = () => {
  return (
    <div>
        <h2 className="text-lg font-bold">Student Marks</h2>
        <Link to="/create"><button className="bg-blue-700 text-white m-2">Add +</button></Link>
        <Link to="/display"><button className="bg-blue-700 text-white m-2">Update</button></Link>
        <Link to="/display"><button className="bg-blue-700 text-white m-2">Delete</button></Link>
    </div>
  )
}

export default Teacher