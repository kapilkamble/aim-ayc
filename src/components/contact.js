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
            {/* <label>
                Subject
                <input type="text" name="subject" id="subject" />
            </label> */}
            <br/>
            <label>
                Need Type
          <select>
            <option value="VISA">VISA and related questions</option>
            <option value="Job">Job and career related queries</option>
            <option value="Property">Property and related queries</option>
            <option value="Business">Financial/Business Opportunities</option>
            <option value="Others">Social needs</option>
          </select>
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
