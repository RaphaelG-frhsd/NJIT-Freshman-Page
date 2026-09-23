
const studentButton = document.getElementById("student-button");
const studentMessage = document.getElementById("student-message");

if (studentButton && studentMessage) {

    studentButton.addEventListener("click", function () {

        
        if (studentMessage.style.display === "block") {

            // Hides message
            studentMessage.style.display = "none";

            // Changes button text
            studentButton.textContent = "Learn More";

        } else {

            // Shows message
            studentMessage.style.display = "block";

            // Changes button text
            studentButton.textContent = "Hide Information";

        }

    });

}