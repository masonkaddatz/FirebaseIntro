// insert data

let john = {
  name: "John",
  age: 25,
  married: false,
  favourites: {
    color: "green",
    city: "Madison",
  },
  siblings: ["Mike", "Amy", "Jack"],
};

let derek = {
  name: "Derek",
  age: 27,
  married: true,
  favourites: {
    color: "red",
    city: "Madison",
  },
  siblings: ["Mike", "Peter", "Neil"],
};

let sally = {
  name: "Sally",
  age: 40,
  married: false,
  favourites: {
    color: "blue",
    city: "Chicago",
  },
  siblings: ["Neil"],
};

// store objects

// store john info
// db.collection("users").doc("john@john.com").set(john);

// store derek info
// db.collection("users").doc("derek@derek.com").set(derek);

// store sally info
// db.collection("users").doc("sally@sally.com").set(sally);

// change sally's age to 41 and her status to married
// db.collection("users").doc("sally@sally.com").update({
//   age: 41,
//   married: true,
// });

// update derek's information, set fav color to yellow
// db.collection("users").doc("derek@derek.com").update({
//   "favourites.color": "yellow",
//   age: 30,
// });

// add katie as a sibling to john
// db.collection("users")
//   .doc("john@john.com")
//   .update({
//     siblings: firebase.firestore.FieldValue.arrayUnion("katie"),
//   });

// query

// show the names of all people under 30 years of age
// db.collection("users")
//   .where("age", "<", 30)
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().name);
//     });
//   });

// show the names of all people above or equal to 30 years of age
// db.collection("users")
//   .where("age", ">=", 30)
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().name);
//     });
//   });

// compound queries

// show names of all people between 30 and 35 years of age
// db.collection("users")
//   .where("age", ">=", 30)
//   .where("age", "<=", 35)
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().name);
//     });
//   });

// show the names of all people whose name is derek and 30 years of age
// db.collection("users")
//   .where("age", ">", 28)
//   .where("name", "==", "Derek")
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().name);
//     });
//   });

// show all users with a name that is derek or sally
// db.collection("users")
//   .where("name", "in", ["Derek", "Sally"])
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().name);
//     });
//   });

// shows the names of all people whose sibling is called mike or katie
// db.collection("users")
//   .where("siblings", "array-contains-any", ["Mike", "katie"])
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().name);
//     });
//   });
