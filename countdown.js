 // Set the target date and time (YYYY, MM-1, DD, HH, mm, ss)
 const targetDate = new Date(2023, 8, 15, 12, 0, 0); // September is 8 (0-based index)

 function updateCountdown() {
     const currentDate = new Date();
     const timeRemaining = targetDate - currentDate;

     if (timeRemaining <= 0) {
         document.getElementById("countdown").innerHTML = "Countdown expired!";
     } else {
         const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

         const countdownStr = `${days}d ${hours}h ${minutes}m ${seconds}s`;
         document.getElementById("countdown").innerHTML = countdownStr;
     }
 }

 // Update the countdown every second
 setInterval(updateCountdown, 1000);

 // Initial call to set the initial countdown
 updateCountdown();