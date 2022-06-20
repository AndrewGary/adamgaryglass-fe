import { LockClosedIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";

const initalFormValues = {
  username: "",
  password: "",
};

const AddNewProductForm = () => {
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("Submit button clicked");
  };

  const [formValues, setFormValues] = useState(initalFormValues);

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
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Add New Product
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="productName" className="sr-only">
                  Product Name
                </label>
                <input
                  id="email-address"
                  name="productName"
                  type="text"
                  autoComplete="email"
                  required
                  className="border border-gray-300 placeholder-gray-500 my-2 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Product Name"
                  onChange={handleChange}
                />
              </div>
              
              <div class="mb-3 w-full">
                <label
                  for="productDescription"
                  class="sr-only"
                >
                  Product Description
                </label>
                <textarea
                  className="placeholder-gray-500 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:border-indigo-500 focus:outline-none"
                  id="productDescription"
                  name="productDescription"
                  rows="3"
                  placeholder="Product Description"
                ></textarea>
              </div>
              
              {/* <div>
                <label htmlFor="productDescription" className="sr-only">
                  Product Description
                </label>
                <input
                  id="productDescription"
                  name="productDescription"
                  type="textarea"
                  autoComplete="current-password"
                  required
                  className="border border-gray-300 placeholder-gray-500 my-2 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Product Description"
                />
              </div> */}
              <div>
                <label htmlFor="price" className="sr-only">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="border border-gray-300 placeholder-gray-500 my-2 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Price $"
                />
              </div>

              <div className="  flex border border-gray-300 rounded-md px-3 py-2 justify-start ">
                <label className=" text-gray-500">
                    Category
                </label>
                <select className=" text-gray-500 border border-gray-400 ml-4">
                    <option>Rigs</option>
                    <option>Drys</option>
                    <option>Pendants</option>
                    <option>Carb caps</option>
                </select>
              </div>

              <div>
                <label className=" text-gray-500">
                    Select Pictures
                    <input
                    type="file"
                    multiple
                    className="border border-gray-300 placeholder-gray-500 my-2 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    />
                </label>
              </div>


            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSubmit}
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewProductForm;
