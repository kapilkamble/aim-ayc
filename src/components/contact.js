import React from "react"
import "./layout.css"

const Contact = () => {
    return(
            
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <label>
                Name 
                <input type="text" name="name" id="name" />
            </label>
            <br/>
            <label>
                Email 
                <input type="email" name="email" id="email" />
            </label>
            <label>
                Subject
                <input type="text" name="subject" id="subject" />
            </label>
            <label>
                Message <br/>
                <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit">Send</button>
            {/* <input type="reset" value="Clear" /> */}
            </form>
            
    )
}

export default Contact
