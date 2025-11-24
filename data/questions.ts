export type QuestionType = 'image-select' | 'text-input' | 'single-select' | 'multi-select' | 'slider' | 'info' | 'progress' | 'testimonial' | 'loading';

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
        iconFemale: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/HYZrYnnAsK-734.webp',
        iconMale: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/KADQVlZKpN-734.webp',
        bgColor: '#E8DDD0'
      },
      { 
        label: '27-38', 
        value: '27-38', 
        icon: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
        iconFemale: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/ddw7N6zRFG-734.webp',
        iconMale: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/uNSYjeFXBk-734.webp',
        bgColor: '#E0B4B4'
      },
      { 
        label: '39-50', 
        value: '39-50', 
        icon: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop',
        iconFemale: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/0KuDDOg40H-734.webp',
        iconMale: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/1tZaeIRJIA-734.webp',
        bgColor: '#E8DDD0'
      },
      { 
        label: '50+', 
        value: '50+', 
        icon: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=300&h=400&fit=crop',
        iconFemale: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/8z3zAJ82qo-480.webp',
        iconMale: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/LEFWuLuLHG-480.webp',
        bgColor: '#F5F0E8'
      },
    ],
  },
  {
    id: 2,
    type: 'single-select',
    question: 'What is your weight loss goal?',
    options: [
      { 
        label: 'Look and feel better', 
        value: 'look-feel', 
        icon: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
        iconFemale: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/6OC_0G2kFA-375.webp',
        iconMale: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/Dsu65y76nU-375.webp'
      },
      { 
        label: 'Improve my health', 
        value: 'health', 
        icon: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=150&h=150&fit=crop',
        iconFemale: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/EXJAQCNtQz-375.webp',
        iconMale: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/fPnH6JNT-m-375.webp'
      },
      { 
        label: 'Both', 
        value: 'both', 
        icon: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop',
        iconFemale: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/h8gUWAq7U--375.webp',
        iconMale: 'https://v3.ketogo.app/ww-en/k-33m-usd-metric-default/img/AcrmT4p9LQ-375.webp'
      },
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
    type: 'single-select',
    question: 'What is your favourite meal of the day?',
    options: [
      { label: 'Breakfast', value: 'breakfast' },
      { label: 'Lunch', value: 'lunch' },
      { label: 'Dinner', value: 'dinner' },
      { label: 'Snacks', value: 'snacks' },
      { label: "I don't have a favourite meal", value: 'no-favourite' },
    ],
  },
  {
    id: 7,
    type: 'single-select',
    question: 'Have you successfully lost weight before but failed to keep the results?',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
  },
  {
    id: 8,
    type: 'info',
    question: 'Keto diet is different',
    description: 'The majority of people who successfully lose weight gain it back within 3-6 months. KetoGo app will help you not only lose weight and reach your ideal weight but also keep that weight off easily.',
    svgUrl: '',
  },
  {
    id: 9,
    type: 'text-input',
    question: 'What is your height?',
    unit: 'height',
  },
  {
    id: 10,
    type: 'text-input',
    question: 'What is your current weight?',
    unit: 'kg',
  },
  {
    id: 11,
    type: 'text-input',
    question: 'What is your goal weight?',
    unit: 'kg',
  },
  {
    id: 12,
    type: 'single-select',
    question: 'What is your body type?',
    options: [
      { label: 'Slim', value: 'slim', icon: '🏃' },
      { label: 'Average', value: 'average', icon: '🚶' },
      { label: 'Overweight', value: 'overweight', icon: '🧍' },
    ],
  },
  {
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
    type: 'text-input',
    question: 'Your Keto weight loss journey is about to begin!',
    description: 'What is your name?',
    unit: 'name',
  },
  {
    id: 17,
    type: 'progress',
    question: 'Based on your answers so far',
    description: 'Progress summary with graph and testimonial',
  },
  {
    id: 18,
    type: 'single-select',
    question: 'How would you describe your activity level during the week?',
    options: [
      { label: 'Little or no exercise', value: 'little' },
      { label: 'Lightly active (1-2 workouts)', value: 'light' },
      { label: 'Moderately active (3-5 workouts)', value: 'moderate' },
      { label: 'Very active (6-7 workouts)', value: 'very' },
      { label: 'Highly active (daily exercise or sports and physical job)', value: 'highly' },
    ],
  },
  {
    id: 19,
    type: 'single-select',
    question: 'How long has it been since you had your ideal weight?',
    options: [
      { label: 'Less than 1 year', value: '<1' },
      { label: '1-3 years', value: '1-3' },
      { label: 'More than 3 years', value: '>3' },
      { label: 'Never had it', value: 'never' },
    ],
  },
  {
    id: 20,
    type: 'single-select',
    question: 'What size clothes do you usually wear?',
    options: [
      { label: 'XXXL+', value: 'xxxl-plus' },
      { label: 'XXXL', value: 'xxxl' },
      { label: 'XXL', value: 'xxl' },
      { label: 'XL', value: 'xl' },
      { label: 'L', value: 'l' },
      { label: 'M', value: 'm' },
      { label: 'S or smaller', value: 's' },
    ],
  },
  {
    id: 21,
    type: 'single-select',
    question: 'What size clothes would you like to wear?',
    options: [
      { label: 'XXXL+', value: 'xxxl-plus' },
      { label: 'XXXL', value: 'xxxl' },
      { label: 'XXL', value: 'xxl' },
      { label: 'XL', value: 'xl' },
      { label: 'L', value: 'l' },
      { label: 'M', value: 'm' },
      { label: 'S or smaller', value: 's' },
    ],
  },
  {
    id: 22,
    type: 'testimonial',
    question: '85% of KetoGo app users that stayed on their plan have reduced their clothing size at least by 1 size',
    description: 'Testimonial with before/after image',
  },
  {
    id: 23,
    type: 'single-select',
    question: 'How would you describe your eating habits?',
    options: [
      { label: 'I eat the same food almost every day', value: 'same' },
      { label: 'I cook different variations of the same ingredients', value: 'variations' },
      { label: 'I have a couple favourites that I switch between', value: 'favourites' },
      { label: 'I eat a diverse range of foods', value: 'diverse' },
      { label: 'I am not sure', value: 'unsure' },
    ],
  },
  {
    id: 24,
    type: 'info',
    question: 'Keto is very tasty!',
    description: 'You\'ll find recipes according to your cooking level and preferences. All of them are delicious, healthy and perfect for losing weight. Enjoy rich, delicious meals every day!',
    svgUrl: '',
  },
  {
    id: 25,
    type: 'multi-select',
    question: 'Pick up to 5 favourite ingredients from this list',
    options: [
      { label: 'Avocado', value: 'avocado' },
      { label: 'Eggs', value: 'eggs' },
      { label: 'Nuts', value: 'nuts' },
      { label: 'Butter', value: 'butter' },
      { label: 'Meat', value: 'meat' },
      { label: 'Tofu', value: 'tofu' },
      { label: 'Beans', value: 'beans' },
      { label: 'Mushrooms', value: 'mushrooms' },
      { label: 'Cheese', value: 'cheese' },
    ],
  },
  {
    id: 26,
    type: 'multi-select',
    question: 'What is your preferred protein?',
    description: 'Pick as much as you like',
    options: [
      { label: 'I eat it all', value: 'all' },
      { label: 'Eggs', value: 'eggs' },
      { label: 'Dairy protein (milk, yogurt, cheese, curd etc.)', value: 'dairy' },
      { label: 'Chicken', value: 'chicken' },
      { label: 'Beef', value: 'beef' },
      { label: 'Pork', value: 'pork' },
      { label: 'Turkey', value: 'turkey' },
      { label: 'Fish', value: 'fish' },
      { label: 'Lamb', value: 'lamb' },
    ],
  },
  {
    id: 27,
    type: 'multi-select',
    question: 'Do you have any food allergies or intolerances?',
    description: 'Pick as many as applicable',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Lactose', value: 'lactose' },
      { label: 'Nut', value: 'nut' },
      { label: 'Shellfish', value: 'shellfish' },
      { label: 'Milk protein', value: 'milk-protein' },
      { label: 'Egg protein', value: 'egg-protein' },
      { label: 'Honey', value: 'honey' },
      { label: 'Citrus', value: 'citrus' },
    ],
  },
  {
    id: 28,
    type: 'info',
    question: 'Your personalised Keto meal plan is being built',
    description: '600+ recipes that match your preferences. You\'ll love your new meal plan!',
    svgUrl: '',
  },
  {
    id: 29,
    type: 'single-select',
    question: 'How much sleep do you typically get per night?',
    options: [
      { label: 'More than 8 hours', value: '>8' },
      { label: '7-8 hours', value: '7-8' },
      { label: '5-6 hours', value: '5-6' },
      { label: 'I have trouble sleeping. Some nights I get less than 5 hours of sleep.', value: '<5' },
    ],
  },
  {
    id: 30,
    type: 'single-select',
    question: 'How many glasses of water do you usually drink per day?',
    options: [
      { label: '1 glass or less', value: '1' },
      { label: '2-3 glasses', value: '2-3' },
      { label: '4-5 glasses', value: '4-5' },
      { label: '6-7 glasses', value: '6-7' },
      { label: '8+ glasses', value: '8+' },
    ],
  },
  {
    id: 31,
    type: 'single-select',
    question: 'What are your working hours?',
    options: [
      { label: '9 to 5 job', value: '9-5' },
      { label: 'Night job', value: 'night' },
      { label: 'Irregular, different shifts', value: 'irregular' },
      { label: 'I am retired', value: 'retired' },
    ],
  },
  {
    id: 32,
    type: 'single-select',
    question: 'Describe your average day',
    options: [
      { label: 'Mostly sedentary (minimal walking, standing)', value: 'sedentary' },
      { label: 'Balanced (sitting with some walking and light exercise)', value: 'balanced' },
      { label: 'Very physical (hard labour)', value: 'physical' },
      { label: 'Unpredictable. Can be either sedentary or physical depending on the day.', value: 'unpredictable' },
    ],
  },
  {
    id: 33,
    type: 'multi-select',
    question: 'Are you taking any medication?',
    options: [
      { label: 'Antibiotics', value: 'antibiotics' },
      { label: 'Anxiety medications', value: 'anxiety' },
      { label: 'Hormones', value: 'hormones' },
      { label: 'Vitamins', value: 'vitamins' },
      { label: 'Other', value: 'other' },
      { label: 'No', value: 'no' },
    ],
  },
  {
    id: 34,
    type: 'multi-select',
    question: 'Do you have any of these health conditions?',
    options: [
      { label: 'Diabetes (any stage)', value: 'diabetes' },
      { label: 'Acid reflux', value: 'acid-reflux' },
      { label: 'Sleep apnea', value: 'sleep-apnea' },
      { label: 'High blood pressure', value: 'high-bp' },
      { label: 'High cholesterol', value: 'high-cholesterol' },
      { label: 'Heart disease or issues', value: 'heart' },
      { label: 'Kidney disease or issues', value: 'kidney' },
      { label: 'Cancer', value: 'cancer' },
      { label: 'I am recovering from surgery', value: 'surgery' },
    ],
  },
  {
    id: 35,
    type: 'multi-select',
    question: 'What goal would you like to achieve in addition to weight loss?',
    options: [
      { label: 'Run a 5k', value: '5k' },
      { label: 'Look better in the mirror', value: 'look-better' },
      { label: 'Be healthier and have more energy', value: 'healthier' },
      { label: 'Sleep better', value: 'sleep-better' },
      { label: 'Prepare for a special event', value: 'special-event' },
      { label: 'Feel comfortable in my own body', value: 'comfortable' },
      { label: 'Have a better sex life', value: 'sex-life' },
      { label: 'Have more confidence', value: 'confidence' },
    ],
  },
  {
    id: 36,
    type: 'info',
    question: 'It\'s not just your body! Here\'s how weight loss can change your face!',
    description: 'Weight loss can remove a lot of fat and roundness in the face, around the eyes, below jawline and chin giving your skin a younger and healthier look.',
    svgUrl: '',
  },
  {
    id: 37,
    type: 'progress',
    question: 'With the right motivation and persistence we predict you\'ll reach your goal even faster!',
    description: 'Progress summary with graph and testimonial',
  },
  {
    id: 38,
    type: 'loading',
    question: 'Preparing your plan. Please wait to see your results!',
    description: 'Loading screen with circular progress',
  },
];

