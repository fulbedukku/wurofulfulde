import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BackButton = () => {
    const navigate = useNavigate()
    return (
        <button type="button" 
            onClick={() => navigate(-1)}
            // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-4">
            ← Back - ɓaawo
        </button>
    )

}
