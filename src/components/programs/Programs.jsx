import React from "react";
import program_1 from "../../assets/program_1.jpg";
import program_2 from "../../assets/program_2.jpg";
import program_3 from "../../assets/program_3.jpg";
import heart from "../../assets/heart.svg";
import bones from "../../assets/bones.svg";
import cardio from "../../assets/brain.svg";

const Programs = () => {
  return (
    <div className="px-36 pt-20 pb-20 flex justify-between gap-6 big-tablet:flex-col big-tablet:px-4">
      <div className="w-1/3 h-80 relative group big-tablet:w-[100%]">
        <img
          src={program_1}
          alt="Program_2"
          className="w-full h-full rounded-xl shadow-3xl object-cover cursor-pointer transition-opacity duration-500 ease-in group-hover:opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-blue-700 bg-opacity-40 rounded-xl opacity-0 transition-opacity duration-500 ease-in group-hover:opacity-100 ">
          <img
            src={heart}
            alt="icon"
            className="w-16 mb-2 transition-transform duration-500 ease-in group-hover:opacity-100 group-hover:-translate-y-10"
          />
          <span className="text-white pl-2 font-semibold transition-transform duration-500 ease-in group-hover:-translate-y-10">
            Cardiologist
          </span>
        </div>
      </div>
      <div className="w-1/3 h-80 relative group big-tablet:w-[100%]">
        <img
          src={program_2}
          alt="Program_2"
          className="w-full h-full rounded-xl shadow-3xl object-cover cursor-pointer transition-opacity duration-500 ease-in group-hover:opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-blue-700 bg-opacity-40 rounded-xl opacity-0 transition-opacity duration-500 ease-in group-hover:opacity-100 ">
          <img
            src={bones}
            alt="icon"
            className="w-16 mb-2 transition-transform duration-500 ease-in group-hover:opacity-100 group-hover:-translate-y-10"
          />
          <span className="text-white pl-2 font-semibold transition-transform duration-500 ease-in group-hover:-translate-y-10">
            Orthopedic
          </span>
        </div>
      </div>
      <div className="w-1/3 h-80 relative group big-tablet:w-[100%]">
        <img
          src={program_3}
          alt="Program_2"
          className="w-full h-full rounded-xl shadow-3xl object-cover cursor-pointer transition-opacity duration-500 ease-in group-hover:opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-blue-700 bg-opacity-40 rounded-xl opacity-0 transition-opacity duration-500 ease-in group-hover:opacity-100 ">
          <img
            src={cardio}
            alt="icon"
            className="w-16 mb-2 transition-transform duration-500 ease-in group-hover:opacity-100 group-hover:-translate-y-10"
          />
          <span className="text-white pl-2 font-semibold transition-transform duration-500 ease-in group-hover:-translate-y-10">
            Neurosurgeons
          </span>
        </div>
      </div>
    </div>
  );
};

export default Programs;
