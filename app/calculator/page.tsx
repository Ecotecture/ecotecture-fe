import Image from 'next/image'

export default function Calculator() {
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
