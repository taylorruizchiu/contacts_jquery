/* wait until the document is ready, then start running javascript */

$(document).ready(function(){

var addContact = function(newContact){
  var contactString = ["<li id='", newContact.id, "'class='contact'>",
                        "<div>", newContact.name, "</div>",
                        "<div>", newContact.phone, "</div>",
                        "<div>", newContact.email, "</div>",
                        "<div>", "<img src='", newContact.imgUrl, "'/>", "</div>",
                        "<span class='edit'>Edit</span",
                        "<span class='delete'>Delete</span",
                      "</li>"].join("");

  $("#contacts").append(contactString);

};

var editContact = function(newContact){
  
};

  
  var contacts = [];
  var count = 0;

/* Watch for a submit event on the form */
$("#newContact").submit(function(event){
    event.preventDefault();

/* console.log(this); You can send view the form data in the console by writing console.log(this) in your code

/* Return the current value of the input field and set it as a variable: */
    var name = $("#name").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var imgUrl = $("#imgUrl").val();

/* Check that you collected all the fields by printing them to the console: */
  console.log(name, phone, email, imgUrl);

  this.reset();

  // Keep track of new contacts:

  var newContact = {  id: count,
                      name: name,
                      phone: phone,
                      email: email,
                      imgUrl: imgUrl };
  count += 1;
  contacts.push(newContact);

// Call a function to add our contact to the page

  addContact(newContact);

  });
});

