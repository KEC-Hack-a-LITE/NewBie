
document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var eventName = document.getElementById('event-name').value;
    var eventDate = document.getElementById('event-date').value;
    var eventRequirements = document.getElementById('event-requirements').value;
    
    document.getElementById('eventForm').reset(); 
    document.getElementById('confirmationMessage').style.display = 'block'; 
    setTimeout(function() {
        document.getElementById('confirmationMessage').style.display = 'none'; 
    }, 3000);

    
    var taskList = document.getElementById('taskList');
    var taskItem = document.createElement('li');
    taskItem.textContent = eventName + " on " + eventDate;
    taskList.appendChild(taskItem);
});