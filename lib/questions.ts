import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { Question } from '@/data/questions';

export async function fetchQuestions(): Promise<Question[]> {
  const querySnapshot = await getDocs(collection(db, 'questions'));
  const questions: Question[] = [];
  querySnapshot.forEach((doc) => {
    questions.push(doc.data() as Question);
  });
  return questions;
}