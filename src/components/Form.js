import React from "react"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Form = ({headline, copy}) => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return(
    <div className="form">
        <h1>{headline}</h1>
        <p className="intro-text">
            {copy}
        </p>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} action="/thanks/">
            <input type="text" placeholder="Name" onChange={handleChange }/>
            <input type="email" placeholder="Email" onChange={handleChange} />
            <input type="tel" placeholder="Phone" onChange={handleChange} />
            <input type="text" placeholder="Production Name" onChange={handleChange} />
            <textarea placeholder="Message" onChange={handleChange} />
            <button type="submit" className="btn red">Send</button>
        </form>
    </div>
  )
}

export default Form