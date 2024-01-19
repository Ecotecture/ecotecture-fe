"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import provinceData from "@/public/weather_by_province.json"

interface PriceItem {
    id: number;
    daya: number;
    b_modul: number;
    b_inverter: number;
    b_struktur: number;
    b_aksesoris: number;
    b_instalsai: number;
    total: number;
  }

  interface ResponseData {
    solarArray: string; // or the correct type
    numPanels: string; // or the correct type
    areaOccupied: string; // or the correct type
    price: PriceItem; // <- Ensure this is correctly typed as an array of PriceItem
  }
  const formatCurrencyIDR = (amount: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

export default function Calculator() {
    const [solarHours, setSolarHours] = useState(3.0);
    const [selectedSolarHours, setSelectedSolarHours] = useState(true);
    const handleRadioChange = () => setSelectedSolarHours(!selectedSolarHours);
    const [selectedProvince, setSelectedProvince] = useState("");
    const handleSelectChange = (value: string) => {
        const selectedOption = provinceData.find((option) => option.name === value);
        if (selectedOption) {
          setSelectedProvince(value);
          setSolarHours(selectedOption.solar_hours_per_day);
        }
      };
    
      const initialData: ResponseData = {
        solarArray: "",
        numPanels: "",
        areaOccupied: "",
        price: {} as PriceItem
      };
    const [data, setData] = useState<ResponseData>(initialData);
    const [power, setPower] = useState(1300)
    const [electricity, setElectricity] = useState(0)
    const fetchData = async () => {
        console.log("a")
        try {
            if (solarHours && electricity && power) {
                if (solarHours >= 0 && electricity >= 0 && power >= 0 ) {
                    console.log("b")

                const response = await fetch('https://us-central1-ecotecture-9ff06.cloudfunctions.net/api/calculate/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "solar_hours": solarHours,
                    "electricity": electricity,
                    "power": power
                }),
                });
        
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
        
                const result = await response.json();
                console.log(result)
                setData({
                    solarArray: result.solarArray,
                    numPanels: result.numPanels,
                    areaOccupied: result.areaOcuppied,
                    price: result.price[0]
                  });
                }
                }
                
          } catch (error) {
        console.log(error)
      }
    };

    
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
                {/* Solar Panel Calculator Row */}
                <div className="z-10 mb-44 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <div className="m-auto bg-white w-10/12 rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-sans font-semibold text-2xl mb-10">Try out our Solar Panel Calcu
                                <span className='underline decoration-8 underline-offset-1 decoration-[#448BCA]'>lator</span>
                            </div>
                            <p className="text-gray-700 font-sans text-base mb-10">
                                Simulation for solar panel with the size of 1 x 1,7 m. 
                            </p>


                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 font-sans">
                                    <tbody>
                                        <tr className="bg-white">
                                            <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                                Approximate electricity consumption per year
                                            </td>
                                            <td className="px-6 py-4">
                                                <input type="number" id="electricity" onChange={(e) => setElectricity(parseInt(e.target.value)) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="..." required />
                                            </td>
                                            <td className="px-6 py-4">
                                                kWh/yr
                                            </td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                                I know my solar hours per day
                                            </td>
                                            <td className="px-6 py-4">
                                                <label className="inline-flex items-center">
                                                    <input type="radio" id="solar_hours_1" name="solar_hours" value="1" className="form-radio text-green-500" checked={selectedSolarHours == true}
            onChange={handleRadioChange} />
                                                    <span className="ml-2">Yes</span>
                                                </label>
                                                <label className="inline-flex items-center ml-4">
                                                    <input type="radio" id="solar_hours_2" name="solar_hours" value="2" className="form-radio text-green-500" checked={selectedSolarHours == false}
            onChange={handleRadioChange} />
                                                    <span className="ml-2">No</span>
                                                </label>
                                            </td>
                                        </tr>
                                    {selectedSolarHours?  (
                                        <tr className="bg-white">
                                            <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                                Solar Hours
                                            </td>
                                            <td className="px-6 py-4">
                                                
                                                <input type="number" id="solar_hours" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="..." required />
                                                  
                                            </td>
                                            <td className="px-6 py-4">
                                                Hours
                                            </td>
                                        </tr>


                                    ):(
                                        <tr className="bg-white">
                                            <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                                Solar Hours by Province
                                            </td>
                                            <td className="px-6 py-4">
                                            <select
                                                id="province"
                                                value={selectedProvince || ''}
                                                onChange={(e) => { setSelectedProvince(e.target.value); handleSelectChange(e.target.value) }}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                                required
                                                >
                                                <option value="" disabled>Select Province</option>
                                                {provinceData.map((option) => (
                                                    <option key={option.id} value={option.name}>
                                                    {option.name}
                                                    </option>
                                                ))}
                                                </select>

                                            </td>
                                            <tr className="bg-white">
                                                <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                                    Solar Hours
                                                </td>
                                                <td className="px-6 py-4">
                                                    <input disabled type="number" id="solar_hours" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder={solarHours.toString()} required />
                                                    
                                                </td>
                                                <td className="px-6 py-4">
                                                    Hours
                                                </td>
                                            </tr>
                                        </tr>
                                        
                                    )}
                                        <tr className="bg-white">
                                            <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                                House Power
                                            </td>
                                            <td className="px-6 py-4">
                                            <select
                                            id="province"
                                            onChange={(e) => { setPower(parseInt(e.target.value)) }}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                            required
                                            >
                                            <option value="" disabled>Select Power</option>
                                            {["1300", "2200", "3500"].map((option) => (
                                                <option key={option} value={option}>
                                                {option}
                                                </option>
                                            ))}
                                            </select>

                                            </td>
                                            <td scope="row" className="px-6 py-4">
                                                VA
                                            </td>
                                        </tr>
                                    </tbody>
                                    
                                    
                                </table>
                                <div className='flex items-center  justify-center text-center px-20 py-2'>
                                    <button className='w-24 bg-blue-500 font-semibold text-white rounded p-2 items-end' onClick={fetchData}>
                                    Submit
                                    </button>
                                </div>
                                <hr></hr>
                                <table className="w-full text-sm text-left rtl:text-right text-blue-500 font-sans">
                                    <tbody>
                                        <tr className="bg-white">
                                                <td scope="row" className="px-6 py-4 font-semibold whitespace-nowrap">
                                                    Approximate solar array size
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className='underline decoration-8 underline-offset-1 text-gray-900 decoration-[#448BCA]'>{data.solarArray}</span>                                                </td>
                                                <td className="px-6 py-4">
                                                    kW
                                                </td>
                                        </tr>
                                        <tr className="bg-white">
                                                <td scope="row" className="px-6 py-4 font-semibold whitespace-nowrap">
                                                    Approximate number of panels with size 1 x 1.7m: 
                                                </td>
                                                <td className="px-6 py-4">
                                                <span className='underline decoration-8 underline-offset-1 text-gray-900 decoration-[#448BCA]'>{data.numPanels}</span>                                               

                                                </td>
                                                <td className="px-6 py-4">
                                                    panels
                                                </td>
                                        </tr>
                                        <tr className="bg-white">
                                                <td scope="row" className="px-6 py-4 font-semibold whitespace-nowrap">
                                                    Approximate area ocuppied: 
                                                </td>
                                                <td className="px-6 py-4">
                                                <span className='underline decoration-8 underline-offset-1 text-gray-900 decoration-[#448BCA]'>{data.areaOccupied}</span>                                               
                                                </td>
                                                <td className="px-6 py-4">
                                                    meter
                                                </td>
                                        </tr>
                                        <tr className="bg-white">
                                                <td scope="row" className="px-6 py-4 font-semibold whitespace-nowrap">
                                                    Approximate price for the installation of {data.numPanels} solar panels:
                                                </td>
                                        </tr>
                                        <tr>
                                        {!isNaN(data.price.b_modul) && (
                                            <td className="w-min rounded px-6 py-4 space-y-2 border-2 border-blue-300 hover:border-white">
                                                    <div className='grid grid-cols-2'>
                                                        <p>Solar Panel Cost: </p>
                                                        <p className='bg-blue-400 p-1 rounded w-min min-w-0 text-white'>{formatCurrencyIDR(data.price.b_modul)} </p>
                                                    </div>
                                                    <div className='grid grid-cols-2'>
                                                        <p>Inverter Cost: </p>
                                                        <p className='bg-blue-400 p-1 rounded w-min min-w-0 text-white'>{formatCurrencyIDR(data.price.b_inverter)} </p>
                                                    </div>
                                                    <div className='grid grid-cols-2'>
                                                        <p>Structure Cost: </p>
                                                        <p className='bg-blue-400 p-1 rounded w-min min-w-0 text-white'>{formatCurrencyIDR(data.price.b_struktur)} </p>
                                                    </div>
                                                    <div className='grid grid-cols-2'>
                                                        <p>Accessories Cost:: </p>
                                                        <p className='bg-blue-400 p-1 rounded w-min min-w-0 text-white'>{formatCurrencyIDR(data.price.b_aksesoris)} </p>
                                                    </div>
                                                    <div className='grid grid-cols-2'>
                                                        <p>Installation Cost: </p>
                                                        <p className='bg-blue-400 p-1 rounded w-min min-w-0 text-white'>{formatCurrencyIDR(data.price.b_instalsai)} </p>
                                                    </div>
                                                    <hr></hr>
                                                    <div className='grid grid-cols-2'>
                                                        <p>Total: </p>
                                                        <p className='bg-blue-400 p-1 rounded w-min min-w-0 text-white'>{formatCurrencyIDR(data.price.total)} </p>
                                                    </div>
                                                </td>
                                        )}
                                        
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
