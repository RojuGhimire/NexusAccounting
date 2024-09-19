import React from "react";
import { FaMoneyBillWave, FaChartLine, FaUserTie, FaBalanceScale } from "react-icons/fa"; // Import accounting-related icons

const AccountingStats: React.FC = () => {
  return (
    <div className="w-full lg:h-[208px] flex items-center justify-center bg-[#f9f3ef] py-20 font-overpass lg:mt-28 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Stat 1: Total Revenue */}
        <div className="flex flex-col items-center">
          <FaMoneyBillWave className="text-secondary text-5xl mb-4" /> {/* Icon */}
          <h3 className="text-4xl font-rose font-extrabold leading-[45.09px]">
            $120K<sup className="font-bold">+</sup>
          </h3>
          <p className="text-primary text-lg font-bold">Total Revenue</p>
        </div>

        {/* Stat 2: Total Expenses */}
        <div className="flex flex-col items-center">
          <FaChartLine className="text-secondary text-5xl mb-4" /> {/* Icon */}
          <h3 className="text-4xl font-rose font-extrabold leading-[45.09px]">
            $45K<sup>+</sup>
          </h3>
          <p className="text-primary text-lg font-bold">Total Expenses</p>
        </div>

        {/* Stat 3: Total Clients */}
        <div className="flex flex-col items-center">
          <FaUserTie className="text-secondary text-5xl mb-4" /> {/* Icon */}
          <h3 className="text-4xl font-rose font-extrabold leading-[45.09px]">
            150<sup>+</sup>
          </h3>
          <p className="text-primary text-lg font-bold">Total Clients</p>
        </div>

        {/* Stat 4: Profit Margin */}
        <div className="flex flex-col items-center">
          <FaBalanceScale className="text-secondary text-5xl mb-4" /> {/* Icon */}
          <h3 className="text-4xl font-rose font-extrabold leading-[45.09px]">
            25<sup>%</sup>
          </h3>
          <p className="text-primary text-lg font-bold">Profit Margin</p>
        </div>
      </div>
    </div>
  );
};

export default AccountingStats;
