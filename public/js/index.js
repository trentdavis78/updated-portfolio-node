var elem= document.querySelector('.modal');
var instance = M.Modal.init(elem);
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };  
  // the 'official' Konami Code sequence
  var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];  
  // a variable to remember the 'position' the user has reached so far.
  var konamiCodePosition = 0;  
  // add keydown event listener
  document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];  
    // compare the key with the required key
    if (key == requiredKey) {  
      // move to the next key in the konami code sequence
      konamiCodePosition++;  
      // if the last key is reached, activate cheats
      if (konamiCodePosition == konamiCode.length) {
        activateCheats();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });  
  function activateCheats() { 
    instance.open();
  }
  $(document).ready(function() {


    $(window).scroll(function(event) {
  
        $(".module").each(function(i, el) {
          var el = $(el);
          if (el.visible(true)) {
            el.addClass("come-in"); 
          } 
        });
        
      });
      $("#phoneToggle").on("click", function(){
          if($(this).attr("data-visibility") == "hidden"){
            $("#phoneNumber").text("512.938.9851");
            $(this).attr("data-visibility", "visible");
            $("#phoneToggle").text("Hide");
          } else {
            $("#phoneNumber").text("512.*******");
            $(this).attr("data-visibility", "hidden");
            $("#phoneToggle").text("Show");
          }
      });
      $("#emailToggle").on("click", function(){
        if($(this).attr("data-visibility") == "hidden"){
          $("#emailAddress").html("<a href='mailto:trentdavisinc@gmail.com'>trentdavisinc@gmail.com</a>");
          $(this).attr("data-visibility", "visible");
          $("#emailToggle").text("Hide");
        } else {
          $("#emailAddress").text("*************@gmail.com");
          $(this).attr("data-visibility", "hidden");
          $("#emailToggle").text("Show");
        }
     
    });
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  });

  let resetCounter = 0;
  let booting;
  let booted;
  $("#power__btn").on("click", function(){ 
    switch ($(this).attr("data-power")) {
      case "on":
      $("#power path").attr("fill", "#FF931E");
      $(this).attr("data-power", "off");      
      turnOffAio()
        break;
      
      case "off":
      $("#power path").attr("fill", "#ffffff");
      $(this).attr("data-power", "on");
      turnOnAio();
      break;

      default:
        break;
    }
  });

  function turnOnAio() { 
    $("#aioOverlay").show();
    if(resetCounter === 3) {
      console.log("Recovery Environment!");
    } else {
      booting = setTimeout(() => {
        $("#dellLogo").show();
        resetCounter++;
        console.log(resetCounter);
        booted = setTimeout(() => {
            resetCounter = 0;
            console.log(resetCounter);
            $("#dellLogo").hide();
            $("#aioOverlay").css({
              backgroundImage: "url(../../../images/windows10.jpg)",
              backgroundSize: "cover"
            });
            
          }, 2000)
      }, 1500)
    }    
  }

  function turnOffAio() {
    clearTimeout(booting);
    clearTimeout(booted);
    $("#aioOverlay").hide();
    $("#dellLogo").hide();
    $("#aioOverlay").css({
            backgroundImage: "none",
            backgroundSize: "none"
          });
  }

 
   $("#dellLogo").hide();
