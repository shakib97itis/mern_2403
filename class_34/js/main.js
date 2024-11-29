const creative_it_institute = {
  institute_name: "Creative IT Institute",
  location: ["mirpur", "dhanmondi", "uttara", "chittagong"],
  faculties: ["shohan", "shamim", "raziur", "al_amin", "taufik"],
  head_of_department: "Shohan Hossain Ean",
  batch_active: true,
  batch: {
    batch_name: "mern_2403",
    total_students: 23,
    mentor_name: "Taufik islam",
    skills_learned: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Git",
      "Github",
      "Figma",
      "VS Code",
      "Javascript",
    ],
    students_list: [
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
      "Hridoy",
      "Gahangir",
      "Aylin",
      "Anushka",
      "Emon",
      "Rayian",
    ],
  },
  greeting_students: function () {
    console.log(`Hello everyone. welcome to ${this.institute_name}.`);
  },
};

creative_it_institute.greeting_students();
console.log(
  `Web and Software Head of the Department is Mr ${creative_it_institute.head_of_department} sir.`
);
console.log(`Our batch number is ${creative_it_institute.batch.batch_name}.`);
