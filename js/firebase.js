var firebaseConfig = {
  apiKey: "AIzaSyBnRUKoNnHQOiFGIHOITJY-xX0CZ8jkxGY",
  authDomain: "personal-portfolio-new.firebaseapp.com",
  databaseURL: "https://personal-portfolio-new-default-rtdb.firebaseio.com",
  projectId: "personal-portfolio-new",
  storageBucket: "personal-portfolio-new.appspot.com",
  messagingSenderId: "99820529401",
  appId: "1:99820529401:web:64b875b2cd2bc96382a428",
  measurementId: "G-VNXP22WXNX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');



document.getElementById('contactForm').addEventListener('submit', submitForm);


//function to save message to firebase

function saveMessage(name, email, subject, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message
  });
}


/*------------------
Contact Form - to get elements by id - connect to firebase
-----------------------*/



function submitForm(e){
  e.preventDefault(); // to prevent the default behaviour submit button i.e., coming back to home/same page

  //getting value

  var name = getInputVal('name');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  saveMessage(name, email, subject, message);
}

//function to get elemt by id - making code short by not typing document.<----> again and again.

function getInputVal(id){
  return document.getElementById(id).value;
  //.value added to get the value added in input
}







