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