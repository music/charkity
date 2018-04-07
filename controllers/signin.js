/**
 * GET /
 */

var firebase = require('firebase')
exports.index = function(req, res) {
  res.render('signin', {
    title: 'Signin'
  });
};

var config = {
  apiKey: "AIzaSyCXak386757EoosAb2vII2svD9hnUyasUs",
  authDomain: "charkity-2db46.firebaseapp.com",
  databaseURL: "https://charkity-2db46.firebaseio.com",
  projectId: "charkity-2db46",
  storageBucket: "charkity-2db46.appspot.com",
  messagingSenderId: "88663340604"
};
firebase.initializeApp(config);