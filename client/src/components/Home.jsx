import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <h2 className="text-lg font-bold">Student Marks</h2>
        <Link to="/teacher"><button className="bg-blue-700 text-white m-2">Teacher</button></Link>
        <Link to="/display"><button className="bg-blue-700 text-white m-2">Head Master</button></Link>
    </div>
  )
}

export default Home