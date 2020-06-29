export default ({ open, ...props }) => (
  <>
    <div className={open ? 'nav-toggle open' : 'nav-toggle'} {...props}>
      <div className='gg-menu'></div>
    </div>

    <style jsx>{`
      .nav-toggle {
        position: relative;
        z-index: 9999;
        width: 38px;
        height: 38px;
        cursor: pointer;
      }

      @media (min-width: 700px) {
        .nav-toggle {
          display: none;
        }
      }

      .gg-menu {
        top: 18px;
      }

      .gg-menu,
      .gg-menu::after,
      .gg-menu::before {
        box-sizing: border-box;
        position: relative;
        display: block;
        width: 20px;
        height: 2px;
        margin: 0 auto;
        border-radius: 3px;
        background: #fff;
      }

      .nav-toggle.open .gg-menu,
      .nav-toggle.open .gg-menu:after,
      .nav-toggle.open .gg-menu:before {
        background: var(--color-primary);
      }

      .gg-menu::after,
      .gg-menu::before {
        content: '';
        position: absolute;
        top: -6px;
      }

      .gg-menu::after {
        top: 6px;
      }
    `}</style>
  </>
)
