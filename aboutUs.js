// pop-up message
function showMessage(message)
{
  alert(message);
}

// subscribe alert
var subscribeBtn = document.getElementById("subscribeBtn");

  subscribeBtn.addEventListener('click', () => {
  var email = document.getElementById("email").value;
  showMessage(`Thank you for subscribing! We will now send updates to: ${email}.`)
});

// submit form
var submitBtn = document.getElementById("formSubmitBtn");

submitBtn.onclick = function submitForm() {
  const fname = document.getElementById("fname").value
  const lname = document.getElementById("lname").value
  const email = document.getElementById("submitemail").value
  const phone = document.getElementById("phone").value
  const customOrder = document.getElementById("custom").checked
  const comments = document.getElementById("comments").value

  const custInfo = {
    fname, lname, email, phone, customOrder, comments
  }
  const keyValue = `${fname} ${lname}`
  localStorage.setItem(keyValue, JSON.stringify(custInfo))

  if (fname == "" || email == "" || comments == "") {
    showMessage("Please enter your name, email and fill out the comments/details field.")
  }
  else {
    const who = JSON.parse( localStorage.getItem(keyValue) )
    showMessage(`Thank you for your message, ${who.fname}!`)}
  }