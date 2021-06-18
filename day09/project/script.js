let bookedSeatsElement= document.querySelector('.booking_seats');
let remainingSeatsElement = document.querySelector('.remaining_seats');
let seats= document.querySelectorAll('.seats');

let bookSeats =0;
let remainingSeats = seats.length;

bookedSeatsElement.innerText = bookedSeats;
remainingSeatsElement.innerText = remainingSeats;
 seats.forEach((seat)=> {
    seat.addEventListener('click',() => {
        seat.classList.add('booked');
        seat.classList.toggle("booked");
        seat.classList.contains('booked')? bookedSeats(1) : unbookseats(-1);
    });
 });

 const bookSeats = (s) => {
    bookedSeats +=1*s;
    remainingSeats -=1*s;

    bookedSeatsElement.innerText = bookedSeats;
    remainingSeatsElement.innerText = remainingSeats;
 }