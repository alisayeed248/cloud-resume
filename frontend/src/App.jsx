import React from 'react'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-8 bg-white shadow-md rounded-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome to My Site
        </h1>
        <p className="mt-4 text-gray-700">
          Deployed with React, Tailwind, S3, and GitHub Actions
        </p>
      </div>
    </div>
  )
}

export default App