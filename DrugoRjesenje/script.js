// ako input nije prazan zadrzi 'shrink' klasu na label elementima i 
// dodaj 'add-color' klasu na input

function addClassesIfInputIsNotEmpty() {
  const inputs = document.querySelectorAll("input:not([type='submit'])");

  function callback (e) {
    const label = document.querySelector(`label[for="${e.target.id}"]`);
    if(e.target.value !== ""){
      label.className = 'form-input-label shrink';
      e.target.className = 'form-input add-color';
    } else {
      label.className = 'form-input-label';
      e.target.className = 'form-input';
    }
  }
  inputs.forEach(input => {
    input.addEventListener("input", callback)
  });
} 
addClassesIfInputIsNotEmpty();


// ako je forma validna ispisi podatke u konzolu

function consoleLogFormData() {
  const inputs = document.querySelectorAll("input:not([type='submit'])");

  inputs.forEach(input => {
    const label = document.querySelector(`label[for="${input.id}"]`);
    console.log(`${label.textContent} ${input.value}`);
  });
  return false
}