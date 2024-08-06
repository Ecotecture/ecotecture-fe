"use client"
import Image from 'next/image'
import React, { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';



const architectureServices = [
  "Architectural Design",
  "Site Analysis and Planning",
  "Interior Design",
  "Project Management",
  "Building Information Modeling (BIM)",
  "Construction Services",
  "Urban Design and Planning",
  "Sustainable Design",
  "Historic Preservation",
  "Landscape Architecture"
];

export default function Service() {
  const router = useRouter();
  const [service, setServices] = useState("Architectural Design");
  const [username, setUsername] = useState("");
  const [solar, setSolar] = useState(true);
  const [wind, setWind] = useState(true);
  const [hydro, setHydro] = useState(true);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (service !== "" && username !== "") {
      router.back();
    }
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      {/* SVG Green Big */}
      <div className="absolute inset-0 mx-[30rem] z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="1135" height="1576" viewBox="0 0 1135 1576" fill="none">
          <path d="M335.785 0H1246V1576L38.749 1276.85C11.4749 1270.09 -4.87615 1242.19 2.55535 1215.1L335.785 0Z" fill="#257251" fillOpacity="0.06" />
        </svg>
      </div>
      {/* SVG Green Small */}
      <div className="absolute inset-0 mx-[70rem] z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="390" height="689" viewBox="0 0 390 689" fill="none">
          <path d="M392.989 0.0321995L392.989 260.486L392.989 688.414L-4.71812e-05 660.083L392.989 0.0321995Z" fill="#257251" fillOpacity="0.06" />
        </svg>
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-between py-24 px-0 my-12 z-30 w-10/12 mx-auto">
        {/* Architect Service Form Row */}
        <div className="z-10 mb-44 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="m-auto bg-white w-10/12 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-sans font-semibold text-2xl mb-10">Architect Service 
                <span className='underline decoration-8 underline-offset-1 decoration-[#448BCA]'>Form</span>
              </div>
              <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="service" className="block mb-2 text-sm font-semibold text-gray-900">
                    Choose an architect service
                  </label>
                  <select
                    id="service"
                    onChange={(e) => setServices(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    required
                  >
                    <option value="" disabled>Select Service</option>
                    {architectureServices.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-5">
                  <p className='font-semibold'>Check any of your interests</p>
                  <div className='my-3 p-1 border border-blue-200 rounded flex items-center'>
                    <input
                      checked={solar}
                      onChange={() => setSolar(!solar)}
                      id="solar"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="solar" className="ms-2 text-sm font-medium text-gray-900">Solar Panel</label>
                  </div>
                  <div className='my-3 p-1 border border-blue-200 rounded flex items-center'>
                    <input
                      checked={wind}
                      onChange={() => setWind(!wind)}
                      id="wind"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="wind" className="ms-2 text-sm font-medium text-gray-900">Wind Turbine</label>
                  </div>
                  <div className='my-3 p-1 border border-blue-200 rounded flex items-center'>
                    <input
                      checked={hydro}
                      onChange={() => setHydro(!hydro)}
                      id="hydro"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="hydro" className="ms-2 text-sm font-medium text-gray-900">Hydroelectric</label>
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="email" className="font-semibold block mb-2 text-sm text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@flowbite.com"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className='justify-center items-center text-center'>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>
                <p className='py-5 font-light text-blue-700'>
                  Thank you for filling out the form! You will be contacted very soon.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
