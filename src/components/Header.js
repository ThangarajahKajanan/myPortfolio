import React, { useState } from "react";
import ProfileModal from "./ProfileModel";
import { Link } from "react-scroll";

const Header = ({ heroRef, aboutMeRef, portfolioRef, skillsRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLinkClick = (event, link, ref) => {
    event.preventDefault(); // Prevent default anchor behavior
    setActiveLink(link);
    setIsOpen(false); // Close the mobile menu when a link is clicked
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  return (
    <nav id="Header" className="fixed top-0 left-0 w-full shadow z-50 bg-white">
      <div className="container max-w-screen-2xl px-6 py-4 md:px-10  lg:px-16 xl:px-24 mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link
               to="Hero"
               smooth={true} 
               duration={500} 
               offset={-80} //
              >
              <button>
              <h1 className="font-semibold text-primaryC text-2xl ">KT</h1>
              </button>
            </Link>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`absolute shadow-md md:shadow-none inset-x-0 z-20 w-full px-6 pt-4 pb-8 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-6 md:flex-row md:items-center md:mx-8">
              {[
                { name: "Home", ref: heroRef },
                { name: "About Me", ref: aboutMeRef },
                { name: "Portfolio", ref: portfolioRef },
                { name: "Skills", ref: skillsRef },
                { name: "Contact", ref: contactRef }
              ].map(({ name, ref }) => (
                <button
                  key={name}
                  onClick={(event) => handleLinkClick(event, name, ref)}
                  className={`flex px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md md:mt-0 ${
                    activeLink === name
                      ? "text-primaryC"
                      : "text-gray-700 hover:text-primaryC"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            <div className="flex items-center mt-4 md:mt-0">
              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
                onClick={handleOpenModal}
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="/me.png"
                    className="object-cover w-full h-full "
                    alt="avatar"
                  />
                </div>
                <h3 className="mx-2 text-gray-700 md:hidden">Yuvan</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProfileModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageSrc="/me.png"
      />
    </nav>
  );
};

export default Header;
