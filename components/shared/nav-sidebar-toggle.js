export default function NavSidebarToggle({ open, ...props }) {
  return (
    <>
      <a className={open ? 'toggle opened' : 'toggle closed'} {...props}>
        <i className='gg-menu'></i>
      </a>

      <style jsx>{`
        .toggle {
          margin: 1px -10px 0 15px;
          padding: 16px 10px;
          border: 0;
          cursor: pointer;
        }

        .toggle:hover {
          border: 0;
          color: var(--color-secondary);
        }

        @media (min-width: 700px) {
          .toggle {
            display: none;
          }
        }

        .gg-menu,
        .gg-menu::after,
        .gg-menu::before {
          box-sizing: border-box;
          position: relative;
          display: block;
          width: 20px;
          height: 2px;
          border-radius: 3px;
          background: currentColor;
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
}
