
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
document.addEventListener("DOMContentLoaded", function() {
  const logoutButton = document.getElementById('logoutButton');
  if (logoutButton) {
      logoutButton.addEventListener('click', function(event) {
          event.preventDefault();
          window.location.href = "../log/index.html";
      });
  }
  const calendarDates = document.getElementById('calendarDates');
  const calendarTitle = document.getElementById('calendarTitle');
  const prevWeekButton = document.getElementById('prevWeekButton');
  const nextWeekButton = document.getElementById('nextWeekButton');

  let currentDate = new Date();

  function getWeekStartDate(date) {
      const dayOfWeek = date.getDay();
      const startDate = new Date(date);
      const dayDifference = (dayOfWeek === 0) ? -6 : 1 - dayOfWeek; // If Sunday, go back 6 days, otherwise go back to Monday
      startDate.setDate(date.getDate() + dayDifference);
      return startDate;
  }

  function getWeekOfMonth(date) {
      const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
      const pastDaysOfMonth = date.getDate();
      return Math.ceil((pastDaysOfMonth + firstDayOfMonth.getDay()) / 7);
  }

  function formatDateTitle(date) {
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      const week = getWeekOfMonth(date);
      return `${month} ${year} - Week ${week}`;
  }

  function generateCalendar(date) {
      const startDate = getWeekStartDate(date);
      calendarTitle.textContent = formatDateTitle(startDate);

      calendarDates.innerHTML = '';

      for (let i = 0; i < 6; i++) {
          const weekDate = new Date(startDate);
          weekDate.setDate(startDate.getDate() + i);
          const isToday = (weekDate.toDateString() === new Date().toDateString());
          const dateClass = isToday ? 'today' : '';
          calendarDates.innerHTML += `<div class="${dateClass}">${weekDate.getDate()} ${weekDate.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}</div>`;
      }
  }

  prevWeekButton.addEventListener('click', function() {
      currentDate.setDate(currentDate.getDate() - 7);
      generateCalendar(currentDate);
  });

  nextWeekButton.addEventListener('click', function() {
      currentDate.setDate(currentDate.getDate() + 7);
      generateCalendar(currentDate);
  });

  generateCalendar(currentDate);

});

