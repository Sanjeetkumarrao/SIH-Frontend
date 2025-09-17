import React from "react";
import { useParams } from "react-router-dom";

const StateDetail = () => {
  const { stateName } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex items-center justify-center p-10">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6 capitalize">
          {stateName.replace(/-/g, " ")}
        </h1>
        <p className="text-gray-600 text-lg">
          This is the dedicated section for{" "}
          <span className="font-semibold capitalize">
            {stateName.replace(/-/g, " ")}
          </span>
          . You can add cultural info, history, tourism, and more here.
        </p>
      </div>
    </div>
  );
};

export default StateDetail;
