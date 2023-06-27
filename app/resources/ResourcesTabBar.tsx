"use client";

import React, { ReactElement } from "react";
type Props = {
  tabs: Tab[];
  name: string;
};

export type Tab = {
  label: React.ReactNode;
  icon: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
};

const ResourcesTabBar: React.FC<Props> = ({ tabs, name }) => {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  return (
    <div className="flex bg-[#1B1A1A] pl-10 pt-14">
      <div className="w-1/3">
        <h3 className="mb-4 px-4 font-medium uppercase text-white">{name}</h3>
        <nav className="w-full space-y-4">
          {tabs.map(({ label, icon }, index) => {
            return (
              <button
                key={index}
                className={`flex w-1/2 items-center justify-between p-12 ${
                  activeTab === index ? "bg-[#292828]" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <p className="text-xl uppercase">{label}</p>
                {React.cloneElement(icon as ReactElement, {
                  className: "stroke-white fill-transparent stroke-1",
                  width: "40px",
                })}
              </button>
            );
          })}
        </nav>
      </div>
      {tabs[activeTab].children}
    </div>
  );
};

export default ResourcesTabBar;
