const firebaseConfig = {
apiKey: "AIzaSyCyqT7G9h2vK0rkeVaNS-F9bJuGABEV5Jw",
      authDomain: "lit-like-fire.firebaseapp.com",
      databaseURL: "https://lit-like-fire-default-rtdb.firebaseio.com",
      projectId: "lit-like-fire",
      storageBucket: "lit-like-fire.appspot.com",
      messagingSenderId: "115139601999",
      appId: "1:115139601999:web:f91b9258805177a3db2c3a",
      measurementId: "G-Y080Y8NDLD"
    };
    const app = initializeApp(firebaseConfig);

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;

     });});}
getData();
