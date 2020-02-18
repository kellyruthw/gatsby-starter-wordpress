import React from "react"

const Form = ({headline, copy}) => {

  return(
    <div className="form">
        <h1>{headline}</h1>
        <p className="intro-text">
            {copy}
        </p>
        <form netlify>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <input type="text" placeholder="Production Name" />
            <textarea placeholder="Message" />
            <button type="submit" className="btn red">Send</button>
        </form>
    </div>
  )
}

export default Form