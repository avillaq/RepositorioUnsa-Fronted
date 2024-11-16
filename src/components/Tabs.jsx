import { useState } from 'react';

export const Tabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <>
      <div className="mb-4">
        <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${selectedTab === tab.id ? 'text-blue-700 border-blue-700' : 'text-gray-500 border-transparent hover:text-blue-600 hover:border-blue-300'}`}
                id={`${tab.id}-tab`}
                data-tabs-target={`#${tab.id}`}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={selectedTab === tab.id}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="default-tab-content">
        {tabs.map((tab) => (
          <div key={tab.id} id={tab.id} role="tabpanel" aria-labelledby={`${tab.id}-tab`} className={selectedTab === tab.id ? '' : 'hidden'}>
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
};