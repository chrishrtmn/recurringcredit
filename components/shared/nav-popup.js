import Link from 'next/link'
import ActiveLink from '../../libraries/nav-active-class'

export default function NavPopup({ close }) {
  return (
    <>
      <nav className='menu'>
        <ActiveLink onClick={close} activeClassName='active' href='/'>
          <a className='home'>Home</a>
        </ActiveLink>

        <ActiveLink onClick={close} activeClassName='active' href='/contact'>
          <a>Contact</a>
        </ActiveLink>

        <a
          className='login'
          href='https://mysuperportal.com/access/recurringcredit/'
          target='_blank'
        >
          Login
        </a>
      </nav>

      <style jsx>{`
        a {
          display: block;
          margin: 20px 0;
          padding: 10px 0;
          color: var(--color-primary);
          text-decoration: none;
          font-size: 24px;
        }

        a:hover {
          color: var(--color-secondary);
        }

        a.home.active {
          display: none;
        }
      `}</style>
    </>
  )
}
