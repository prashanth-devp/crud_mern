/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
import axios from 'axios'

const UpdateMarks = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState()
    const [english, setEnglish] = useState(0)
    const [science, setScience] = useState(0)
    const [maths, setMaths] = useState(0)
    const [social, setSocial] = useState(0)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
      axios.get("http://127.0.0.1:3001/getUser/"+id)
      .then(result => {
        console.log(result)
        setName(result.data.name)
        setEnglish(result.data.english)
        setScience(result.data.science)
        setMaths(result.data.maths)
        setSocial(result.data.social)
      })
      .catch(err => console.log(err))
  }, [])

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put("http://127.0.0.1:3001/updateUser/"+id, {name, english, science, maths, social})
        .then(result => {
            console.log(result)
            navigate("/")
        })
        .catch(err => console.log(err))
    }

  return (
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Student Data</h2>

          <form onSubmit={handleUpdate}> 
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="english" className="block text-sm font-medium leading-6 text-gray-900">
                English
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="english"
                  id="english"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEnglish(e.target.value)}
                  value={english}
                />
              </div>
            </div>
            </div>

            <div className="sm:col-span-4 flex flex-row space-x-6 mt-5">
              <div>
              <label htmlFor="science" className="block text-sm font-medium leading-6 text-gray-900">
                Science
              </label>
              <div className="mt-2">
                <input
                  id="science"
                  name="science"
                  type="text"
                  autoComplete="science"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setScience(e.target.value)}
                  value={science}
                />
              </div>
              </div>
              <div>
              <label htmlFor="maths" className="block text-sm font-medium leading-6 text-gray-900">
                Maths
              </label>
              <div className="mt-2">
                <input
                  id="maths"
                  name="maths"
                  type="text"
                  autoComplete="maths"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setMaths(e.target.value)}
                  value={maths}
                />
              </div>
              </div>
              <div>
              <label htmlFor="social" className="block text-sm font-medium leading-6 text-gray-900">
                Social
              </label>
              <div className="mt-2">
                <input
                  id="social"
                  name="social"
                  type="text"
                  autoComplete="social"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setSocial(e.target.value)}
                  value={social}
                />
              </div>
              </div>
            </div>
            <button type="submit" className="mt-6 bg-blue-700 text-white">Update</button>
          </form>
        </div>
  )
}

export default UpdateMarks