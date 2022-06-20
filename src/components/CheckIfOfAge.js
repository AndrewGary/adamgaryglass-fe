import { LockClosedIcon } from '@heroicons/react/solid'
import React, { useState, useEffect } from 'react'

const initalFormValues = {
    username: '',
    password: ''
}

const CheckIfOfAge = () => {

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        console.log('Submit button clicked');
    }

    const [ formValues, setFormValues ] = useState(initalFormValues);

    return (
        <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="temp-icon.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">You must be 21+ to visit this site!</h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />

            <div className='flex justify-evenly'>
              <button
                // type="submit"
                className="group relative w-1/3 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSubmit}
              >
                Yes, I'm at least 21
              </button>
              <button
                // type="submit"
                className="group relative w-1/3 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSubmit}
              >
                No, I'm under 21
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    )
}

export default CheckIfOfAge;