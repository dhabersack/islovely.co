import React, { useState } from 'react'

const LINKS = {
  'Home': '/',
  'Courses': '/courses/',
  'Blog': '/posts/',
  'Fire tips': '/firetips/',
  'Newsletter': '/newsletter/',
  'About': '/about',
  'Contact': '/contact/',
}

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav
        aria-label="Global"
      >
        <button
          aria-haspopup="true"
          className={`
            bg-white
            border-0
            flex
            items-center
            justify-center
            my-2
            p-2
            rounded-lg
            shadow-sm
            text-gray-500
            hover:bg-gray-100
            hover:text-gray-700
            focus:outline-none
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            md:hidden
          `}
          onClick={openMenu}
          type="button"
        >
          <span
            className="sr-only"
          >
            Open main menu
          </span>

          <svg
            aria-hidden="true"
            className={`
              h-6
              w-6
            `}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>

        <div
          className={`
            hidden
            py-4
            md:block
            md:space-x-4
          `}
        >
          {Object.entries(LINKS).map(([name, href]) => (
            <a
              className={`
                font-medium
                text-gray-700
                hover:text-gray-900
                hover:no-underline
                visited:text-gray-700
              `}
              href={href}
              key={href}
            >
              {name}
            </a>
          ))}
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className={`
            absolute
            p-2
            top-0
            transform
            transition
            origin-top-right
            w-60
            -right-4
            md:hidden
          `}
        >
          <div
            className={`
              bg-white
              overflow-hidden
              rounded-lg
              shadow-md
              ring-
              ring-black
              ring-opacity-5
            `}
          >
            <div
              className={`
                flex
                items-center
                justify-end
                pt-3
                px-4
              `}
            >
              <button
                onClick={closeMenu}
                type="button"
                className={`
                  bg-gray-100
                  inline-flex
                  items-center
                  justify-center
                  p-2
                  rounded-lg
                  text-gray-500
                  hover:text-gray-600
                  hover:bg-gray-100
                  focus:outline-none
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                  -mr-2
                `}
              >
                <span
                  className="sr-only"
                >
                  Close main menu
                </span>

                <svg
                  aria-hidden="true"
                  className={`
                    h-6
                    w-6
                  `}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>

            <div
              aria-labelledby="main-menu"
              aria-orientation="vertical"
              className={`
                px-2
                pt-2
                pb-3
                space-y-1
              `}
              role="menu"
            >
              {Object.entries(LINKS).map(([name, href]) => (
                <a
                  className={`
                    block
                    font-medium
                    px-2
                    py-2
                    rounded-md
                    text-gray-700
                    focus:bg-gray-50
                    hover:text-gray-900
                    hover:bg-gray-50
                    hover:no-underline
                    visited:text-gray-700
                  `}
                  href={href}
                  key={href}
                  role="menuitem"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
