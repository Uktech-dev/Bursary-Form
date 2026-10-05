const bursaryForm = document.getElementById("bursaryForm");
const submitButton = document.getElementById("submitButton");
const adOnSubmit = document.getElementById("adOnSubmit");
const countdown = document.getElementById("countdown");
const shareButton = document.getElementById("shareButton");


// YOUR AD LINK
const adLink =
  "https://repeattelegraph.com/dsc91s50?key=c19c0351ec53c34ed2ea912bd7144df6";


// When Submit is clicked
bursaryForm.addEventListener("submit", function (event) {

  // Stop normal submission for now
  event.preventDefault();

  // Check that all required fields are completed
  if (!bursaryForm.checkValidity()) {
    bursaryForm.reportValidity();
    return;
  }

  // Prevent multiple clicks
  submitButton.disabled = true;

  // Open the advertisement
  window.open(adLink, "_blank");

  // Show popup
  adOnSubmit.classList.add("show");

  // Start from 10 seconds
  let seconds = 10;

  countdown.textContent = seconds;

  const timer = setInterval(function () {

    seconds--;

    countdown.textContent = seconds;

    if (seconds <= 0) {

      clearInterval(timer);

      submitApplication();

    }

  }, 1000);

});


// Submit the application after 10 seconds
function submitApplication() {

  adOnSubmit.classList.remove("show");

  /*
    IMPORTANT:

    Put your REAL form submission code here.

    The code below is only an example.

    If your current website already has code that sends
    the application somewhere, that code should replace
    the alert below.
  */

  alert("Application submitted successfully!");

  // Reset the form
  bursaryForm.reset();

  // Enable Submit again
  submitButton.disabled = false;
}

shareButton.addEventListener("click", function () {

  const websiteLink = "https://uktech-dev.github.io/Bursary-Form/";

  const message =
    "Students Bursary Form 2026\n\n" +
    "Apply for student support here:\n" +
    websiteLink;

  const whatsappURL =
    "https://wa.me/?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
});
