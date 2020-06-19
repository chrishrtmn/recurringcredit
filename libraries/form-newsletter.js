import { useState } from 'react'

export default function FormNewsletter() {
  return (
    <>
      <form>
        <input placeholder='Email' aria-label='Your email' />
        <button aria-label='Submit newsletter form'>Submit</button>
      </form>
    </>
  )
}
