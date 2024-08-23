
// session storage for cart items
let bookBagItems = JSON.parse(sessionStorage.getItem("bookBagItems")) || [];
console.log(bookBagItems);

// pop-up message
function showMessage(message)
{
  alert(message);
}

// add to bookbag button eventlistener
var addtobookbag = document.querySelectorAll(".addtobookbag");

addtobookbag.forEach(function(btn) {
  btn.onclick = function(){
    var itemName = this.getAttribute("data-item");
    addToBookBag(itemName);
  };
});

//add item to bookbag
function addToBookBag(itemName){
  if (bookBagItems.includes(itemName))
  {
    showMessage(`${itemName} is already in your bookbag!`)
  }
  else {
    bookBagItems.push(itemName);
    sessionStorage.setItem("bookBagItems", JSON.stringify(bookBagItems));
    showMessage(`${itemName} has been added to your bookbag!`)
  }
}

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  })
})

function displayItems() {
  //get id for list
  var bookbagList = document.getElementById("bookBagItems");
  bookbagList.innerHTML = "";

  if (bookBagItems && bookBagItems.length > 0) {
    for (var i = 0; i < bookBagItems.length; i++) {
      var item = document.createElement("li");
      item.innerHTML = bookBagItems[i];
      bookbagList.appendChild(item);
      sessionStorage.setItem("bookBagItems", JSON.stringify(bookBagItems));
    }
  }
}

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active');
  overlay.classList.add('active');
  displayItems();
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

// empty bookbag function with eventlisterner
var emptybookbagbutton = document.getElementById("emptybookbag");

emptybookbagbutton.addEventListener('click', function() {
  if (bookBagItems.length == 0) {
    showMessage("Your bookbag is already empty!")}
  else {
    bookBagItems = []
    showMessage("Your bookbag has been emptied!")
    sessionStorage.setItem("bookBagItems", JSON.stringify(bookBagItems));
  }
  });

// process order button alert and event listener
var processBtn = document.getElementById("process-order-button");

processBtn.addEventListener('click', () => {
  if (bookBagItems.length == 0){
    showMessage("Your bookbag is empty!")}
  else {
  showMessage("Thank you for your order!")
  bookBagItems = []
  sessionStorage.setItem("bookBagItems", JSON.stringify(bookBagItems));}
});

// subscribe alert
var subscribeBtn = document.getElementById("subscribeBtn");

  subscribeBtn.addEventListener('click', () => {
  var email = document.getElementById("email").value;
  showMessage(`Thank you for subscribing! We will now send updates to: ${email}.`)
});