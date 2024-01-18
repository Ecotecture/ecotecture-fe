
export default function Navbar() {
  return (
    <nav className="bg-white fixed w-full top-0 z-50 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <button type="button" className="text-white bg-[#257251] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2 text-center">Login</button>
            <br />
            <button type="button" className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2 text-center border-solid border-2 border-[#257251]">Create Account</button>
          </div>

        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-[#272A5A] no-underline hover:underline hover:underline-offset-8 hover:decoration-[#257251] hover:decoration-2" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-[#272A5A] no-underline hover:underline hover:underline-offset-8 hover:decoration-[#257251] hover:decoration-2">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-[#272A5A] no-underline hover:underline hover:underline-offset-8 hover:decoration-[#257251] hover:decoration-2">Contact</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-[#272A5A] no-underline hover:underline hover:underline-offset-8 hover:decoration-[#257251] hover:decoration-2">Help</a>
            </li>
          </ul>
        </div>
      </div>

    </nav>


  )
}