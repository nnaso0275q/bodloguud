// Map methods
// array iig uuriig ni uurchiluhgui
// map neg function avna, tuhain function bas neg utga avna
// map method shine shine array uusgej ugnu
// ymar array uusgehee map iin return eer shiidne

// ene kod ni bolhoor bugdiin doosh ni tuvuulchihdag bas ter "a" utga ni "b" ch baij bolno ymarch baij bolno.
let ages = [10, 203, 40, 30, 50];
ages.map((a) => {
  console.log(a);
});

// deerhtei adilhan gehdee arai uur argachilal ni
for (i = 0; i < ages.length; i++) {
  console.log(ages[i]);
}

// ymar array uusgehee map iin return eer shiidne
let duu = ages.map((b) => {
  return 10;
  console.log(b);
});

// iim bas baij bolno
let duu1 = ages.map((b) => {
  console.log(b);
  return {
    value: 10 - b,
  };
});
console.log(duu);

let students = [
  {
    name: "zulaa",
    age: 18,
    grade: 11,
    gender: "female",
  },

  {
    name: "bilguunee",
    age: 19,
    grade: 11,
    gender: "male",
  },

  {
    name: "haliunaa",
    age: 14,
    grade: 11,
    gender: "female",
  },

  {
    name: "nandia",
    age: 17,
    grade: 11,
    gender: "male",
  },

  {
    name: "deegii",
    age: 16,
    grade: 11,
    gender: "female",
  },
];
// grade iin angi angi ni negeer nemegdej baina
let newStudents = students.map((student) => {
  return {
    name: student.name,
    age: student.age,
    grade: student.grade + 1,
  };
});
console.log(newStudents);

// filter
// filter uuriig ni uurchiluhgui
// shine array uusgej ugnu
// filter method neg function avna,tuhain function neg utga avna
const filtered = ages.filter((age) => {
  return age % 2 == 0;
});
console.log(filtered);

// sort method
// sort method function avna
// avj baigaa fumction ni 2 utga orj irne
// return deer + esvel -too butsaana

ages.sort((a, b) => {
  return -1;
});
console.log(ages);
ages.sort((a, b) => {
  console.log("a = ", a);
  console.log("b = ", b);
  return 1;
});
console.log(ages);
ages.sort((a, b) => {
  console.log("a = ", a);
  console.log("b = ", b);
  return -1;
});

// age iin ihees bagaruu ni erembel
console.log(students);
students.sort((student2, student1) => {
  return student2.age - student1.age;
});
console.log(students);

students.sort((student2, student1) => {
  if (student1.gender > student2.gender) {
    return -1;
  } else {
    return 1;
  }
});
console.log(students);