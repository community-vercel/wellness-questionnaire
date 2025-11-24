import { Question, questions } from '@/data/questions';

export async function fetchQuestions(): Promise<Question[]> {
  // Return local questions data instead of fetching from Firestore
  // Sort questions by ID to ensure proper order
  return [...questions].sort((a, b) => a.id - b.id);
}