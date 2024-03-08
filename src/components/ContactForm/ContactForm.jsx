import submitForm, { SUBMIT_URL } from "./utils";
import "./ContactForm.css";

/*

Building forms is a common task in Front End. In this exercise, we will build a basic "Contact Us" form, 
commonly seen on marketing websites for visitors to ask questions or provide feedback.

Requirements:

- The form should contain the following elements:
    - Name field.
    - Email field.
    - Message field. Since the message can be long, a <textarea> will be more suitable.
    - Submit button
        - Contains the text "Send".
        - Clicking on the submit button submits the form.
- The form and submission should be implemented entirely in HTML. Do not use any JavaScript or 
framework-specific features for this question.
- There is no need to do any client-side validation on the fields. Validation will be done on the server side.

Submission API:

Upon submission, POST the form data to https://www.greatfrontend.com/api/questions/contact-form with the following fields in the request body: name, email, message.

If all the form fields are correctly filled up, you will see an alert containing a success message. Congratulations!

*/

/*

Learning: 

By solving this problem, we can learn how we can leverage `FormData` API to retrieve form inputs without 
querying each and every form element or, using any state and make a form submission finally.


To tell the `<form>` which URL to submit the data to, we use the `action` attribute with the API URL as the value. 
The API URL is expecting a HTTP POST request, hence we also use `method="post"` on the `<form>`.

Form fields with the `name` attribute will have the attribute value become the key in the form data. 
Hence we can add `name="name"`, `name="email"`, `name="message"` to the various form fields. 
Do also add <label>s to label your <input>s.

Lastly, submit buttons can be implemented in two ways:

- `<button type="submit">`: By default, <button>s have type="submit" as default and when used in <form>s, 
will trigger a form submission.

- `<input type="submit">`: The element will be rendered as a button and clicking the <input> will trigger a 
form submission.


Accessibility:

- Link `<label>`s to <input> so that clicking on the `<label>` will focus on the corresponding <input>.
    - Use `<label for="some-id">` and `<input id="some-id">` to define the relation between <label> and <input>.
    - Avoid nesting `<input>` inside of `<label>` because some assistive 
    technologies (e.g. Dragon NaturallySpeaking) do not support it.

*/
export const ContactForm = () => {
  return (
    <>
      <h2>Contact Us</h2>
      <form onSubmit={submitForm} method="post" action={SUBMIT_URL}>
        <div>
          <label htmlFor="name-input">Name</label>
          <input
            type="text"
            id="name-input"
            name="name"
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            id="email-input"
            name="email"
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="message-input">Message</label>
          <textarea
            id="message-input"
            name="message"
            className="form-input"
          ></textarea>
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};
