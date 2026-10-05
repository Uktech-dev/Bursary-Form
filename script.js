function shareSite() {
  var text = "I found this Student Support Fund that helps students weekly. Check it out: " + window.location.href;
  var url = "https://wa.me/?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
}

document.getElementById("bursaryForm").addEventListener("submit", function(e) {
  e.preventDefault();

  var account = document.getElementById("accountNumber").value.trim();
  var fullName = document.getElementById("fullName").value.trim();

  // Validate 10 digits account number
  if (account.length !== 10 || isNaN(account)) {
    alert("Please enter a valid 10-digit account number");
    return;
  }

  if (fullName.length < 3) {
    alert("Please enter your full name correctly");
    return;
  }

  // Success
  alert("✅ Thank you " + fullName + "! Your application has been submitted successfully. We will contact you via email if selected.");

  // Clear form
  this.reset();
});