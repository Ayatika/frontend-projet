
document.addEventListener("DOMContentLoaded", function() {
    const calendarDates = document.querySelectorAll('.calendar-dates div');
    
    calendarDates.forEach(date => {
      date.addEventListener('click', function() {
        calendarDates.forEach(d => d.classList.remove('active-date'));
        this.classList.add('active-date');
      });
    });
  });
  
document.addEventListener('DOMContentLoaded', function() {
    const calendarDates = document.getElementById('calendarDates');

    // Add click event listener to calendar dates
    calendarDates.addEventListener('click', function(event) {
        if (event.target.tagName === 'DIV') {
            // Remove active class from all dates
            const dates = calendarDates.getElementsByClassName('active-date');
            for (let date of dates) {
                date.classList.remove('active-date');
            }

            // Add active class to the clicked date
            event.target.classList.add('active-date');
        }
    });

    // Export Data button click event
    document.getElementById('exportDataButton').addEventListener('click', function() {
        alert('Export Data functionality not implemented yet.');
    });
});
