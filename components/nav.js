import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a><img src="../static/logo.png"></img></a>
        </Link>
      </li>
      <ul className="link">
        <li>
          <a href="produk">Produk</a>
        </li>
        <li>
          <a href="hubungi">Hubungi Kami</a>
        </li>
        <li>
          <a href="profile">Profile</a>
        </li>
        <li>
          <a href="admin">Admin</a>
        </li>
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        padding:10px;
        font-size: 18px;
      }
      img{
        height: 90%;
        width: 90%;
      }
    `}</style>
  </nav>
);

export default Nav;
