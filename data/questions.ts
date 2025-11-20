export type QuestionType = 'image-select' | 'text-input' | 'single-select' | 'multi-select' | 'slider' | 'info';

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  description?: string;
  svgUrl?: string;
  options?: Array<{
    label: string;
    value: string;
    icon?: string;
    iconFemale?: string;
    iconMale?: string;
    bgColor?: string;
  }>;
  min?: number;
  max?: number;
  unit?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    type: 'image-select',
    question: 'Adjust your weight loss plan to your age',
    options: [
      { 
        label: '18-26', 
        value: '18-26', 
        icon: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=400&fit=crop',
        iconFemale: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop&crop=faces',
        iconMale: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=400&fit=crop&crop=faces',
        bgColor: '#E8DDD0'
      },
      { 
        label: '27-38', 
        value: '27-38', 
        icon: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
        iconFemale: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=faces',
        iconMale: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=faces',
        bgColor: '#E0B4B4'
      },
      { 
        label: '39-50', 
        value: '39-50', 
        icon: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop',
        iconFemale: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop&crop=faces',
        iconMale: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=faces',
        bgColor: '#E8DDD0'
      },
      { 
        label: '50+', 
        value: '50+', 
        icon: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=300&h=400&fit=crop',
        iconFemale: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=400&fit=crop&crop=faces',
        iconMale: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=300&h=400&fit=crop&crop=faces',
        bgColor: '#F5F0E8'
      },
    ],
  },
  {
    id: 2,
    type: 'single-select',
    question: 'What is your weight loss goal?',
    options: [
      { label: 'Look and feel better', value: 'look-feel', icon: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop' },
      { label: 'Improve my health', value: 'health', icon: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=150&h=150&fit=crop' },
      { label: 'Both', value: 'both', icon: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop' },
    ],
  },
  {
    id: 3,
    type: 'single-select',
    question: 'How familiar are you with the Keto diet?',
    options: [
      { label: "I've tried it", value: 'tried' },
      { label: "I've heard a thing or two", value: 'heard' },
      { label: "Never heard of it", value: 'never' },
    ],
  },
  {
    id: 4,
    type: 'info',
    question: 'Keto diet is a low-carb, high-fat diet for fast weight loss',
    description: 'On Keto diet you burn fat for energy instead of carbohydrates and as a result can lose 2-5 kg per week',
    svgUrl: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/gDxpSpHOQU-548.svg',
  },
  {
    id: 5,
    type: 'single-select',
    question: 'At what time during the day do you usually feel hungry?',
    options: [
      { label: 'Morning', value: 'morning' },
      { label: 'Afternoon', value: 'afternoon' },
      { label: 'Evening', value: 'evening' },
      { label: "It's not tied to a specific time of the day", value: 'no-specific' },
    ],
  },
  {
    id: 6,
    type: 'text-input',
    question: 'What is your current weight?',
    unit: 'kg',
  },
  {
    id: 7,
    type: 'text-input',
    question: 'What is your target weight?',
    unit: 'kg',
  },
  {
    id: 8,
    type: 'text-input',
    question: 'What is your height?',
    unit: 'height',
  },
  {
    id: 9,
    type: 'single-select',
    question: 'What is your body type?',
    options: [
      { label: 'Slim', value: 'slim', icon: '🏃' },
      { label: 'Average', value: 'average', icon: '🚶' },
      { label: 'Overweight', value: 'overweight', icon: '🧍' },
    ],
  },
  {
    id: 10,
    type: 'single-select',
    question: 'How active are you?',
    options: [
      { label: 'Sedentary (little or no exercise)', value: 'sedentary', icon: '🛋️' },
      { label: 'Lightly active (1-3 days/week)', value: 'light', icon: '🚶' },
      { label: 'Moderately active (3-5 days/week)', value: 'moderate', icon: '🏃' },
      { label: 'Very active (6-7 days/week)', value: 'very', icon: '🏋️' },
    ],
  },
  {
    id: 11,
    type: 'single-select',
    question: 'How often do you exercise?',
    options: [
      { label: 'Never', value: 'never', icon: '❌' },
      { label: '1-2 times per week', value: '1-2', icon: '✅' },
      { label: '3-4 times per week', value: '3-4', icon: '✅✅' },
      { label: '5+ times per week', value: '5+', icon: '✅✅✅' },
    ],
  },
  {
    id: 12,
    type: 'single-select',
    question: 'Do you have any health conditions?',
    options: [
      { label: 'No', value: 'no', icon: '✅' },
      { label: 'Diabetes', value: 'diabetes', icon: '🩺' },
      { label: 'High blood pressure', value: 'bp', icon: '🩺' },
      { label: 'Heart disease', value: 'heart', icon: '🩺' },
      { label: 'Other', value: 'other', icon: '🩺' },
    ],
  },
  {
    id: 13,
    type: 'single-select',
    question: 'Do you have any dietary restrictions?',
    options: [
      { label: 'No', value: 'no', icon: '🍽️' },
      { label: 'Vegetarian', value: 'vegetarian', icon: '🥗' },
      { label: 'Vegan', value: 'vegan', icon: '🥗' },
      { label: 'Gluten-free', value: 'gluten-free', icon: '🌾' },
      { label: 'Other', value: 'other', icon: '🍽️' },
    ],
  },
  {
    id: 14,
    type: 'single-select',
    question: 'How many meals do you eat per day?',
    options: [
      { label: '1-2 meals', value: '1-2', icon: '🍽️' },
      { label: '3 meals', value: '3', icon: '🍽️🍽️' },
      { label: '4+ meals', value: '4+', icon: '🍽️🍽️🍽️' },
    ],
  },
  {
    id: 15,
    type: 'single-select',
    question: 'How much water do you drink daily?',
    options: [
      { label: 'Less than 1 liter', value: '<1', icon: '💧' },
      { label: '1-2 liters', value: '1-2', icon: '💧💧' },
      { label: '2-3 liters', value: '2-3', icon: '💧💧💧' },
      { label: 'More than 3 liters', value: '>3', icon: '💧💧💧💧' },
    ],
  },
  {
    id: 16,
    type: 'single-select',
    question: 'How many hours do you sleep per night?',
    options: [
      { label: 'Less than 5 hours', value: '<5', icon: '😴' },
      { label: '5-6 hours', value: '5-6', icon: '😴' },
      { label: '7-8 hours', value: '7-8', icon: '😴😴' },
      { label: 'More than 8 hours', value: '>8', icon: '😴😴😴' },
    ],
  },
  {
    id: 17,
    type: 'single-select',
    question: 'How would you rate your stress level?',
    options: [
      { label: 'Low', value: 'low', icon: '😌' },
      { label: 'Moderate', value: 'moderate', icon: '😐' },
      { label: 'High', value: 'high', icon: '😰' },
    ],
  },
  {
    id: 18,
    type: 'single-select',
    question: 'Do you smoke?',
    options: [
      { label: 'No', value: 'no', icon: '✅' },
      { label: 'Occasionally', value: 'occasional', icon: '🚬' },
      { label: 'Regularly', value: 'regular', icon: '🚬🚬' },
    ],
  },
  {
    id: 19,
    type: 'single-select',
    question: 'How often do you drink alcohol?',
    options: [
      { label: 'Never', value: 'never', icon: '🚫' },
      { label: 'Occasionally', value: 'occasional', icon: '🍷' },
      { label: 'Regularly', value: 'regular', icon: '🍷🍷' },
    ],
  },
  {
    id: 20,
    type: 'single-select',
    question: 'What is your occupation?',
    options: [
      { label: 'Desk job', value: 'desk', icon: '💼' },
      { label: 'Standing job', value: 'standing', icon: '🧍' },
      { label: 'Physical labor', value: 'physical', icon: '💪' },
      { label: 'Other', value: 'other', icon: '👤' },
    ],
  },
  {
    id: 21,
    type: 'single-select',
    question: 'How motivated are you to lose weight?',
    options: [
      { label: 'Somewhat motivated', value: 'somewhat', icon: '😐' },
      { label: 'Very motivated', value: 'very', icon: '😊' },
      { label: 'Extremely motivated', value: 'extreme', icon: '🔥' },
    ],
  },
  {
    id: 22,
    type: 'multi-select',
    question: 'What challenges do you face with weight loss?',
    options: [
      { label: 'Lack of time', value: 'time', icon: '⏰' },
      { label: 'Lack of motivation', value: 'motivation', icon: '💭' },
      { label: 'Unhealthy eating habits', value: 'eating', icon: '🍔' },
      { label: 'Lack of exercise', value: 'exercise', icon: '🏃' },
      { label: 'Stress eating', value: 'stress', icon: '😰' },
    ],
  },
  {
    id: 23,
    type: 'single-select',
    question: 'Have you tried dieting before?',
    options: [
      { label: 'No', value: 'no', icon: '❌' },
      { label: 'Yes, once', value: 'once', icon: '1️⃣' },
      { label: 'Yes, multiple times', value: 'multiple', icon: '🔢' },
    ],
  },
  {
    id: 24,
    type: 'single-select',
    question: 'How quickly do you want to see results?',
    options: [
      { label: '1-2 weeks', value: '1-2', icon: '⚡' },
      { label: '1 month', value: '1month', icon: '📅' },
      { label: '2-3 months', value: '2-3', icon: '📅📅' },
      { label: 'I\'m patient', value: 'patient', icon: '🧘' },
    ],
  },
  {
    id: 25,
    type: 'single-select',
    question: 'Do you cook at home?',
    options: [
      { label: 'Never', value: 'never', icon: '🍔' },
      { label: 'Sometimes', value: 'sometimes', icon: '👨‍🍳' },
      { label: 'Most of the time', value: 'mostly', icon: '👨‍🍳👨‍🍳' },
      { label: 'Always', value: 'always', icon: '👨‍🍳👨‍🍳👨‍🍳' },
    ],
  },
  {
    id: 26,
    type: 'single-select',
    question: 'How often do you eat fast food?',
    options: [
      { label: 'Never', value: 'never', icon: '✅' },
      { label: 'Once a week', value: 'weekly', icon: '🍔' },
      { label: 'Multiple times a week', value: 'multiple', icon: '🍔🍔' },
      { label: 'Daily', value: 'daily', icon: '🍔🍔🍔' },
    ],
  },
  {
    id: 27,
    type: 'single-select',
    question: 'Do you snack between meals?',
    options: [
      { label: 'Never', value: 'never', icon: '✅' },
      { label: 'Sometimes', value: 'sometimes', icon: '🍪' },
      { label: 'Often', value: 'often', icon: '🍪🍪' },
      { label: 'Always', value: 'always', icon: '🍪🍪🍪' },
    ],
  },
  {
    id: 28,
    type: 'single-select',
    question: 'What is your biggest weakness?',
    options: [
      { label: 'Sweet foods', value: 'sweet', icon: '🍰' },
      { label: 'Salty snacks', value: 'salty', icon: '🥨' },
      { label: 'Fried foods', value: 'fried', icon: '🍟' },
      { label: 'All of the above', value: 'all', icon: '😋' },
    ],
  },
  {
    id: 29,
    type: 'single-select',
    question: 'Do you track your calorie intake?',
    options: [
      { label: 'Never', value: 'never', icon: '❌' },
      { label: 'Sometimes', value: 'sometimes', icon: '📱' },
      { label: 'Always', value: 'always', icon: '📱✅' },
    ],
  },
  {
    id: 30,
    type: 'single-select',
    question: 'Are you willing to follow a meal plan?',
    options: [
      { label: 'Yes, definitely', value: 'yes', icon: '✅' },
      { label: 'Maybe', value: 'maybe', icon: '🤔' },
      { label: 'Prefer flexibility', value: 'flexible', icon: '🔄' },
    ],
  },
  {
    id: 31,
    type: 'single-select',
    question: 'Do you have support from family/friends?',
    options: [
      { label: 'Yes, strong support', value: 'strong', icon: '👨‍👩‍👧‍👦' },
      { label: 'Some support', value: 'some', icon: '👤' },
      { label: 'No support', value: 'none', icon: '❌' },
    ],
  },
  {
    id: 32,
    type: 'single-select',
    question: 'What time do you prefer to exercise?',
    options: [
      { label: 'Morning', value: 'morning', icon: '🌅' },
      { label: 'Afternoon', value: 'afternoon', icon: '☀️' },
      { label: 'Evening', value: 'evening', icon: '🌆' },
      { label: 'No preference', value: 'none', icon: '⏰' },
    ],
  },
  {
    id: 33,
    type: 'single-select',
    question: 'Do you prefer working out at home or gym?',
    options: [
      { label: 'Home', value: 'home', icon: '🏠' },
      { label: 'Gym', value: 'gym', icon: '🏋️' },
      { label: 'Outdoors', value: 'outdoor', icon: '🌳' },
      { label: 'No preference', value: 'none', icon: '🤷' },
    ],
  },
  {
    id: 34,
    type: 'single-select',
    question: 'How long can you commit to exercise daily?',
    options: [
      { label: '15 minutes', value: '15', icon: '⏱️' },
      { label: '30 minutes', value: '30', icon: '⏱️⏱️' },
      { label: '45 minutes', value: '45', icon: '⏱️⏱️⏱️' },
      { label: '1 hour or more', value: '60+', icon: '⏱️⏱️⏱️⏱️' },
    ],
  },
  {
    id: 35,
    type: 'single-select',
    question: 'What type of exercise do you enjoy?',
    options: [
      { label: 'Cardio', value: 'cardio', icon: '🏃' },
      { label: 'Strength training', value: 'strength', icon: '🏋️' },
      { label: 'Yoga/Pilates', value: 'yoga', icon: '🧘' },
      { label: 'Mix of all', value: 'mix', icon: '🔄' },
    ],
  },
  {
    id: 36,
    type: 'single-select',
    question: 'Do you experience any pain during exercise?',
    options: [
      { label: 'No', value: 'no', icon: '✅' },
      { label: 'Sometimes', value: 'sometimes', icon: '⚠️' },
      { label: 'Often', value: 'often', icon: '🩹' },
    ],
  },
  {
    id: 37,
    type: 'text-input',
    question: 'What is your target date to achieve your goal?',
    unit: 'date',
  },
];

