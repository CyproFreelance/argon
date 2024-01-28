emailjs.init("xU3wDjBmg9UKzqvrR");

function sendEmail() {
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    discord: document.getElementById("discord").value,
    order: document.getElementById("order").value,
    message: document.getElementById("message").value,
  };

  // Send the email using Email.js
  emailjs.send("service_d39qrg7", "template_mpjx6io", formData)
    .then(function(response) {
      console.log("Email sent successfully:", response);
      document.getElementById("status").innerHTML = "Message Sent";
      document.getElementById("status").style.color = "green";
      
      // Clear form fields after successful email sending
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("discord").value = "";
      document.getElementById("order").value = "";
      document.getElementById("message").value = "";
    }, function(error) {
      console.log("Error sending email:", error);
      document.getElementById("status").innerHTML = "Oops! Something went wrong. Please try again later.";
      document.getElementById("status").style.color = "red";
    });
}


function toggleAnswer(index) {
  const answer = document.getElementById(`answer${index}`);
  const question = document.getElementById(`question${index}`);
  const plusMinusIcon = document.getElementById(`icon${index}`);

  if (answer.style.display === 'block') {
    answer.style.display = 'none';
    plusMinusIcon.style.transform = 'rotate(0deg)';
  } else {
    answer.style.display = 'block';
    plusMinusIcon.style.transform = 'rotate(45deg)';
  }
}


function showMobileWarning() {
  // Check if the viewport width is less than 1000
  if (window.innerWidth < 1000) {
    // Display the modal
    document.getElementById("myModal").style.display = "flex";
  }
}

// Close the modal when the user clicks the OK button
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Call the function when the website is launched
window.onload = showMobileWarning;