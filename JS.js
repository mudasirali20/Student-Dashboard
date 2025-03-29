document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-btn");
    const body = document.body;
    const icon = toggleBtn.querySelector("i");

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        icon.classList.replace("fa-sun", "fa-moon");
    }

    toggleBtn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            icon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("darkMode", "enabled");
        } else {
            icon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});



const uploadBtn = document.getElementById("upload-btn");
const uploadInput = document.getElementById("upload");
const profilePic = document.getElementById("profile-pic");

uploadBtn.addEventListener("click", function () {
    uploadInput.click();
});

uploadInput.addEventListener("change", function () {
    const file = uploadInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePic.src = e.target.result;
            localStorage.setItem("profileImage", e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

window.addEventListener("load", function () {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
        profilePic.src = savedImage;
    }
});

document.querySelectorAll(".progress-bar").forEach(bar => {
    bar.style.width = bar.dataset.progress + "%";
});

document.getElementById("set-reminder").addEventListener("click", function () {
    let reminderTime = prompt("Enter reminder time in minutes:");

    if (reminderTime && !isNaN(reminderTime)) {
        let timeInMs = parseInt(reminderTime) * 60000;

        alert("Reminder set for " + reminderTime + " minutes.");

        setTimeout(function () {
            new Notification("Study Reminder", {
                body: "Time to study!",
            });
        }, timeInMs);
    } else {
        alert("Invalid input! Please enter a number.");
    }
});

// Request notification permission
if (Notification.permission !== "granted") {
    Notification.requestPermission();
}


// Sidebar Functionality
sidebarLinks.forEach(link => {
    link.addEventListener("click", function () {
        sections.forEach(section => {
            section.style.display = "none";
        });
        document.getElementById(this.dataset.target).style.display = "block";
    });
});
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("profile-pic").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
window.onload = function () {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
        document.getElementById("profile-pic").src = savedImage;
    }
}