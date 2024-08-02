import React from "react";

const TimeLine = () => {
  return (
    <div>
      <div className="flex gap-x-3 my-2">
        <div className="w-16 text-end">
          <span className="text-xs text-gray-500">2010</span>
        </div>
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-2 rounded-full bg-gray-400"></div>
          </div>
        </div>
        <div className="grow pt-0.5 pb-8">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
            Ordinary Level
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Kokuvil Hindu College 
          </p>
        </div>
      </div>


      <div className="flex gap-x-3">
        <div className="w-16 text-end">
          <span className="text-xs text-gray-500">2018</span>
        </div>
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-2 rounded-full bg-gray-400"></div>
          </div>
        </div>
        <div className="grow pt-0.5 pb-8">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
            Advanced level
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            St.Johns College
          </p>
        </div>
      </div>



      <div className="flex gap-x-3">
        <div className="w-16 text-end">
          <span className="text-xs text-gray-500">2021</span>
        </div>
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-2 rounded-full bg-gray-400"></div>
          </div>
        </div>
        <div className="grow pt-0.5 pb-8">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
            Campus <span className="text-gray-500 font-normal">(final year)</span>
          </h3>
          <p className="mt-1 text-sm text-gray-600 flex gap-x-1.5">
          <svg  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" viewBox="0 0 24 24" 
                  strokeWidth="1" 
                  stroke="currentColor" 
                  className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            SLIIT
          </p>
        </div>
      </div>





      <div className="flex gap-x-3">
        <div className="w-16 text-end">
          <span className="text-xs text-gray-500">2024</span>
        </div>
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-2 rounded-full bg-gray-400"></div>
          </div>
        </div>
        <div className="grow pt-0.5 pb-8">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
            Internship
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            Let the fun begin! 😉 😉
          </p>
          <p className="mt-1 text-sm text-gray-600 flex gap-x-1.5">
            DGateway In
          </p>
        </div>
      </div>

    </div>
  );
};

export default TimeLine;
