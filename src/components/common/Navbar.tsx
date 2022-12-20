import User from "@/types/user";
import userStore from "@/store/userStore";

import useDarkSide from "@/hooks/theme";

export default function Navbar() {
  const userLoadingState = userStore(
    (state: { loadingUser: boolean }) => state.loadingUser
  );
  const user = userStore((state: { user: User | null }) => state.user);

  const [colorTheme, setTheme] = useDarkSide();
  // const [isDarkMode, setisDarkMode] = useState<Boolean>();

  // switchTheme();
  const toggleTheme = () => {
    if (typeof setTheme !== 'string') {
          setTheme(colorTheme);
    }


  };

  return (
    <>
      <div className="md:fixed md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white dark:bg-black p-6 ">
        <div className="flex-none w-56 flex flex-row items-center">
         
          <img  src="./symbols@2x.png" />
       

          <button
            id="sliderBtn"
            className="flex-none text-right text-gray-900 hidden md:block"
          >
            <i className="fad fa-list-ul"></i>
          </button>
        </div>

        <button
          id="navbarToggle"
          className="hidden md:block md:fixed right-0 mr-6"
        >
          <i className="fad fa-chevron-double-down"></i>
        </button>

        <div
          id="navbar"
          className="animated md:hidden md:fixed md:top-0 md:w-full md:left-0 md:mt-16 md:border-t md:border-b md:border-gray-200 md:p-10 md:bg-white flex-1 pl-3 flex flex-row flex-wrap justify-between items-center md:flex-col md:items-center"
        >
          <div className="text-gray-600 md:w-full md:flex md:flex-row md:justify-evenly md:pb-10 md:mb-10 md:border-b md:border-gray-200">
            <a
              className="mr-2 transition duration-500 ease-in-out hover:text-gray-900"
              href="#"
              title="email"
            >
              <i className="fad fa-envelope-open-text"></i>
            </a>
            <a
              className="mr-2 transition duration-500 ease-in-out hover:text-gray-900"
              href="#"
              title="email"
            >
              <i className="fad fa-comments-alt"></i>
            </a>
            <a
              className="mr-2 transition duration-500 ease-in-out hover:text-gray-900"
              href="#"
              title="email"
            >
              <i className="fad fa-check-circle"></i>
            </a>
            <a
              className="mr-2 transition duration-500 ease-in-out hover:text-gray-900"
              href="#"
              title="email"
            >
              <i className="fad fa-calendar-exclamation"></i>
            </a>
          </div>

          <div className="flex flex-row-reverse items-center">
            <div className="dropdown relative md:static">
              <button className="menu-btn focus:outline-none focus:shadow-outline flex flex-wrap items-center">
                <div className="w-8 h-8 overflow-hidden rounded-full">
                  {/* <img
                      className="w-full h-full object-cover"
                      src="img/user.svg"
                    /> */}
                </div>

                <div className="ml-2 capitalize flex ">
                  <h1 className="text-sm text-gray-800 dark:text-gray-200 font-semibold m-0 p-0 leading-none">
                    {user?.name}
                  </h1>
                  <i className="fad fa-chevron-down ml-2 text-xs leading-none"></i>
                </div>
              </button>

              <button className="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button>

              <div className="text-gray-500 menu hidden md:mt-10 md:w-full rounded bg-white shadow-md absolute z-20 right-0 w-40 mt-5 py-2 animated faster">
                <a
                  className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out"
                  href="#"
                >
                  <i className="fad fa-user-edit text-xs mr-1"></i>
                  edit my profile
                </a>

                <a
                  className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out"
                  href="#"
                >
                  <i className="fad fa-inbox-in text-xs mr-1"></i>
                  my inbox
                </a>

                <a
                  className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out"
                  href="#"
                >
                  <i className="fad fa-badge-check text-xs mr-1"></i>
                  tasks
                </a>

                <a
                  className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out"
                  href="#"
                >
                  <i className="fad fa-comment-alt-dots text-xs mr-1"></i>
                  chats
                </a>

                <hr />

                <a
                  className="px-4 py-2 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 hover:text-gray-900 transition-all duration-300 ease-in-out"
                  href="#"
                >
                  <i className="fad fa-user-times text-xs mr-1"></i>
                  log out
                </a>
              </div>
            </div>

            <div className="dropdown relative mr-5 md:static">
              {/* <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                  <i className="fad fa-bells"></i>
                </button> */}
              <button
                className="w-20 h-10 rounded-full bg-white dark:bg-gray-500 flex items-center transition duration-300 focus:outline-none shadow"
                onClick={() => toggleTheme()}
              >
                <div
                  className={`relative w-1/2  rounded-full transition duration-500 transform p-1 text-white ${
                    colorTheme === "light"
                      ? "bg-gray-700 translate-x-full"
                      : "bg-yellow-500 -translate-x-2"
                  }`}
                >
                  {colorTheme === "light" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        // stroke-width="2"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  )}
                </div>
              </button>
              {/* <button className="hidden fixed top-0 left-0 z-10 w-full h-full menu-overflow"></button> */}

              {/* <div className="menu hidden rounded bg-white md:right-0 md:w-full shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster">
                  <div className="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
                    <h1>notifications</h1>
                    <div className="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                      <strong>5</strong>
                    </div>
                  </div>
                  <hr />

                  <a
                    className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out"
                    href="#"
                  >
                    <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                      <i className="fad fa-birthday-cake text-sm"></i>
                    </div>

                    <div className="flex-1 flex flex-rowbg-green-100">
                      <div className="flex-1">
                        <h1 className="text-sm font-semibold">poll..</h1>
                        <p className="text-xs text-gray-500">text here also</p>
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <p>4 min ago</p>
                      </div>
                    </div>
                  </a>
                  <hr />

                  <a
                    className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out"
                    href="#"
                  >
                    <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                      <i className="fad fa-user-circle text-sm"></i>
                    </div>

                    <div className="flex-1 flex flex-rowbg-green-100">
                      <div className="flex-1">
                        <h1 className="text-sm font-semibold">mohamed..</h1>
                        <p className="text-xs text-gray-500">text here also</p>
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <p>78 min ago</p>
                      </div>
                    </div>
                  </a>
                  <hr />

                  <a
                    className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out"
                    href="#"
                  >
                    <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                      <i className="fad fa-images text-sm"></i>
                    </div>

                    <div className="flex-1 flex flex-rowbg-green-100">
                      <div className="flex-1">
                        <h1 className="text-sm font-semibold">new imag..</h1>
                        <p className="text-xs text-gray-500">text here also</p>
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <p>65 min ago</p>
                      </div>
                    </div>
                  </a>
                  <hr />

                  <a
                    className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out"
                    href="#"
                  >
                    <div className="px-3 py-2 rounded mr-3 bg-gray-100 border border-gray-300">
                      <i className="fad fa-alarm-exclamation text-sm"></i>
                    </div>

                    <div className="flex-1 flex flex-rowbg-green-100">
                      <div className="flex-1">
                        <h1 className="text-sm font-semibold">time is up..</h1>
                        <p className="text-xs text-gray-500">text here also</p>
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <p>1 min ago</p>
                      </div>
                    </div>
                  </a>

                  <hr />
                  <div className="px-4 py-2 mt-2">
                    <a
                      href="#"
                      className="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500"
                    >
                      view all
                    </a>
                  </div>
                </div> */}
            </div>

            <div className="dropdown relative mr-5 md:static">
              {/* <button className="text-gray-500 menu-btn p-0 m-0 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-all ease-in-out duration-300">
                  <i className="fad fa-comments"></i>
                </button> */}

              {/* <div className="menu hidden md:w-full md:right-0 rounded bg-white shadow-md absolute z-20 right-0 w-84 mt-5 py-2 animated faster">
                  <div className="px-4 py-2 flex flex-row justify-between items-center capitalize font-semibold text-sm">
                    <h1>messages</h1>
                    <div className="bg-teal-100 border border-teal-200 text-teal-500 text-xs rounded px-1">
                      <strong>3</strong>
                    </div>
                  </div>
                  <hr />

                  <a
                    className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out"
                    href="#"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                      <img
                        className="w-full h-full object-cover"
                        src="img/user1.jpg"
                        alt=""
                      />
                    </div>

                    <div className="flex-1 flex flex-rowbg-green-100">
                      <div className="flex-1">
                        <h1 className="text-sm font-semibold">mohamed said</h1>
                        <p className="text-xs text-gray-500">yeah i know</p>
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <p>4 min ago</p>
                      </div>
                    </div>
                  </a>
                  <hr />

                  <a
                    className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out"
                    href="#"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                      <img
                        className="w-full h-full object-cover"
                        src="img/user2.jpg"
                        alt=""
                      />
                    </div>

                    <div className="flex-1 flex flex-rowbg-green-100">
                      <div className="flex-1">
                        <h1 className="text-sm font-semibold">sull goldmen</h1>
                        <p className="text-xs text-gray-500">for sure</p>
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <p>1 day ago</p>
                      </div>
                    </div>
                  </a>
                  <hr />

                  <a
                    className="flex flex-row items-center justify-start px-4 py-4 block capitalize font-medium text-sm tracking-wide bg-white hover:bg-gray-200 transition-all duration-300 ease-in-out"
                    href="#"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 border border-gray-300">
                      <img
                        className="w-full h-full object-cover"
                        src="img/user3.jpg"
                        alt=""
                      />
                    </div>

                    <div className="flex-1 flex flex-rowbg-green-100">
                      <div className="flex-1">
                        <h1 className="text-sm font-semibold">mick</h1>
                        <p className="text-xs text-gray-500">is typing ....</p>
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <p>31 feb</p>
                      </div>
                    </div>
                  </a>

                  <hr />
                  <div className="px-4 py-2 mt-2">
                    <a
                      href="#"
                      className="border border-gray-300 block text-center text-xs uppercase rounded p-1 hover:text-teal-500 transition-all ease-in-out duration-500"
                    >
                      view all
                    </a>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
