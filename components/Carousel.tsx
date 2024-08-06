import Glider from 'react-glider';
import 'glider-js/glider.min.css';

// Data
// import data from '../app/carousel.json';

export default function Carousel() {
    return (
            <Glider
                draggable
                hasArrows
                slidesToShow={2}
                slidesToScroll={1}
            >
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-serif text-4xl tracking-wide">Solar Energy Peaks with Sunny Weather
                        </div>
                        <hr className='mb-5' />
                        <p className="text-gray-700 font-sans text-base mb-10">
                        Solar panels generate the most electricity on clear, sunny days when the sun’s rays are strongest. This direct sunlight allows solar cells to convert more sunlight into energy, making sunny climates particularly advantageous for solar power production.                        </p>
                        <div>
                            <form action="" className='flex items-center'>
                                <button type="submit" className="flex items-center py-1 px-2 text-xs font-small text-white bg-[#257251] rounded-full border focus:ring-4 focus:outline-none focus:ring-blue-300">&#8594;
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-serif text-4xl tracking-wide">Wind Power Thrives in Breezy Conditions
                        </div>
                        <hr className='mb-5' />
                        <p className="text-gray-700 font-sans text-base mb-10">
                        Wind turbines are most effective in areas with consistent, strong winds. Coastal regions and open plains often experience higher wind speeds, which can lead to increased energy production. This makes wind farms ideal for locations where wind conditions are favorable.                        </p>
                        <div>
                            <form action="" className='flex items-center'>
                                <button type="submit" className="flex items-center py-1 px-2 text-xs font-small text-white bg-[#257251] rounded-full border focus:ring-4 focus:outline-none focus:ring-blue-300">&#8594;
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-serif text-4xl tracking-wide">The Power of Weather Forecasts: Predicting Energy Production
                        </div>
                        <hr className='mb-5' />
                        <p className="text-gray-700 font-sans text-base mb-10">
                        Meteorologists are not just for weather forecasts; they are crucial for renewable energy! Accurate weather predictions help solar and wind farms anticipate energy production and manage resources more efficiently. Some systems can even adjust energy output in real time based on weather changes.                        </p>
                        <div>
                            <form action="" className='flex items-center'>
                                <button type="submit" className="flex items-center py-1 px-2 text-xs font-small text-white bg-[#257251] rounded-full border focus:ring-4 focus:outline-none focus:ring-blue-300">&#8594;
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-serif text-4xl tracking-wide">Geothermal Energy is Climate-Resilient
                        </div>
                        <hr className='mb-5' />
                        <p className="text-gray-700 font-sans text-base mb-10">
                        Geothermal energy harnesses the Earths internal heat, which remains consistent regardless of weather conditions. This makes geothermal power a reliable energy source, even in regions with extreme weather variations or fluctuating seasonal temperatures.                        </p>
                        <div>
                            <form action="" className='flex items-center'>
                                <button type="submit" className="flex items-center py-1 px-2 text-xs font-small text-white bg-[#257251] rounded-full border focus:ring-4 focus:outline-none focus:ring-blue-300">&#8594;
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Glider>


    )
}