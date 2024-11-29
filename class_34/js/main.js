const creativeItInstitute = {
  instituteName: "Creative IT Institute",
  location: ["mirpur", "dhanmondi", "uttara", "chittagong"],
  faculties: ["shohan", "shamim", "raziur", "alAmin", "taufik"],
  headOfDepartment: "Shohan Hossain Ean",
  batchActive: true,
  batch: {
    batchName: "mern_2403",
    totalStudents: 23,
    mentorName: "Taufik Islam",
    skillsLearned: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Git",
      "GitHub",
      "Figma",
      "VS Code",
      "JavaScript",
    ],
    studentsList: [
      "Hridoy",
      "Librance",
      "Niam",
      "Tanjil",
      "Siumon",
      "Sohel",
      "Nafis",
      "Shakib",
      "Ismail",
      "Zarin",
      "Gahangir",
      "Aylin",
      "Anushka",
      "Emon",
      "Rayian",
    ],
  },
  greetingStudents: function () {
    console.log(`Hello everyone. Welcome to ${this.instituteName}.`);
  },
};

// Method call and log statements
creativeItInstitute.greetingStudents();
console.log(
  `Web and Software Head of the Department is Mr ${creativeItInstitute.headOfDepartment} sir.`
);
console.log(`Our batch number is ${creativeItInstitute.batch.batchName}.`);
