function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Function to check if the user has scrolled to the bottom
function isAtBottom() {
  return (
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
  );
}

// Function to toggle the visibility of the bottom div
function toggleBottomDiv() {
  var bottomDiv = document.getElementById("bottomDiv");
  if (isAtBottom()) {
    bottomDiv.style.bottom = "0"; // Show the div
  } else {
    bottomDiv.style.bottom = "-400px"; // Hide the div
  }
}

// Event listener for scroll events
window.addEventListener("scroll", toggleBottomDiv);

// Manually trigger the visibility of bottom div on page load
window.addEventListener("load", toggleBottomDiv);














// Open the SideNav
function openNav() {
  document.getElementById("SideNav").classList.add("open");
}

// Close the SideNav
function closeNav() {
  document.getElementById("SideNav").classList.remove("open");
}

// Event listener for clicking the Nav_Profile_image
document.getElementById("Nav_Profile_image").addEventListener("click", openNav);

// Event listener for clicking the close button
document.addEventListener("click", function(event) {
  if (event.target.matches(".closebtn")) {
    closeNav();
  }
});
