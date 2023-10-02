emailjs.init("i5nUe-xMEKGy8xW_Z");

function sendEmail(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const phone = document.getElementById("phone").value; // Add this line

  emailjs
    .send("service_fkqq6go", "template_hna0196", {
      name: name,
      email: email,
      age: age,
      subject: subject,
      message: message,
      phone: phone, // Add this line
    })
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        window.location.href = "succes.html"; // Redirect to the success page
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
}