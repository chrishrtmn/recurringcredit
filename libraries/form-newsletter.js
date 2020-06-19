import { useState } from 'react'

export default function FormNewsletter() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
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
      const res = await fetch(`https://formspree.io/mpzylqzk`, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' },
      })

      const json = await res.json()

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for subscribing to our newsletter.',
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
          name='email'
          placeholder='Email'
          aria-label='Your email'
          onChange={handleChange}
          required
        />

        <button
          className='button'
          type='submit'
          aria-label='Submit newsletter form'
        >
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
