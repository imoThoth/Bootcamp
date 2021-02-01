function goDark() {
    var body = document.getElementsByTagName("body")[0];
    if (body.className == "") {
      body.className = "dark";
    }
    else {
      body.className = "";
    }
    
  }

  function revealMe(){
      var reveal = document.getElementById("partOne")
      if(reveal.style.display = "none"){
            reveal.style.display ="block";
      }
  }

  function showMe(){
    var ShowMe = document.getElementById("partTwo")
    if(ShowMe.style.display = "none"){
          ShowMe.style.display ="block";
    }
}  