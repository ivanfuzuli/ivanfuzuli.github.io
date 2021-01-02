import React from "react";

const Content = ({ title, children }) => {
  return (
    <div className="max-w-3xl mr-auto ml-auto px-2 sm:px-6 lg:px-8">
      <div className="p-4 bg-white border-gray-300 rounded mt-4 mb-4">
        {title && <h4>{title}</h4>}
        {children}
      </div>
    </div>
  );
};

export default Content;
