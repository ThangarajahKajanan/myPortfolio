import React from "react";

const ProfileModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm ">
      <div  className="relative bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-red-900 size-10 text-4xl "

        >
          &times;
        </button>
        <img src={imageSrc} alt="Profile" className="max-w-full max-h-full rounded-lg" />
      </div>
    </div>
  );
};

export default ProfileModal;