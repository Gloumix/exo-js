function factorielle() {
  let number = 1;
  fact = 1;
  number = prompt("De quel nombre veux-tu calculer la factorielle ?");

  for(let count = 1; count <= number; count++){
      fact = fact * count;
  }
  console.log("Le résultat est :" + fact);
  
}

factorielle();