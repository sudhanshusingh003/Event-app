import React, { useState } from "react";

function Selection({ onNext, setFormData, formData }) {
  const [role, setRole] = useState("attendee");
  const [selectedPhoto, setSelectedPhoto] = useState(1);

  const handleNext = () => {
    setFormData({
      ...formData,
      role: selectedPhoto===1?"attendee":"organizer",
    });
    onNext();
  };

  const handleSelect = (photo) => {
    setSelectedPhoto(photo);
  };
  return (
    <div>
      <div className=" w-full px-9  flex md:flex-row  flex-col py-10 items-center gap-10 md:justify-between justify-center">
        <img alt="logo" src="/logo.svg" width="160px" />
      </div>
      <div className="flex justify-center">
        <div className="  flex flex-col gap-[14px] mt-4 rounded-lg bg-[#FDECFF] border-2 grad2 border-[#A352AC] px-8 py-10 ">
          <div className=" font-semibold text-xl text-[#8555A8]">
            You are a
          </div>
          <div className="flex gap-4 items-center justify-center h-32 ">
      <div
        onClick={() => handleSelect(1)}
        className={`bg-cover border rounded-lg justify-end hover:bg-opacity-100 items-center flex text-white font-bold px-2 ${
          selectedPhoto === 1 ? 'border-4  border-[#A153AC]' : 'border-none'
        } ${selectedPhoto === 1 ? 'w-40 h-28' : 'w-32 h-[84px] text-sm'} transition-all ease-in-out cursor-pointer`}
        style={{ backgroundImage: `url('attendee.jpg')` }}
      >
        Attendee
      </div>

      <div
        onClick={() => handleSelect(2)}
        className={`bg-cover rounded-lg bg-opacity-30 justify-end items-center flex text-white font-bold px-2 ${
          selectedPhoto === 2 ? ' border-4  border-[#A153AC]' : 'border-none'
        } ${selectedPhoto === 2 ? 'w-40 h-28' : 'w-32 h-[84px] text-sm'} transition-all ease-in-out cursor-pointer`}
        style={{ backgroundImage: `url('organizer.jpg')` }}
      >
        Organizer
      </div>
    </div>
          <button
            onClick={handleNext}
            className="mygrad p-3 md:w-[300px] justify-center rounded-lg text-base font-semibold flex items-center text-white "
          >
            {"Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Selection;
