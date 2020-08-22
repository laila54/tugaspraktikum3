import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';

export default () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div className="layout">
      <h1>selamat datang di Profile !!</h1>
      <img src="../static/produk/emina-mask.jpeg"></img>
      <div>
        <h4>Nama : Laila Nur A.F</h4>
        <h4>Nim : 1118101661</h4>
        <h4>Stikom Banyuwangi</h4>
      </div>
    </div>
    <style jsx>{`
      .layout{
        text-align: center;
      }
    `}</style>
  </div>
);
