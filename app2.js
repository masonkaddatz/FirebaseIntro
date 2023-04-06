// Task 1

// objects
let realmadrid = {
  team_name: "Real Madrid",
  city: "Madrid",
  country: "Spain",
  top_scorers: ["Ronaldo", "Benzema", "Hazard"],
  worldwide_fans_in_millions: 798,
};

let barcelona = {
  team_name: "Barcelona",
  city: "Barcelona",
  country: "Spain",
  top_scorers: ["Messi", "Suarez", "Puyol"],
  worldwide_fans_in_millions: 738,
};

let manchesterunited = {
  team_name: "Manchester United",
  city: "Manchester",
  country: "England",
  top_scorers: ["Cantona", "Rooney", "Ronaldo"],
  worldwide_fans_in_millions: 755,
};

let manchestercity = {
  team_name: "Manchester City",
  city: "Manchester",
  country: "England",
  top_scorers: ["Sterling", "Aguero", "Haaland"],
  worldwide_fans_in_millions: 537,
};

let brazilnationalteam = {
  team_name: "Brazil National Team",
  city: "na",
  country: "Brazil",
  top_scorers: ["Ronaldinho", "Cafu", "Bebeto"],
  worldwide_fans_in_millions: 950,
};

let argentinanationalteam = {
  team_name: "Argentina National Team",
  city: "na",
  country: "Argentina",
  top_scorers: ["Messi", "Batistuta", "Maradona"],
  worldwide_fans_in_millions: 888,
};

let atleticomadrid = {
  team_name: "Atletico Madrid",
  city: "Madrid",
  country: "Spain",
  top_scorers: ["Aragonés", "Griezmann", "Torez"],
  worldwide_fans_in_millions: 400,
};

// store in database collection
// db.collection("teams").add(realmadrid);
// db.collection("teams").add(barcelona);
// db.collection("teams").add(manchesterunited);
// db.collection("teams").add(manchestercity);
// db.collection("teams").add(brazilnationalteam);
// db.collection("teams").add(argentinanationalteam);
// db.collection("teams").add(atleticomadrid);

// Task 2

// Queries
// Question 1:
// db.collection("teams")
//   .where("country", "==", "Spain")
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// Question 2:
// db.collection("teams")
//   .where("country", "==", "Spain")
//   .where("city", "==", "Madrid")
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// Question 3:
// db.collection("teams")
//   .where("city", "==", "na")
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// Question 4:
// db.collection("teams")
//   .where("country", "!=", "Spain")
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// Question 5:
// db.collection("teams")
//   .where("country", "not-in", ["Spain", "England"])
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// Question 6:
// db.collection("teams")
//   .where("country", "==", "Spain")
//   .where("worldwide_fans_in_millions", ">", 700)
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// Question 7:
// db.collection("teams")
//   .where("worldwide_fans_in_millions", ">=", 500)
//   .where("worldwide_fans_in_millions", "<=", 600)
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// Question 8:
// db.collection("teams")
//   .where("top_scorers", "array-contains", "Ronaldo")
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// Question 9:
// db.collection("teams")
//   .where("top_scorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     // loop through docs array
//     docs.forEach((doc) => {
//       console.log(doc.data().team_name);
//     });
//   });

// Task 3

// updating existing data
// Question a1:
// db.collection("teams").doc("x9Joz5znHo62VSmw3I0l").update({
//   team_name: "Real Madrid FC",
//   worldwide_fans_in_millions: 811,
// });

// Question a2:
// db.collection("teams").doc("pf2zjkOwrtuqItpb68AW").update({
//   team_name: "FC Barcelona",
//   worldwide_fans_in_millions: 747,
// });

// Question a1 (part 2):
// db.collection("teams")
//   .doc("x9Joz5znHo62VSmw3I0l")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
//   });
// db.collection("teams")
//   .doc("x9Joz5znHo62VSmw3I0l")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayUnion("Crispo"),
//   });

// Question a2 (part 2):
// db.collection("teams")
//   .doc("pf2zjkOwrtuqItpb68AW")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
//   });
// db.collection("teams")
//   .doc("pf2zjkOwrtuqItpb68AW")
//   .update({
//     top_scorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
//   });

// Question b1:
// db.collection("teams")
//   .doc("x9Joz5znHo62VSmw3I0l")
//   .update({
//     color: {
//       home: "white",
//       away: "black",
//     },
//   });

// Question b2:
// db.collection("teams")
//   .doc("pf2zjkOwrtuqItpb68AW")
//   .update({
//     color: {
//       home: "red",
//       away: "gold",
//     },
//   });

// Question c1:
// db.collection("teams").doc("x9Joz5znHo62VSmw3I0l").update({
//   "color.away": "purple",
// });

// Question c2:
// db.collection("teams").doc("pf2zjkOwrtuqItpb68AW").update({
//   "color.away": "pink",
// });
