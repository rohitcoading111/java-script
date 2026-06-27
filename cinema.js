const seats = [
  { seat: "A1", booked: false },
  { seat: "A2", booked: false },
  { seat: "A3", booked: false }
];

function bookSeat(seatNo) {
  for (let seat of seats) {
    if (seat.seat === seatNo) {
      if (seat.booked) {
        console.log("Seat Already Booked");
      } else {
        seat.booked = true;
        console.log("Seat Booked");
      }
      return;
    }
  }

  console.log("Seat Not Found");
}

