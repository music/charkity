// Initialize Firebase
var config = {
  apiKey: "AIzaSyCXak386757EoosAb2vII2svD9hnUyasUs",
  authDomain: "charkity-2db46.firebaseapp.com",
  databaseURL: "https://charkity-2db46.firebaseio.com",
  projectId: "charkity-2db46",
  storageBucket: "charkity-2db46.appspot.com",
  messagingSenderId: "88663340604"
};
firebase.initializeApp(config);
var database = firebase.database();

var myAddress = "";
var mySeed = "";
var myPublicKey = "";

function setBalance() {
  arkAPI.getBalance(
    myAddress,
    function(error, success, response) {
      document.getElementById("myBalance").innerHTML = response.balance/100000000;
    }
  );
}


function signOut(){
  firebase.auth().signOut().then(function() {
  }, function(error) {
    alert('Sign Out Error', error);
  });
}


function sendTransaction() {
  if (document.getElementById("charity").value == "choose") {
    alert("You need to choose a charity!");
    return;
  }

  var seed = mySeed;
  var amount = document.getElementById("amount").value;
  var address = myAddress;
  var precision = Math.pow(10, 1);
  var final_amount = Math.ceil(amount * precision) / precision;
  var difference = (final_amount - amount).toFixed(8);
  var charity = difference * Math.pow(10, 8);

  amount = parseInt(amount * 100000000);
  // send to actual recipient
  arkAPI.sendTransaction(
    seed,
    "ignore",
    myPublicKey,
    amount,
    document.getElementById("recieve").value,
    function(error, success, response) {
      console.log(response);
  });

  // send remainder to charity
  arkAPI.sendTransaction(
    seed,
    "ignore",
    myPublicKey,
    charity,
    document.getElementById("charity").value,
    function(error, success, response) {
      if (!error) {
        // reset values
        document.getElementById("charity").selectedIndex = 0;
        document.getElementById("recieve").value = '';
        document.getElementById("amount").value = '';
      } else {
        console.log(error);
      }
  });
}


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var uid = user.uid;
    var userId = firebase.auth().currentUser.uid;
    var leadsRef = database.ref('/users/' + userId);
    leadsRef.on('value', function(snapshot) {
      myAddress = snapshot.child("address").val();
      mySeed = snapshot.child("seed").val();
      myPublicKey = snapshot.child("publicKey").val();
      document.getElementById("myAddress").innerHTML = myAddress;
      new QRCode(document.getElementById("qrcode"), myAddress);
      setBalance();
    });
  } else {
    // User is signed out.
    window.location = "login.html";
  }
});

function loginUser(){
  firebase.auth().signInWithEmailAndPassword(document.getElementById('loginEmail').value, document.getElementById('loginPassword')).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

setInterval(() => {
  setBalance();
}, 3000);