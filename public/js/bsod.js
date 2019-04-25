
// variables
let resetCounter = 0;
let booting;
let booted;
let bsod;
let isBSODing = true;
let isBroken = false;
// event listener for power button click
$("#power__btn").on("click", function () {
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
// triggers the BSOD
function startBSOD(interval) {
  if (!isBroken) {
    bsod = setTimeout(() => {
      $("#aioImage").removeClass("animated");
      $("#aioImage").attr("src", "images/bsod.jpg");

    }, interval);
  }
}
startBSOD(5000);
// function to handle turning the AIO on
function turnOnAio() {
  $("#aioOverlay").show();
  if (!isBroken) {
    $("#aioImage").attr("src", "images/windows10.jpg");
  }
  $("#aioImage").removeClass("hidden");
  $("#aioImage").removeClass("animated");
  if (resetCounter === 3) {
    isBSODing = false;
    clearTimeout(bsod);
    resetCounter++;
    activateCheats();
    $("#dellLogo").hide();
    $("#aioOverlay").hide();
  } else {
    booting = setTimeout(() => {
      if (!isBroken) {
        $("#dellLogo").show();
      }
      resetCounter++;
      booted = setTimeout(() => {
        resetCounter = 0;
        $("#dellLogo").hide();
        $("#aioOverlay").hide();
        if (isBSODing) {
          let itsNotFixed = (min, max) => Math.random() * (max - min) + min;
          startBSOD(itsNotFixed(1000, 5000));
        }
      }, 3000)
    }, 1500)
  }
}
// function to handle turning the AIO off
function turnOffAio() {
  clearTimeout(booting);
  clearTimeout(booted);
  $("#aioImage").toggleClass("hidden")
  $("#aioOverlay").hide();
  $("#dellLogo").hide();
}
// function to handle quadruple click on monitor
$("#aioImage").on("click", e => {
  if (e.detail === 4) {
    if ($("#aioImage").attr("src") !== "images/broken.jpg") {
      clearTimeout(bsod);
      $("#aioImage").attr("src", "images/broken.jpg");
      isBroken = true;
    }
  }
})
// init BSOD
$("#dellLogo").hide();
$("#laptop-2").draggable({ axis: "x" });