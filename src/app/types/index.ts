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

export interface PassageQuestion {
  title: string;
  passage: string;
  questions: Question[];
}

export interface WeekQuestions {
  [key: string]: Question[];
}

export interface UnitQuestions {
  module1: Question[];
  module2: Question[];
  module3: Question[];
  module4: Question[];
  module5: Question[];
  module6: Question[];
  module7: Question[];
  assignment: Question[];
  passage_based_questions: PassageQuestions;
}

export interface AllQuestionsData {
  unit1: UnitQuestions;
  unit2: UnitQuestions;
  unit3: UnitQuestions;
}

export type PracticeMode = 'module1' | 'module2' | 'module3' | 'module4' | 'module5' | 'module6' |'module7'| 'all' | 'assignment' | 'passage' | 'demo-exam';

export interface PassageQuestions {
  [key: string]: PassageQuestion;
}

export interface DemoExamData {
  mcqQuestions: Question[];
  passageQuestions: PassageQuestion[];
}

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