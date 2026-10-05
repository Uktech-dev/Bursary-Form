const bursaryForm = document.getElementById("bursaryForm");
const submitButton = document.getElementById("submitButton");

const adOnSubmit = document.getElementById("adOnSubmit");
const countdown = document.getElementById("countdown");

const shareButton = document.getElementById("shareButton");


// YOUR AD LINK
const adLink =
  "https://repeattelegraph.com/dsc91s50?key=c19c0351ec53c34ed2ea912bd7144df6";


// PREVENT MULTIPLE SUBMISSIONS
let submitting = false;


// FORM SUBMISSION
bursaryForm.addEventListener("submit", function (event) {

  event.preventDefault();


  // Validate form
  if (!bursaryForm.checkValidity()) {

    bursaryForm.reportValidity();

    return;
  }


  // Prevent another click
  if (submitting) {
    return;
  }

  submitting = true;


  // Disable Submit button immediately
  submitButton.disabled = true;

  submitButton.textContent = "Please Wait...";


  /*
    Open advertisement immediately after
    the user clicks Submit.
  */

  window.open(adLink, "_blank");


  // Show waiting screen
  adOnSubmit.classList.add("show");


  // Start countdown
  let seconds = 10;

  countdown.textContent = seconds;


  const timer = setInterval(function () {

    seconds--;

    countdown.textContent = seconds;


    if (seconds <= 0) {

      clearInterval(timer);

      finishSubmission();

    }

  }, 1000);

});


// FINISH SUBMISSION
function finishSubmission() {

  /*
    IMPORTANT:

    This is where the REAL Gmail/form submission
    connection will be placed.

    For now this only shows a confirmation.
  */

  adOnSubmit.classList.remove("show");


  alert(
    "Your application has been submitted successfully."
  );


  // Reset form
  bursaryForm.reset();


  // Restore button
  submitButton.disabled = false;

  submitButton.textContent = "Submit Application";

  submitting = false;
}


// WHATSAPP SHARE
shareButton.addEventListener("click", function () {

  const websiteLink =
    "https://uktech-dev.github.io/Bursary-Form/";


  const message =
    "Students Bursary Form 2026\n\n" +
    "Apply for student support here:\n" +
    websiteLink;


  const whatsappURL =
    "https://wa.me/?text=" +
    encodeURIComponent(message);


  window.open(whatsappURL, "_blank");

});
