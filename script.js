const ime = document.getElementById("ime"); 
const telefon = document.getElementById("telefon"); 
const adresa = document.getElementById("adresa"); 
const kucniBroj = document.getElementById("kucni broj"); 
const postanskiBroj = document.getElementById("postanski broj"); 
const mjesto = document.getElementById("mjesto"); 
const mail = document.getElementById("email"); 
const napomene = document.getElementById("napomene"); 
const button = document.querySelector('button');


//Ime i prezime - dozvoljen unos samo slova, ne može biti prazno

function validateName () {
	const namePattern = /^[a-zA-Z\s]+$/;
	
  if (!namePattern.test(ime.value) && ime.value !== "") {
    ime.setCustomValidity('Dozvoljen je unos samo slova');
		ime.reportValidity();
  } 
};

// Broj telefona , dozvoljen unos samo brojeva, minimalno 9 cifara , ne može biti prazno.
// Iako je u placeholder-u preporucen format 000 111 222, dozvoljeno je unijeti i druge
// formate kao npr. 000111222 ili 0 001 11222 itd. Ako hocemo da dozvolimo iskljucivo
// format 000 111 222 potrebno je koristiti regularnu ekspresiju /^\d{3} \d{3} \d{3}$/.

function validateTelephone () {
  const inputValue = telefon.value.replace(/\s+/g,'');

  if (!/^\d{9,}$/.test(inputValue)) {
    telefon.setCustomValidity('Potrebno je unijeti najmanje 9 cifara (slova i drugi znakovi nisu  dozvoljeni)');
		telefon.reportValidity();
  } else {
    telefon.setCustomValidity('');
  }
};

// email  mora biti u validnom formatu, ne moze biti prazno

function validateEmail () {
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	
  if (!emailPattern.test(mail.value) && mail.value !== "") {
    mail.setCustomValidity('Email adresa nije u pravilnom formatu');
		mail.reportValidity();
  } 
};

// funkcija koja provjerava da li su polja prazna

function isInputEmpty (inputElement) {
	if (inputElement.value === "") {
	inputElement.setCustomValidity("Polje ne može biti prazno");
	inputElement.reportValidity();
	} else {
	inputElement.setCustomValidity("");
	}
};

// validiraj formu klikom na Naruci button

function validateForm() {
	const inputs = document.querySelectorAll("input:not([type='submit'],#telefon)");
	inputs.forEach(input => isInputEmpty(input));
	validateEmail();
	validateName();
	validateTelephone();
};

//Kada je naručivanje uspješno sve podatke ispiši u konzolu.

function consoleLogFormData() {
  const inputs = document.querySelectorAll("input:not([type='submit'])");

  inputs.forEach(input => {
    const label = document.querySelector(`label[for="${input.id}"]`);
    console.log(`${label.textContent} ${input.value}`);
  });
  return false;
}

