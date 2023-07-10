"use client";

import React, { ReactElement } from "react";

type Props = {
  tabs: Tab[];
  name: string;
  bgColor?: string;
  containerStyles?: React.CSSProperties;
};

type Tab = {
  label: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
  bgColor?: string;
};

function getStyledLabel(label: React.ReactNode, isActive: boolean) {
  const labelValue = label?.valueOf();
  if (typeof labelValue !== "object") {
    throw new Error("label must be a ReactNode");
  }

  // @ts-ignore
  if (labelValue.type === "h3") {
    if (isActive) {
      return React.cloneElement(label as ReactElement, {
        className: "text-cyan-300 font-medium text-2xl",
      });
    }
    return label;
  }

  if (isActive) {
    return React.cloneElement(label as ReactElement, {
      className: "fill-cyan-300 stroke-cyan-300",
    });
  } else {
    return React.cloneElement(label as ReactElement, {
      className: "fill-[#918F8F] stroke-[#918F8F]",
    });
  }
}

const TabBar: React.FC<Props> = ({ tabs, name, bgColor, containerStyles }) => {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  return (
    <div
      style={{ backgroundColor: `${bgColor ?? ""}`, ...containerStyles }}
      className="space-y-4 py-16"
    >
      <h1 className="text-center text-4xl font-semibold uppercase text-white">
        {name}
      </h1>
      <nav className="flex items-center justify-center gap-8">
        {tabs.map(({ label }, index) => {
          return (
            <button
              key={index}
              className={`${
                activeTab === index
                  ? "text-cyan-300 underline decoration-cyan-300"
                  : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {getStyledLabel(label, activeTab === index)}
            </button>
          );
        })}
      </nav>
      {tabs[activeTab].children}
    </div>
  );
};

export type { Tab };
export default TabBar;
