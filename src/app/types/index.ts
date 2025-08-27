export interface Question {
  question: string;
  options: string[];
  correctAnswer: number[]; // Now all questions use an array for correctAnswers
  explanation: string;
}

export interface WeekQuestions {
  [key: string]: Question[];
}

export type PracticeMode = 'module1' | 'module2' | 'module3' | 'module4' | 'module5' | 'module6' | 'all';

export interface PracticeOption {
  id: PracticeMode;
  label: string;
  icon: React.ReactNode | string;
}

export interface SessionStats {
  questionsAnswered: number;
  correctAnswers: number;
  timeRemaining: number;
  totalQuestions: number;
  mode: PracticeMode;
}