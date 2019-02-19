import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// child_removed

// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed

// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added

// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//   description: 'Food',
//   note: '',
//   amount: 105000000,
//   createdAt: 'Jan 10, 2019'
// });

// database.ref('expenses').on(
//   'value',
//   snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   },
//   e => console.log('Error', e)
// );

// Use push() to work with array values

// database.ref('notes').push({
//   title: 'course work',
//   body: 'React hooks, react stucture'
// });

// READ DATA

// Subscribe

// const onValueChange = database.ref().on(
//   'value',
//   snapshot => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}!`);
//   },
//   e => console.log('Error with data fetching', e)
// );

// Once

// database
//   .ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => console.log('Error fetching data', e));

// SET DATA

// database // Database features
//   .ref() // Referencing a specific part (root is no argument) of database
//   .set({
//     // Set the database and overwrites existing data
//     name: 'Nick Tanner',
//     age: 40,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Cincinnati',
//       country: 'USA'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(error => {
//     console.log('This has failed:', error);
//   });

// // UPDATE DATA

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// REMOVE DATA

// database
//   .ref('isMarried')
//   .remove()
//   .then(() => {
//     console.log('Removed');
//   })
//   .catch(e => {
//     console.log('Not removed', e);
//   });
