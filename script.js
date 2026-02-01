const studentBtn = document.getElementById("studentBtn");
const wardenBtn = document.getElementById("wardenBtn");
const roleInput = document.getElementById("role");

studentBtn.addEventListener("click", () => {
    studentBtn.classList.add("active");
    wardenBtn.classList.remove("active");
    roleInput.value = "student";
});

wardenBtn.addEventListener("click", () => {
    wardenBtn.classList.add("active");
    studentBtn.classList.remove("active");
    roleInput.value = "warden";
});