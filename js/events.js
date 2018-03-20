/* JavaScript Events
================================================== */

// Input Values
const submit = document.querySelector("button");
const name = document.querySelector("#full-name");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const address2 = document.querySelector("#address2");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const zip = document.querySelector("#zip");
const country = document.querySelector("#country");

// Create a validity class

class CheckValidity {
  constructor(input, type) {
    this.input = input;
    this.type = type;
    this.errors = [];
  }

  addError(message) {
    this.errors.push(message);
  }

  getMessages() {
    const status = this.input.validity

    if (status.typeMismatch) {
      this.addError('Entry does not match the field type');
    }

    if (status.tooLong) {
      this.addError('Entry is too long');
    }

    if (status.tooShort) {
      this.addError('Entry is too short');
    }

    return this.errors
  }

}

// Set up submit listener

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let validateName = new CheckValidity(name, "text");
  let errorMessages = validateName.getMessages();
  // console.log(errorMessages);
  if (errorMessages.length > 0) {
    errorMessages.forEach( (err) => {
      name.insertAdjacentHTML('afterend', '<p class="error">' + err + '</p>')
    })
  } else {
    alert('Form Submitted');
  }
})
