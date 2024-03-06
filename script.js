// Create own Resume data in JSON format
let myResume = {
    "About myself": {
        "name": "Preethi Florence Priyanka K",
        "email": "preethikarunagaran@gmail.com",
        "mobileNO": "8825843284",
        "address": "No: 20, Annamalai Nagar, Katpadi",
        "city": "Vellore",
        "Postalcode": "632007",
    },
    "Education": [
        {
        "institution": "Er.Perumal Manimekalai College of Engg and Technology",
        "department": "B.Tech Informaion Technology",
        "year": "2007-2011",
        "division": "First Class",
        }
    ],
    "Work Experience": [
        {
            "Organisation" : " Christian Medical College and Hospital",
            "Role": "Administrative Technician",
            "Period of Working": "2019 - 2023",

        }
    ]
    

    }
console.log(myResume);

//iterate overall for loops (for, for in, for of, for Each)
//for loop
console.log("Using for loop:");
  for (let key in myResume) {
  console.log(`${key}: ${myResume[key]}`);
}


  console.log("\nUsing for...in loop:");
  for (let key in myResume) {
  if (myResume.hasOwnProperty(key)) {
    console.log(`${key}: ${myResume[key]}`);
  }
}


  console.log("\nUsing for...of loop:");
  for (let value of Object.values(myResume)) {
  console.log(value);
}

  console.log("\nUsing forEach loop for Education:");
  myResume.Education.forEach((Education) => {
  console.log(Education);
});