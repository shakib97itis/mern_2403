const students = [
  "Ariyan Khan",
  "Ariyan Khan",
  "Subroto Kumar Barman",
  "Hima Hakkani Eva",
  "Abu Sayeed",
  "Md Rubel Hossen",
  "Mohammad Gahangir Hossain",
  "Saimun Hasan Rifat",
  "Md. Ismail Hossain",
  "Nafiz Zubaer",
  "Raiyan Ahmed",
  "Md Hridoy Khan",
  "Munsiun Hossain Bhuiyan",
  "Syed Mahian",
  "Md. Shohel Rana",
  "Md Imran Hossain",
  "Mehedi Hasan Mitul",
  "Sifat Ullah",
  "Rabbî Tawhid",
  "Ankita Hossain Anushka",
  "Azlina Arabi Hossain Aylin",
];

const ol = document.getElementById("list");

for (let i = 0; i < students.length; i++) {
  if (
    students[i] === "Azlina Arabi Hossain Aylin" ||
    students[i] === "Ankita Hossain Anushka" ||
    students[i] === "Hima Hakkani Eva"
  ) {
    ol.innerHTML += `<li class="mark">Miss. ${students[i]}</li>`;
  } else {
    ol.innerHTML += `<li>Mr. ${students[i]}</li>`
  }
}
