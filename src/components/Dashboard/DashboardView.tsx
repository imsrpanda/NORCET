import React from 'react';
import { CountdownBanner } from './CountdownBanner';
import { ProgressRing } from './ProgressRing';
import { ResumeCard } from './ResumeCard';
import { PearlOfTheDay } from './PearlOfTheDay';
import { SubjectGrid } from './SubjectGrid';

export const DashboardView: React.FC = () => {
  return (
    <div className="space-y-5 pb-24 md:pb-12 animate-fadeIn">
      {/* 1. Exam Target Countdown Banner */}
      <CountdownBanner />

      {/* 2. Responsive Status & Quick Study Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4.5 items-stretch">
        <div className="lg:col-span-5 flex flex-col">
          <ProgressRing />
        </div>
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <ResumeCard />
          <PearlOfTheDay />
        </div>
      </div>

      {/* 3. Subject Progress Grid */}
      <SubjectGrid />
    </div>
  );
};
