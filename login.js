var userCreated = 0; 
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

function createUser(){
  firebase.auth().createUserWithEmailAndPassword(document.getElementById('newEmail').value, document.getElementById('newPassword').value).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if(errorCode){
      alert(errorMessage);
    }
  });
  userCreated = 1;
}

function loginUser(){
  firebase.auth().signInWithEmailAndPassword(document.getElementById('newEmail').value, document.getElementById('newPassword').value).then(function(user){
    window.location = "index.html";
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode) {
      alert(errorMessage);
    }
  });
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    if (userCreated == 1) {
      var seed = bip39.generateMnemonic();
      var keys = arkJS.crypto.getKeys(seed);
      var address = arkJS.crypto.getAddress(keys.publicKey, 0x1E);

      firebase.database().ref('users/' + user.uid).set({
        seed: seed,
        address: address,
        publicKey : keys.publicKey
      }, function(error){
        if(error){
          console.log(error);
        }
        else{
          window.location = "index.html";
        }
      });
    }
  }
});
