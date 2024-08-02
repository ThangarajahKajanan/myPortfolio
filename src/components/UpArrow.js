import React, { useEffect } from 'react';

const UpArrow = () => {
  useEffect(() => {
    // Get the button
    const myButton = document.getElementById('btn-back-to-top');

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = 'block';
      } else {
        myButton.style.display = 'none';
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    myButton.addEventListener('click', backToTop);

    function backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    return () => {
      window.onscroll = null;
      myButton.removeEventListener('click', backToTop);
    };
  }, []);

  return (
    <div>
      <button
        type="button"
        className="!fixed z-40 bottom-5 end-5 hidden rounded-full  hover:bg-primaryC p-2 md:p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out bg-fuchsia-500 hover:shadow-lg focus:bg-fuchsia-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-fuchsia-400 active:shadow-lg"
        id="btn-back-to-top">
        <span className="[&>svg]:w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default UpArrow;