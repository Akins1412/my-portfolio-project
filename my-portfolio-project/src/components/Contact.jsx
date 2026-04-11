import React from "react";

function Contact() {
  return (
    <div>
      <section className="contact">
        <fieldset>
          <div>
            <h1>From The Blog</h1>
          </div>

          <form action="">
            <div class="field">
              <input
                type="text"
                placeholder="John Doe"
                maxlength="30"
                required
              />
              <br />
            </div>

            <div className="field">
              <input type="email" placeholder="johndoe@email.com" required />
              <br />
            </div>

            <div className="">
              <textarea
                rows="6px"
                cols="31px"
                placeholder="Please leave a message..."
                ov
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </fieldset>

        <fieldset class="join">
          <div className="contact-info">
            <h1>Get In Touch</h1>
            <br />

            <h3>Contact Me</h3>
            <br />

            <p>
              Feel free to reach out for any web development or design
              inquiries.
            </p>
            <br />

            <hr />
            <ul>
              {/* <!-- <li>emmanuelakins@gmail.com</li>
            <li>(+233)552617018</li> --> */}
            </ul>
          </div>

          <form action="">
            <div className="field">
              <input
                type="text"
                placeholder="John Doe"
                maxlength="30"
                required
              />
              <br />
            </div>

            <div className="field">
              <input type="email" placeholder="johndoe@email.com" required />
              <br />
            </div>

            <div className="">
              <textarea
                rows="6px"
                cols="31px"
                placeholder="Please leave a message..."
                ov
              ></textarea>
            </div>

            <button type="submit" className="btn-11">
              Submit
            </button>
          </form>
        </fieldset>
      </section>
      <br />

      <hr />
    </div>
  );
}

export default Contact;
