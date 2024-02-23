function hide() {
    let paragraph = document.getElementById("pText");
    let button = document.getElementById("hideButton");
    
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      button.textContent = "Hide";
    } else {
      paragraph.style.display = "none";
      button.textContent = "Show";
    }
  }