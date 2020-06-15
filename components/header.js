import Logo from './logo'
import Nav from './nav'

export default function Header() {
  return (
    <>
      <header>
        <div className='wrapper'>
          <Logo />

          <Nav />
        </div>
      </header>

      <style jsx>{`
        header {
          position: relative;
          color: #fff;
        }

        a {
          color: #fff;
        }
      `}</style>
    </>
  )
}
