function pyramide()
{
  etages = prompt("Salut combien d'étages veux-tu pour ta pyramide")

  for (let i=1; i <= etages; i++) {

      console.log(" ".repeat(etages - i) + "#".repeat(i));

  }
}
 pyramide()