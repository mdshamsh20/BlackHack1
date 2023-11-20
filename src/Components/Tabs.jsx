import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('profile'); // Default active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabs = [
    { name: 'XSS',label: 'XSS' },
    { name: 'DDos',  label: 'DDos' },
    { name: 'XSS2', label: 'XSS2' },
    { name: 'BF', label: 'BF' },
  ];

  return (
    <div>
      <div className="flex  justify-center items-center  mt-20 overflow-x-auto whitespace-nowrap">
      <div className="w-auto py-2 rounded-3xl  px-6 bg-[#1F1F1F]        ">
        {renderTabs.map((tab) => (
          
          <button
            key={tab.name}
            className={`inline-flex rounded-3xl items-center h-12 px-2 py-2 text-center text-white  ${
              activeTab === tab.name
                ? ' bg-blue dark:bg-blue-700 font-bold text-black '
                : ' text-white'
            } sm:px-6 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300`}
            onClick={() => handleTabClick(tab.name)}
          >
           

            <span className="mx-1 text-sm sm:text-base">{tab.label}</span>
          </button>

        ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
