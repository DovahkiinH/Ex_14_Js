function verif() {

    const nombreMagique = Math.floor(Math.random() * 100) + 1;

    const saisieUtilisateur = parseInt(document.getElementById("textBox1").value);
  
    if (isNaN(saisieUtilisateur)) {
      alert("Veuillez saisir un nombre valide.");
    } else {

      if (saisieUtilisateur === nombreMagique) {
        alert("Bravo ! Vous avez trouvé le nombre magique.");
      } else if (saisieUtilisateur < nombreMagique) {
        alert("Trop petit. Essayez à nouveau.");
      } else {
        alert("Trop grand. Essayez à nouveau.");
      }
    }
  }