document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // STUDENT
  if (email === "student@clubzone.com" && password === "student123") {
    window.location.href = "dashboard-student.html";
  }

  // OFFICER
  else if (email === "officer@clubzone.com" && password === "officer123") {
    window.location.href = "dashboard-officer.html";
  }

  // ADVISER
  else if (email === "adviser@clubzone.com" && password === "adviser123") {
    window.location.href = "dashboard-adviser.html";
  }

  // INVALID LOGIN
  else {
    alert("Invalid email or password");
  }
});
