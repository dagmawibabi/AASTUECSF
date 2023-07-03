"use client";

import useNav from "@/hooks/useNav";
import React, { ReactElement, useState } from "react";
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
  const [activeTab, setActiveTab] = useState<number>(0);
  const isMobile = useNav();

  return (
    <div className="flex bg-[#1B1A1A] py-14 pl-4 sm:pl-10">
      <div className="w-1/3">
        <h3 className="mb-4 px-4 font-medium uppercase text-white">{name}</h3>
        <nav className="w-full space-y-4">
          {tabs.map(({ label, icon }, index) => {
            return (
              <button
                key={index}
                className={`flex w-3/4 items-center justify-between px-4 py-12 md:p-12 ${
                  activeTab === index ? "bg-[#292828]" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <p className="text-xl uppercase text-white">{label}</p>
                {!isMobile && React.cloneElement(icon as ReactElement, {
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
