const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Ceux qui sont nés dans les années 70 sont : ");

entrepreneurs.forEach(element => {
  if (element.year >= 1970 && element.year < 1980) {
      console.log(element);
  }
});

console.log("Une array qui contient le nom et le prénom des entrepreuneurs : ");

let i = 0
let new_array_entrepreneurs = [];

entrepreneurs.forEach(element => {
        new_array_entrepreneurs[i] = element.first + " " + element.last;
        i++;
});
console.log(new_array_entrepreneurs);

console.log("Quel âge aurait chaque inventeur aujourd'hui ? ");

entrepreneurs.forEach(element => {
  console.log(`${element.first} aurait ${2020 - element.year} ans aujourd'hui`);
});

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.");

entrepreneurs.sort(entrepreneurs);
 
console.log(entrepreneurs);