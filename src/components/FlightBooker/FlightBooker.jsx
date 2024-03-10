import { useState } from "react";
import { TODAY } from "./utils";
import "./FlightBooker.css";

/*

Build a component that books a one-way or return flight for specified dates.

Requirements:

- The user can choose from two flight options: "One-way flight" and "Return flight".
- Input date fields
    - The date input fields represent the departure date and return dates.
    - The return date input is displayed if the "Return flight" option is chosen, hidden otherwise.
- Form validation should be done upon submission for invalid fields:
    - Dates are in the past.
    - Return date is before the departure date.
- Upon successful submission, a message is displayed informing the user of the selection:
    - One-way flight: "You have booked a one-way flight on YYYY-MM-DD"
    - Return-flight "You have booked a return flight, departing on YYYY-MM-DD and returning on YYYY-MM-DD"

*/

/*

Learning:

We can use <input type="date"> to render native date pickers, which has over 96% browser support globally 
at this time of writing. Native date pickers also come with the `min` attributes, which we can use for 
ensuring that only valid dates are chosen.

The input fields and buttons are also wrapped in a `<form>` so that we can leverage native form submission 
and validation. Submission can be trigged by clicking the "Book" button or hitting Enter on any of the 
form fields. The browser will first validate the inputs and trigger the submit event if the fields are valid.

The formatDate function converts a JavaScript Date object into a `YYYY-MM-DD` string which is 
the format expected by `<input type="date">`.

Using a controlled form is more convenient here as having state for the date values allows us to specify 
the current departure date as the min of the return date field and leverage the browser's form 
validation during submission. Otherwise, we'll have to write custom validation logic in the submission handler.


Accessibility:

- Since the `<input>` fields don't have visible labels, `aria-label`s can be used to label 
the fields for screen readers.
- Wrapping the fields in a `<form>` enables default form submission behavior.

*/

export const FlightBooker = () => {
  const [selectedFlightOption, setSelectedFlightOption] = useState("one-way");
  const [departureDate, setDepartureDate] = useState(TODAY);
  const [returnDate, setReturnDate] = useState(TODAY);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (selectedFlightOption === "one-way") {
      alert(
        `You have booked a ${selectedFlightOption} flight on ${departureDate}`
      );
      return;
    }

    alert(
      `You have booked a ${selectedFlightOption} flight, departing on ${departureDate} and returning on ${returnDate}`
    );
  };

  return (
    <>
      <h2>Flight booker</h2>
      <form className="flight-booker" onSubmit={formSubmitHandler}>
        <select
          value={selectedFlightOption}
          onChange={(e) => setSelectedFlightOption(e.target.value)}
        >
          <option value="one-way">One-way flight</option>
          <option value="return">Return flight</option>
        </select>

        <input
          type="date"
          name="departure-date"
          min={TODAY}
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          aria-label="select departure date"
        />

        {selectedFlightOption === "return" && (
          <input
            type="date"
            name="return-date"
            min={departureDate}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            aria-label="select return date"
          />
        )}

        <button>Book</button>
      </form>
    </>
  );
};
