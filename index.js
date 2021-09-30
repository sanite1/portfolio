

var skill = document.querySelectorAll(".skill-card");


for (var i = 0; i < skill.length; i++) {
  skill[i].addEventListener("mouseenter", function(evt) {
    var original = skill[i].getInnerHTML();

    alert(original);
  });


}


(function (){
  var elements;
  var windowHeight;

  function init() {
    elements =  document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++ ) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add("fade-in-element");
        element.classList.remove("hidden");
      }
      else {
        element.classList.add("hidden");
        element.classList.remove("fade-in-element");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();
