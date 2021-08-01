var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var dorothy = document.getElementById("dorothy"),
    tinman = document.getElementById("tinman"),
    scarecrow = document.getElementById("scarecrow"),
    lion = document.getElementById("lion"),
    teamquote = document.getElementById("teamquote"),
    team = document.getElementById("team");




  //dorothy's aside appears upon clicking the dorothy button. all other asides are hidden.
      dorothy.addEventListener("click",
        function() {
          dorothyside.className = "show";
          dorothygif.className = "show";
          teamside.className = "hide";
          tinside.className = "hide";
          scarecrowside.className = "hide";
          lionside.className = "hide";
          event.preventDefault();
        }, false
      );


  //tinman's aside appears upon clicking the tinman button. all other asides are hidden.
  tinman.addEventListener("click",
      function() {
        tinside.className = "show";
        tinmangif.className = "show";
        teamside.className = "hide";
        dorothyside.className = "hide";
        scarecrowside.className = "hide";
        lionside.className = "hide";
        event.preventDefault();
      }, false
    );

  //scarecrow's aside appears upon clicking the scarecrow button. all other asides are hidden.
  scarecrow.addEventListener("click",
      function() {
        scarecrowside.className = "show";
        scarecrowgif.className = "show";
        teamside.className = "hide";
        tinside.className = "hide";
        dorothyside.className = "hide";
        lionside.className = "hide";
        event.preventDefault();
      }, false
    );

  //lion's aside appears upon clicking the lion button. all other asides are hidden.
  lion.addEventListener("click",
      function() {
        lionside.className = "show";
        liongif.className = "show";
        teamside.className = "hide";
        tinside.className = "hide";
        dorothyside.className = "hide";
        scarecrowside.className = "hide";
        event.preventDefault();
      }, false
    );
