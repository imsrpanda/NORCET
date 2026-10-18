import { SubjectTopic, UserProgressState } from '../types';

export const calculateSubjectProgress = (subject: SubjectTopic, progress: UserProgressState) => {
  let totalBullets = 0;
  let completedBullets = 0;

  subject.subtopics.forEach((sub) => {
    sub.phases.forEach((phase) => {
      phase.bulletPoints.forEach((b) => {
        totalBullets++;
        if (progress.completedBulletIds[b.id]) {
          completedBullets++;
        }
      });
    });
  });

  const percentage = totalBullets > 0 ? Math.round((completedBullets / totalBullets) * 100) : 0;
  return { totalBullets, completedBullets, percentage };
};

export const calculateOverallProgress = (syllabus: SubjectTopic[], progress: UserProgressState) => {
  let totalBullets = 0;
  let completedBullets = 0;

  syllabus.forEach((subject) => {
    subject.subtopics.forEach((sub) => {
      sub.phases.forEach((phase) => {
        phase.bulletPoints.forEach((b) => {
          totalBullets++;
          if (progress.completedBulletIds[b.id]) {
            completedBullets++;
          }
        });
      });
    });
  });

  const percentage = totalBullets > 0 ? Math.round((completedBullets / totalBullets) * 100) : 0;
  return { totalBullets, completedBullets, percentage };
};

export const getTargetExamInfo = () => {
  // Target: AIIMS NORCET 8.0 (Set to ~84 days from current date)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 84);
  
  const now = new Date();
  const diffTime = Math.max(0, targetDate.getTime() - now.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return {
    examName: 'AIIMS NORCET 8.0',
    daysLeft: diffDays,
    examDateString: targetDate.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }),
  };
};
