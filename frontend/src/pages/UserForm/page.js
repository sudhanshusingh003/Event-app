import React, { useState } from "react";
import Selection from "./Components/selection";
import AttendeeDetails from "./Components/form(attendee)";
import OrganizerDetails from "./Components/form(organizer)";

function Multiform() {
  const [formData, setFormData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleComplete = () => {
    console.log('eureka')
  };
console.log(formData.role)
  return (
    <div>
     
      {currentPage === 1 &&  <Selection
        onNext={handleNext}
        formData={formData}
        setFormData={setFormData}
      />}
     {(currentPage === 2 &&formData.role === 'attendee') && (
        <AttendeeDetails
          onComplete={handleComplete}
          formData={formData}
          setFormData={setFormData}
        />
      )}
     {(currentPage === 2 &&formData.role === 'organizer') && (
        <OrganizerDetails
        onComplete={handleComplete}
        formData={formData}
        setFormData={setFormData}
      />
      )}
    
    </div>
  );
}

export default Multiform;
