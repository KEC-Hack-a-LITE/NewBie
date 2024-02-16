function redirectTodashboard(event) {
    event.preventDefault(); // Prevent form submission
    var ageSelect = document.getElementById('age');
    var selectedAge = ageSelect.value;
    if (selectedAge === '') {
        alert("Please select your age range.");
    } else if (selectedAge === '18-30') {
        alert("Sorry, you must be at least 18 years old to login.");
    } else {
        
        window.location.href = "dashboard.php";
    }
}
