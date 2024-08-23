// pop-up message
function showMessage(message)
{
  alert(message);
}

// bookclub alert
var bookclubBtn = document.getElementById("bookclubBtn");

bookclubBtn.onclick = function () {
  showMessage("Thank you for your interest in our online bookclub!\nYou will now be redirected to our bookclub registration page.")
};

// subscribe alert
var subscribeBtn = document.getElementById("subscribeBtn");

  subscribeBtn.addEventListener('click', () => {
  var email = document.getElementById("email").value;
  showMessage(`Thank you for subscribing! We will now send updates to: ${email}.`)
});