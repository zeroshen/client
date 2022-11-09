// Contains all the custom types we want to use for our application
export interface BookItem {
  bookId: number;
  title: string;
  author: string;
  price: number;
  isPublic: boolean;
}

export interface CategoryItem {
  categoryId: number;
  name: string;
}

export interface GameItem {
  gameId: number;
  gameStage: string;
  gameName: string;
  gameDifficulty: string;
  gameDescription: string;
}

export interface QuizItem {
  question: string;
  answer: number;
  options: QuizOption[];
  selected: number;
  descriptions: string;
}

export interface QuizOption {
  content: string;
  optionId: number;
  quizId: number;
}
