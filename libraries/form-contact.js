import { useState } from 'react'

export default function FormContact() {
  const [values, setValues] = useState({
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
    setValues({ ...values, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`https://formspree.io/mjvaogwv`, {
        method: 'POST',
        body: JSON.stringify(values),
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
        action='https://formspree.io/mjvaogwv'
        method='post'
        onSubmit={handleSubmit}
      >
        <input
          className='input'
          type='text'
          name='name'
          placeholder='Name'
          aria-label='Your name'
          onChange={handleChange}
          required
        />

        <input
          className='input'
          type='email'
          name='_replyto'
          placeholder='Email'
          aria-label='Your email'
          onChange={handleChange}
          required
        />

        <textarea
          className='textarea'
          name='message'
          placeholder='Message'
          aria-label='Your message'
          onChange={handleChange}
          required
        />

        {/*
        <input
          type='hidden'
          name='_next'
          value='//recurringcredit.com/contact'
        />
        */}

        <button
          className='button'
          type='submit'
          /*disabled={isSubmitting}*/
          aria-label='Submit contact form'
        >
          Submit
        </button>
      </form>

      {response.type === 'error' && (
        <div className='message error'>Error: {response.message}</div>
      )}
      {response.type !== 'error' && response.message && (
        <p>Message: {response.message}</p>
      )}
    </>
  )
}
