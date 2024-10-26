"use client";

import React from "react";

export const XpChart = ({
  yearStarted,
  yearsOfExperience,
  children,
}: {
  yearStarted: number;
  yearsOfExperience: number;
  children: any;
}) => {
  const xpYearTotal = new Date().getFullYear() - yearStarted;
  const xpTotal = xpYearTotal - yearsOfExperience;

  return (
    <div className="flex flex-row-reverse flex-wrap gap-2 items-center">
      {Array.from({ length: xpYearTotal }).map((_, year: number) => (
        <div
          key={year}
          className={
            xpTotal <= year
              ? `bg-green-400 w-5 h-5 shadow`
              : `bg-gray-100 w-5 h-5 shadow-inner`
          }
        ></div>
      ))}
      <div className="flex-1">{children}</div>
    </div>
  );
};
