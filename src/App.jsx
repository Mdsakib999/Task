import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-4 py-2 text-slate-950 mt-3">
        {/* Left Side */}
        <div className="flex items-center">
          <div className="border-2 px-2 rounded-md mr-8">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <p className="text-xs lg:text-xl ">
            My jobs
            <span>
              <i class="fa-solid fa-chevron-right mx-2"></i>
            </span>
            Frontend Developer
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center">
          <span className="px-3 py-2 bg-slate-200 rounded-full mr-3 lg:mr-6">
            <i className="far fa-envelope text-green-500 lg:text-2xl"></i>
          </span>

          <span className="px-3 py-2 bg-slate-200 rounded-full mr-2 lg:mr-10">
            <i className="far fa-bell text-green-500 lg:text-2xl"></i>
          </span>

          <div className="flex items-center lg:mr-10">
            <img
              className="w-16 lg:w-12 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvzyDZBV-DDHWZKmDKofXQUf0JcFRSIjpXLEK9Dkukg&s"
              alt="Profile"
            />
            <div className="ml-2 hidden lg:block">
              <p className="text-lg font-medium text-blue-600">John Doe</p>
              <p className="text-">Role</p>
            </div>
          </div>

          
        </div>
      </nav>

      {/* body */}

      <div className="bg-slate-200 b pb-10">
        <div className="bg-white grid-cols-3 grid lg:grid-cols-7 mt-10 w-[90%] mx-auto rounded-md px-3 py-3">
          <div>
            <p className="mb-2 text-slate-600">Job Title</p>
            <p className="text-black font-semibold">
              Frontend Developer <i class="fa-solid fa-chevron-down"></i>{" "}
              <i class="fa-solid fa-gear"></i>
            </p>
          </div>

          <div>
            <p className="mb-2 ml-2 text-slate-600">Hiring Manager</p>
            <p className="text-black ml-2 font-semibold">Nail Patel</p>
          </div>

          <div>
            <p className="mb-2 text-slate-600">Department</p>
            <p className="text-black font-semibold">Tech</p>
          </div>

          <div>
            <p className="mb-2 text-slate-600">Team</p>
            <p className="text-black font-semibold">Team-A</p>
          </div>

          <div>
            <p className="mb-2 text-slate-600">Client</p>
            <p className="text-black font-semibold">John Doe</p>
          </div>

          <div>
            <p className="mb-2 text-slate-600">Status</p>
            <p className="text-green-500 font-semibold">Open</p>
          </div>

          <div>
            <p className="mb-2 text-slate-600">Priority</p>
            <p className="text-red-600 font-semibold">High</p>
          </div>
        </div>

        <div className=" w-[90%] mx-auto mt-14 grid lg:grid-cols-6 lg:text-center font-semibold">
          <p className="p-4  lg:py-4 ">Job management</p>
          <p className="bg-white p-4 box-radius lg:py-4 ">JD rewrite</p>
          <p className="p-4  lg:py-4 ">R3achout</p>
          <p className="p-4  lg:py-4 ">Search</p>
          <p className="p-4  lg:py-4 ">Intake</p>
          <p className="p-4  lg:py-4 ">Interview</p>
        </div>

        <div className=" w-[93%] mx-auto rounded-md bg-white grid lg:grid-cols-3 pt-6">
          <div className="pl-4 ">
            <p className="font-semibold mb-4">Style</p>
            <div className="relative">
              <input
                className="w-[90%] h-10 border-2 rounded-full "
                type="text"
                placeholder=" -"
              />
              <i class=" fa-solid fa-chevron-down absolute right-20 top-3"></i>
            </div>
            <p className="font-semibold mt-5 mb-4">Person</p>
            <div className="relative">
              <input
                className="w-[90%] h-10 border-2 rounded-full "
                type="text"
                placeholder=" -"
              />
              <i class=" fa-solid fa-chevron-down absolute right-20 top-3"></i>
            </div>
            <p className="font-semibold mt-5 mb-4">Format</p>
            <div className="relative">
              <input
                className="w-[90%] h-10 border-2 rounded-full "
                type="text"
                placeholder=" -"
              />
              <i class=" fa-solid fa-chevron-down absolute right-20 top-3"></i>
            </div>

            <button className="text-white my-6 w-[80%] rounded-full h-10 font-semibold bg-green-600">
              Button
            </button>
          </div>

          <div className="w-[95%] mx-auto">
            <p className="font-semibold mb-5 ">Suggested Job Description</p>
            <textarea
              className="border-2 w-[95%] p-2 rounded-md"
              id="w3review"
              name="w3review"
              rows="20"
              placeholder="Response here"
            ></textarea>
          </div>

          <div className="mt-5 lg:mt-0">
            <span className="pl-6 font-semibold">
              JD Rewrite name 001 <i class=" fa-solid fa-chevron-down mr-2 lg:mr-4"></i>
            </span>
            <button className="btn btn-outline btn-success rounded-full lg:mx-3 text-green-600 mx-2">
              Delete
            </button>
            <button className="btn btn-success rounded-full text-white">
              Save
            </button>

            <div className="mb-10 relative">
              <div className="border-2 rounded-lg w-[90%] mx-auto mt-4 py-2 h-[480px]">
                <span className="font-semibold ml-4">Normal </span>
                <i class="mx-3 fa-solid fa-bold"></i>
                <i class="mx-3 fa-solid fa-italic"></i>
                <i class="mx-3 fa-solid fa-underline"></i>
                <i class="mx-3 fa-solid fa-link"></i>
                <i class="mx-3 fa-solid fa-align-justify"></i>
                <i class="fa-solid fa-align-justify"></i>
                <input
                  className="border-2 w-[100%] my-3 h-10 pl-3"
                  placeholder="Type here"
                  type="text"
                />
              </div>
              <span className="border-4 font-semibold rounded-full px-4 py-1 absolute top-16 rot ">
                Close <i class=" fa-solid fa-chevron-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
