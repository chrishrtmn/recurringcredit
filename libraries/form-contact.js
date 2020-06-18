import { useState } from 'react'

export default function FormContact() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'Contact - RecurringCredit',
    message: '',
  })

  const [response, setResponse] = useState({
    type: '',
    message: '',
  })

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`https://formspree.io/mjvaogwv`, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' },
      })

      const json = await res.json()

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.',
        })
      } else {
        setResponse({
          type: 'error',
          message: json.message,
        })
      }
    } catch (e) {
      console.log('An error occurred', e)
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form',
      })
    }
  }

  return (
    <>
      <form
        action='https://api.staticforms.xyz/submit'
        method='post'
        onSubmit={handleSubmit}
      >
        <label className='label'>Your Name</label>
        <input
          className='input'
          type='text'
          placeholder='Name'
          name='name'
          onChange={handleChange}
          required
        />

        <label className='label'>Your Email</label>
        <input
          className='input'
          type='email'
          placeholder='Email'
          name='email'
          onChange={handleChange}
          required
        />

        <label className='label'>Message</label>
        <textarea
          className='textarea'
          placeholder='Your Message'
          name='message'
          onChange={handleChange}
          required
        />

        <button className='button is-primary' type='submit'>
          Submit
        </button>
      </form>

      {response.type === 'success' && (
        <div className='message success'>{response.message}</div>
      )}
      {response.type === 'error' && (
        <div className='message error'>{response.message}</div>
      )}
    </>
  )
}
