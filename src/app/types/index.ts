export interface OptionItem {
  text: string;
  image?: string;
  imageSize?: 'small' | 'medium' | 'large';
}

export interface Question {
  question: string;
  options: (string | OptionItem)[]; // Support both simple strings and enhanced options with images
  correctAnswer: number[]; // Now all questions use an array for correctAnswers
  explanation: string;
  image?: string; // Optional image URL for questions that need visual aids
  imageSize?: 'small' | 'medium' | 'large' | 'full'; // Optional image size control
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