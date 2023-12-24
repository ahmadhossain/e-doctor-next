import React from "react";

const SpecialityPage = () => {
  return (
    <div className="h-screen px-10 pt-8">
      <h2>Please select a speciality</h2>
      <div className="border rounded-lg w-fit px-10 py-3">
        <div className="font-semibold text-2xl pb-3">General Physician</div>
        <div className="text-slate-500">
          Cold,flu,fever,vomiting,infections,headaches etc.
        </div>
      </div>
    </div>
  );
};

export default SpecialityPage;
