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
          margin: 0 0 60px;
          padding: 20px 0;
          background: #112a6b;
        }
      `}</style>
    </>
  )
}
