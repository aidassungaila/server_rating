function openSlideMenu() {
  if (screen.width < 720) {
    document.getElementById("closemenu").style.width = "250px";
    document.getElementById("content").style.marginRight = "250px";
  } else {
    document.getElementById("closemenu").style.width = "100%";
    document.getElementById("content").style.marginRight = "100%";
  }
}

function closeSlideMenu() {
  if (screen.width < 720) {
    document.getElementById("closemenu").style.width = "0";
    document.getElementById("content").style.marginRight = "0";
  } else {
    document.getElementById("closemenu").style.width = "0";
    document.getElementById("content").style.marginRight = "0";
  }
}

function onload() {
  if (screen.width < 720) {
    document.getElementById("closemenu").style.width = "0";
    document.getElementById("content").style.marginRight = "0";
  }
}
