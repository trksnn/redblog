// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyChbxC6Jr82K9dIFZafEwY-UWxF6aXYokE",
    authDomain: "redblov-95b2d.firebaseapp.com",
    databaseURL: "https://redblov-95b2d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "redblov-95b2d",
    storageBucket: "redblov-95b2d.appspot.com",
    messagingSenderId: "851805739199",
    appId: "1:851805739199:web:ebfbb8f7e36303fd8a8e0a",
    measurementId: "G-PYYWFY9260"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var database = firebase.database();
  

// BURADAN ASAGISI DEGISECEK

  function updateStarCount(sec) {
    $("#contents").html(sec);
  }

  //<div class="container p-3 my-3 bg-dark text-white contentDiv">
      
  //<hr style="background-color: white; size: 2px;">
  
//</hr></div>  

/*
    <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">World</strong>
            <h3 class="mb-0">Featured post</h3>
            <div class="mb-1 text-muted">Nov 12</div>
            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="stretched-link">Continue reading</a> !!!!
          </div>
          <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
  
          </div>
        </div>
      </div>
*/


  var starCountRef = firebase.database().ref().child("Yazilar");
  $("#contents").empty();
starCountRef.on('value', (snapshot) =>{
    var data = "";
    snapshot.forEach(function(childSnap) {
    var valsa = childSnap.val();

    data += "<div class=\"col-md-6\">";
    data += "<div class=\"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative\">";
    data += "<div class=\"col p-4 d-flex flex-column position-static\">";
    data += "<strong class=\"d-inline-block mb-2 text-primary\">" + valsa.Yazar + "</strong>";
    data += "<h3 class=\"mb-0\">" + valsa.Baslık + "</h3>";
    data += "<div class=\"mb-1 text-muted\">" + valsa.Tarih + "</div>";
    data += "<p class=\"card-text mb-auto\">" + valsa.Desc + "</p>";
    data += "<a href=\"Content.html\" class=\"stretched-link\">Continue reading</a>";
    data += "</div>";
    data += "<div class=\"col-auto d-none d-lg-block\">";
    data += "<svg class=\"bd-placeholder-img\" width=\"200\" height=\"250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Placeholder: Thumbnail\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"><title>Placeholder</title><rect width=\"100%\" height=\"100%\" fill=\"#55595c\"/><text x=\"50%\" y=\"50%\" fill=\"#eceeef\" dy=\".3em\">Thumbnail</text></svg>";
    data += "</div>";
    data += "</div>";
    data += "</div>";

});
updateStarCount(data);
});
