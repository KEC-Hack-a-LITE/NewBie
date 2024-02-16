        document.addEventListener("DOMContentLoaded", function() {
            
            function handleFormSubmit(event) {
                event.preventDefault(); 
                var formData = new FormData(document.getElementById("volunteerForm"));
                
                alert("Registration successful! You will be notified soon.");
            }
            document.getElementById("volunteerForm").addEventListener("submit", handleFormSubmit);
        });
    