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

firebase.initializeApp(firebaseConfig);
firebase.analytics();

  var database = firebase.database();
  

// BURADAN ASAGISI DEGISECEK

  function updateStarCount(data) {
    $("#mainTitle").html(data);
  }


  //<div class="container p-3 my-3 bg-dark text-white contentDiv">
      
  //<hr style="background-color: white; size: 2px;">
  
//</hr></div>  


    //<h1 class="display-4 fst-italic" id="mainTitle">Title of a longer featured blog post</h1>
    //<p class="lead my-3" id="mainDesc">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
    //<p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>

    $("#mainTitle").empty();

  var titleInfo = firebase.database().ref('mainTitle');

titleInfo.on('value', (snapshot) => {

  const valsa = snapshot.val();
  var data = "";
    console.log(valsa);

    data += "<h1 class=\"display-4 fst-italic\">" + valsa.Baslik + "</h1>";
    data += "<p class=\"lead my-3\">" + valsa.Decs + "</p>";
    data += "<p class=\"lead mb-0\"><a href=\"#\" class=\"text-white fw-bold\">Continue reading...</a></p>";
  updateStarCount(data);
});



// buradan asagisi yazar sezleri icin

function updateFinal(sec) {
  $("#contents").html(sec);
}


var starCountRef = firebase.database().ref().child("sonYazilar");
$("#contents").empty();
starCountRef.on('value', (snapshot) =>{
  var data = "";
  snapshot.forEach(function(childSnap) {
  var valsa = childSnap.val();

  data += "<div class=\"col-md-6\">";
  data += "<div class=\"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative\">";
  data += "<div class=\"col p-4 d-flex flex-column position-static\">";
  data += "<strong class=\"d-inline-block mb-2 text-primary\">" + valsa.Yazar + "</strong>";
  data += "<h3 class=\"mb-0\">" + valsa.Baslik + "</h3>";
  data += "<div class=\"mb-1 text-muted\">" + valsa.Tarih + "</div>";
  data += "<p class=\"card-text mb-auto\">" + valsa.Decs + "</p>";
  data += "<a href=\"Content.html\" class=\"stretched-link\">Continue reading</a>";
  data += "</div>";
  data += "<div class=\"col-auto d-none d-lg-block\">";
  data += "<svg class=\"bd-placeholder-img\" width=\"200\" height=\"250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Placeholder: Thumbnail\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"><title>Placeholder</title><rect width=\"100%\" height=\"100%\" fill=\"#55595c\"/><text x=\"50%\" y=\"50%\" fill=\"#eceeef\" dy=\".3em\">Thumbnail</text></svg>";
  data += "</div>";
  data += "</div>";
  data += "</div>";

});
updateFinal(data);
});