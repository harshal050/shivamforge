import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import SEO from "../SEO";

const steps = [
  { title: "RAW-MATERIAL STOCK YARD" },
  { title: "LABORATORY" },
  { title: "MATERIAL CUTTING" },
  { title: "HEATING BY OIL FIRED FURNACES" },
  { title: "FORGE SHOP FORGING & TRIMMING" },
  { title: "HOT INSPECTION" },
  { title: "READY FOR DISPATCH AFTER PRE-DISPATCH REPORT" },
];

const dieFlow = [
  { title: "DIE SHOP" },
  { title: "DIE INSPECTION" },
  { title: "FORGE SHOP FORGING & TRIMMING" },
];

export default function ProcessPage() {
  return (
    <>
    <SEO title={"ProcessPage"} description={`RAW-MATERIAL STOCK YARD
    LABORATORY
    MATERIAL CUTTING
    HEATING BY OIL FIRED FURNACES
    FORGE SHOP FORGING & TRIMMING
    DIE SHOP
    DIE INSPECTION
    HOT INSPECTION
    READY FOR DISPATCH AFTER PRE-DISPATCH REPORT`}/>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-800 transition-all duration-700 py-12 px-4 md:px-16 lg:px-32">
      {/* <h1 className="text-4xl font-extrabold text-center text-blue-700 dark:text-blue-300 mb-16 animate-fade-in-up tracking-wide">
        🔧 Manufacturing Process Flow
      </h1> */}

      <div className="grid gap-12">
        {/* Main Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center">
          {steps.slice(0, 4).map((step, index) => (
            <div
              key={index}
              className="card-glow"
            >
              {step.title}
            </div>
          ))}
        </div>

        <div className="flex justify-center animate-bounce">
          <ArrowDown className="text-blue-500 dark:text-blue-300" size={36} />
        </div>

        <div className="flex justify-center">
          <div className="card-glow">{steps[4].title}</div>
        </div>

        {/* DIE FLOW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-items-center">
          {dieFlow.slice(0, 2).map((step, index) => (
            <div key={index} className="card-glow">
              {step.title}
            </div>
          ))}
        </div>

        <div className="flex justify-center animate-bounce">
          <ArrowRight className="text-blue-500 dark:text-blue-300" size={36} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center">
          <div className="card-glow">{steps[5].title}</div>
          <div className="card-glow">{steps[6].title}</div>
        </div>
      </div>
    </div>
    </>
  );
}


