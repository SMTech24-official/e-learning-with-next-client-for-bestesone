import BestTeacher from "@/components/dashboard/BestTeacher";
import RecentTransactions from "@/components/dashboard/RecentTransaction/RecentTransaction";
import React from "react";
import { FiBook, FiCreditCard, FiFileText } from "react-icons/fi";

const MyWalletPage = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Wallet overview</h3>

      <div className="flex flex-col sm:flex-row gap-5 items-center mb-5">
        {/* total spending start */}
        <div className="relative w-full  px-4 pt-6 pb-8 bg-white shadow-md rounded-lg flex flex-col items-center space-y-2">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <FiCreditCard className="text-purple-500 text-xl" />
          </div>
          <h2 className="text-2xl font-semibold">${500}</h2>
          <p className="text-gray-500 text-sm">Total spending balance</p>
          <div className="absolute top-2 right-2 text-gray-400">
            <span className="text-2xl font-bold">⋮</span>
          </div>
        </div>
        {/* total spending end */}
        {/* Complete Courses start */}
        <div className="relative w-full  px-4 pt-6 pb-8 bg-white shadow-md rounded-lg flex flex-col items-center space-y-2">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <FiBook className="text-green-500 text-xl" />
          </div>
          <h2 className="text-2xl font-semibold">09</h2>
          <p className="text-gray-500 text-sm">Complete Courses</p>
          <div className="absolute top-2 right-2 text-gray-400">
            <span className="text-2xl font-bold">⋮</span>
          </div>
        </div>
        {/* Complete Courses end */}
        {/* Course In Progress start */}
        <div className="relative w-full px-4 pt-6 pb-8 bg-white shadow-md rounded-lg flex flex-col items-center space-y-2">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <FiFileText className="text-purple-500 text-xl" />
          </div>
          <h2 className="text-2xl font-semibold">03</h2>
          <p className="text-gray-500 text-sm">Course In progress</p>
          <div className="absolute top-2 right-2 text-gray-400">
            <span className="text-2xl font-bold">⋮</span>
          </div>
        </div>
        {/* Course In Progress end */}
      </div>
      <div className="flex flex-col xl:flex-row gap-5 items-start mb-5 ">
      <RecentTransactions/>
      <BestTeacher />
      </div>

    
    </div>
  );
};

export default MyWalletPage;
