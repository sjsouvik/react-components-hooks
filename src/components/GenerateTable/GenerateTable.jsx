import { useState } from "react";
import { Table } from "./Table";

import "./GenerateTable.css";

/*

Generate a table of numbers given the rows and columns.

The user enters the number of rows and columns in a form.
When the form is submitted, a table with the respective number of rows and columns will be generated.
The table contains rows x columns cells, each containing a number sequence from 1 to (rows x columns).

*/

/*

Learning:

Since the table should only be created when the "Submit" button is pressed, an uncontrolled form works 
better here. Otherwise we will need two different state values (one for the form, one for the rendered table) 
for rows/columns (four in total!).

By using `<input type="number" min={1}>`, we ensure only numbers can be entered and leverage HTML validation 
so that the minimum value of the fields is 1. That way we don't have to write our own validation.

We can listen for the form submit event, obtain the FormData from it and retrieve the rows and columns value 
from the form.

Accessibility:

Add `<label>`s for the <input>s and link them together using `< label for="...">` and `<input id="...">`.

*/

export const GenerateTable = () => {
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    setRows(formData.get("rows"));
    setColumns(formData.get("columns"));
  };

  return (
    <>
      <h2>Generate table</h2>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="row-input">Rows</label>
          <input
            type="number"
            id="row-input"
            className="ml-1"
            name="rows"
            min="1"
          />
        </div>
        <div>
          <label htmlFor="col-input">Columns</label>
          <input
            type="number"
            id="col-input"
            className="ml-1"
            name="columns"
            min="1"
          />
        </div>
        <button>Submit</button>
      </form>
      {Boolean(rows) && Boolean(columns) && (
        <Table rows={rows} columns={columns} />
      )}
    </>
  );
};
