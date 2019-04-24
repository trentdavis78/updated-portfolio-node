
  let resetCounter = 0;
  let booting;
  let booted;
  let bsod;
  let isBSODing = true;
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
  function startBSOD(interval) {
    bsod = setTimeout(() => {
      $("#aioImage").removeClass("animated");
      $("#aioImage").attr("src", "images/bsod.jpg");
      
    },interval)
  }
  startBSOD(10000);
  function turnOnAio() { 
    $("#aioOverlay").show();
    $("#aioImage").attr("src", "images/windows10.jpg");
    $("#aioImage").removeClass("hidden");  
    $("#aioImage").removeClass("animated");
    if(resetCounter === 3) {
      isBSODing = false;
      clearTimeout(bsod);
      resetCounter++;
      activateCheats();
      $("#dellLogo").hide();
      $("#aioOverlay").hide();
    } else {
      booting = setTimeout(() => {
        $("#dellLogo").show();
        resetCounter++;
        console.log(resetCounter);
        booted = setTimeout(() => {
            resetCounter = 0;
            console.log(resetCounter);
            $("#dellLogo").hide();
            $("#aioOverlay").hide();     
            if(isBSODing) {
              let itsNotFixed = (min, max) => Math.random() * (max - min) + min;
              startBSOD(itsNotFixed(1000, 5000));
            } 
          }, 2000)
      }, 1500)
    }    
  }
  function turnOffAio() {
    clearTimeout(booting);
    clearTimeout(booted);
    $("#aioImage").toggleClass("hidden")
    $("#aioOverlay").hide();
    $("#dellLogo").hide();    
  }
   $("#dellLogo").hide();
   $("#laptop-2").draggable({ axis: "x" });