'use client'

import Image from 'next/image'
import Carousel from '../components/Carousel'
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [highList, setHighList] = useState([]);
  const [moderateList, setModerateList] = useState([]);
  const [lowList, setLowList] = useState([]);

  useEffect(() => {
    // Fetch the data from your JSON file (replace 'your_json_file_path.json' with the actual path)
    fetch('weather_by_province.json')
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // get province data based on selectedProvince from json file
  const provinceData = locations.find((location: { id: string }) => location.id === selectedProvince);

  useEffect(() => {
    // Fetch the data from your JSON file (replace 'your_json_file_path.json' with the actual path)
    fetch('weather_by_province.json')
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRenewableEnergyData();
        setHighList(data.renewable_sources.high_list);
        setModerateList(data.renewable_sources.moderate_list);
        setLowList(data.renewable_sources.low_list);

        // You can use 'data' here if needed.
      } catch (error) {
        console.error("Error:", error);
      }
    }

    if (selectedProvince !== '') {
      fetchData();
    }
  }, [selectedProvince]);

  async function getRenewableEnergyData() {
    const apiUrl = 'https://us-central1-ecotecture-9ff06.cloudfunctions.net/api/renewable/';
    const postData = { id: selectedProvince };

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }

      const json = await res.json();
      console.log("json", json);

      return json; // Return the result if needed.
    } catch (error) {
      console.error("Error:", error);
      throw error; // Propagate the error if needed.
    }
  }

  console.log("provinceData", provinceData);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      {/* SVG Green Big */}
      <div className="absolute inset-0 mx-[30rem] z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="1135" height="1576" viewBox="0 0 1135 1576" fill="none">
          <path d="M335.785 0H1246V1576L38.749 1276.85C11.4749 1270.09 -4.87615 1242.19 2.55535 1215.1L335.785 0Z" fill="#257251" fill-opacity="0.06" />
        </svg>
      </div>
      {/* SVG Green Small */}
      <div className="absolute inset-0 mx-[70rem] z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="390" height="689" viewBox="0 0 390 689" fill="none">
          <path d="M392.989 0.0321995L392.989 260.486L392.989 688.414L-4.71812e-05 660.083L392.989 0.0321995Z" fill="#257251" fill-opacity="0.06" />
        </svg>
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-between py-24 px-0 my-12 z-50 w-10/12 mx-auto">
        {/* Sign Up Row */}
        <div className="z-10 mb-44 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-serif text-4xl tracking-wide mb-10">Think positive about our {' '}
                <span className='underline decoration-8 underline-offset-1 decoration-[#257251]'>Climate</span>
              </div>
              <p className="text-gray-700 font-sans text-base mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <div>
                <form action="" className='flex items-center'>
                  <div className="relative w-full">
                    <input type="text" className="font-sans bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="name@company.com" required />
                  </div>
                  <button type="submit" className="flex items-center py-1 px-7 text-xs font-small text-white bg-[#257251] rounded border focus:ring-4 focus:outline-none focus:ring-blue-300">Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
            <Image
              src="/pohon.png"
              alt="Vercel Logo"
              width={410}
              height={278}
              priority
            />
          </div>
        </div>
        {/* Calculator Row */}
        <div className="z-10 mb-44 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="max-w-lg bg-white rounded overflow-hidden shadow-lg ml-auto">
            <div className="px-6 py-6">
              <div className="font-sans font-semibold text-2xl mb-10">Try out our Solar Panel Calcu
                <span className='underline decoration-8 underline-offset-1 decoration-[#448BCA]'>lator</span>
              </div>
              <p className="text-gray-700 font-sans text-base mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <div>
                <form action="" className='flex items-center'>
                  <button type="submit" className="flex items-center py-3 px-7 text-xs font-small text-white bg-[#257251] rounded border focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <a href="/calculator">Calculator</a>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Stories Row */}
        <div className="z-10 mb-44 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="w-full rounded overflow-hidden">
            <div className="px-6 py-6">
              <div className="font-sans font-semibold text-2xl mb-10">Read our Stories</div>
              <p className="text-gray-700 font-sans text-base mb-10 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <Carousel />
          </div>
        </div>
        {/* Weather Checker Row */}
        <div className="z-10 mb-44 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg">
            <div className="px-6 py-6">
              <div className="font-sans font-semibold text-2xl mb-10 ">Weather {' '}
                <span className='underline decoration-8 underline-offset-1 decoration-[#448BCA]'>Checker</span>
              </div>
              <p className="text-gray-700 font-sans text-base mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <div className='mb-10'>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Select your location</label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                >
                  <option value="" disabled selected>Choose a Province</option>
                  {locations.map(location => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
              </div>
            </div>
          </div>

          {
            provinceData && (
              <div className="max-w-lg rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-serif text-2xl tracking-wide mb-5 underline decoration-4 underline-offset-1 decoration-[#257251]">{provinceData?.name ?? ''}
                  </div>
                  <p className="text-gray-700 font-sans text-base mb-5">
                    Here is your weather data:
                  </p>
                  <div className="relative overflow-x-auto mb-5">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                      <tbody>
                        <tr className="bg-white">
                          <td scope="row" className="px-6 py-4 text-gray-400 whitespace-nowrap">
                            Solar Hours per Day
                          </td>
                          <td className="px-6 py-4">
                            {provinceData?.solar_hours_per_day ?? ''} Hours
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td scope="row" className="px-6 py-4 text-gray-400 whitespace-nowrap">
                            Wind Strength
                          </td>
                          <td className="px-6 py-4">
                            {provinceData?.wind_strength ?? ''} Km/h
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td scope="row" className="px-6 py-4 text-gray-400 whitespace-nowrap">
                            Rain power
                          </td>
                          <td className="px-6 py-4">
                            {provinceData?.rain_power ?? ''}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700 font-sans text-base mb-5">
                    Therefore we recommend you to use:
                  </p>
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                      <thead className="text-xs text-gray-400 uppercase">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            High
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Moderate
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Low
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="px-6 py-4">
                            {highList.map((item, index) => (
                              <div key={index}>{item}</div>
                            ))}
                          </td>
                          <td className="px-6 py-4">
                            {moderateList.map((item, index) => (
                              <div key={index}>{item}</div>
                            ))}
                          </td>
                          <td className="px-6 py-4">
                            {lowList.map((element, index) => (
                              <div key={index}>{element}</div>
                            ))}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
          }


        </div>
      </div>
    </main>
  )
}
