require('dotenv').config({ path: '.env.local' });

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, setDoc, getDoc } = require('firebase/firestore');



console.log("Firebase ENV:", {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

// Firebase config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId:  process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

};
console.log("Firebase ENV:", {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});


console.log('========== Firebase Connection Test ==========\n');

// Validate config
console.log('1. Checking Firebase Configuration...');
const requiredFields = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
const missingFields = requiredFields.filter(field => !firebaseConfig[field]);

if (missingFields.length > 0) {
  console.error('❌ FAILED: Missing required Firebase configuration fields:');
  missingFields.forEach(field => console.error(`  - ${field}`));
  console.error('\nPlease check your .env file and ensure all variables are set.');
  process.exit(1);
}

console.log('✓ All required config fields present');
console.log(`  Project ID: ${firebaseConfig.projectId}`);
console.log(`  Auth Domain: ${firebaseConfig.authDomain}\n`);

// Initialize Firebase
console.log('2. Initializing Firebase...');
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log('✓ Firebase initialized\n');

// Test writing a simple document
console.log('3. Testing simple document write...');

async function testFirestoreWrite() {
  try {
    // Test 1: Very simple document
    console.log('   Test 1: Writing simple document...');
    const testDoc1 = doc(db, 'test_collection', 'test_doc_1');
    await setDoc(testDoc1, {
      testField: 'Hello World',
      timestamp: new Date().toISOString()
    });
    console.log('   ✓ Simple document written successfully');

    // Test 2: Document with nested structure
    console.log('   Test 2: Writing document with nested structure...');
    const testDoc2 = doc(db, 'test_collection', 'test_doc_2');
    await setDoc(testDoc2, {
      id: 1,
      name: 'Test Question',
      options: [
        { label: 'Option 1', value: 'opt1' },
        { label: 'Option 2', value: 'opt2' }
      ]
    });
    console.log('   ✓ Nested document written successfully');

    // Test 3: Document with URLs (similar to your data)
    console.log('   Test 3: Writing document with URLs...');
    const testDoc3 = doc(db, 'test_collection', 'test_doc_3');
    await setDoc(testDoc3, {
      id: 2,
      type: 'image-select',
      question: 'Test Question with Images',
      options: [
        {
          label: 'Test Label',
          value: 'test-value',
          icon: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300'
        }
      ]
    });
    console.log('   ✓ Document with URLs written successfully');

    console.log('\n✓ All tests passed!');
    console.log('\n========================================');
    console.log('Firebase connection is working correctly.');
    console.log('You can now safely run the upload script.');
    console.log('========================================\n');
    
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Test FAILED with error:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('\nFull error:', error);
    
    console.log('\n========================================');
    console.log('Troubleshooting suggestions:');
    console.log('1. Verify your Firebase project exists');
    console.log('2. Check Firestore is enabled in Firebase Console');
    console.log('3. Verify your Firestore security rules allow writes');
    console.log('4. Make sure your .env file has correct values');
    console.log('========================================\n');
    
    process.exit(1);
  }
}

testFirestoreWrite();