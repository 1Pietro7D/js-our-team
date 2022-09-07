console.log("hello world");
/*
const teamMate = {
  picture: "",
  name: "",
  role: "",
};
*/

// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

// M1 -- ARRAY OF OBJECT
const team = [
  {
    picture: "wayne-barnett-founder-ceo.jpg",
    name: "Wayne Barnett",
    role: "Founder & CEO",
  },
  {
    picture: "angela-caroll-chief-editor.jpg",
    name: "Angela Caroll",
    role: "Chief Editor",
  },
  {
    picture: "walter-gordon-office-manager.jpg",
    name: "Walter Gordon",
    role: "Office Manager",
  },
  {
    picture: "angela-lopez-social-media-manager.jpg",
    name: "Angela Lopez",
    role: "Social Media Manager",
  },
  {
    picture: "scott-estrada-developer.jpg",
    name: "Scott Estrada",
    role: "Developer",
  },
  {
    picture: "barbara-ramos-graphic-designer.jpg",
    name: "Barbara Ramos",
    role: "Graphic Designer",
  },
];

const album_team = document.querySelector("#album_team > ul");

for (let index = 0; index < team.length; index++) {
  const teamMate = team[index];
  console.log(`
    TEAM MATE ${index + 1}
    name: ${teamMate.name}
    role: ${teamMate.role}
    `);
} // END M1 --
