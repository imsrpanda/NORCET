import React from 'react';
import { CountdownBanner } from './CountdownBanner';
import { ProgressRing } from './ProgressRing';
import { ResumeCard } from './ResumeCard';
import { PearlOfTheDay } from './PearlOfTheDay';
import { SubjectGrid } from './SubjectGrid';

export const DashboardView: React.FC = () => {
  return (
    <div className="space-y-4 pb-20 animate-fadeIn">
      {/* 1. Exam Target Countdown Banner */}
      <CountdownBanner />

      {/* 2. Overall Syllabus Progress Ring */}
      <ProgressRing />

      {/* 3. Quick Resume Study Card */}
      <ResumeCard />

      {/* 4. Clinical Pearl of the Day */}
      <PearlOfTheDay />

      {/* 5. Subject Progress Grid */}
      <SubjectGrid />
    </div>
  );
};
