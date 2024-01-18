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
                        <div className="font-serif text-4xl tracking-wide">Title
                        </div>
                        <hr className='mb-5' />
                        <p className="text-gray-700 font-sans text-base mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
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
                        <div className="font-serif text-4xl tracking-wide">Title
                        </div>
                        <hr className='mb-5' />
                        <p className="text-gray-700 font-sans text-base mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
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
                        <div className="font-serif text-4xl tracking-wide">Title
                        </div>
                        <hr className='mb-5' />
                        <p className="text-gray-700 font-sans text-base mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
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
                        <div className="font-serif text-4xl tracking-wide">Title
                        </div>
                        <hr className='mb-5' />
                        <p className="text-gray-700 font-sans text-base mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
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