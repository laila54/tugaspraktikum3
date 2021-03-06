import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';

export default () => (
  <div>
    <Head title="Produk" />
    <Nav />
    <div>
      <h1>selamat datang di Rumah Skincare !!</h1>
      <img src="../static/produk/emina-mask.jpeg"></img>   
      <img src="../static/produk/emina-mask.jpeg"></img> 
      <img src="../static/produk/emina-mask.jpeg"></img>
      <img src="../static/produk/emina-mask.jpeg"></img>
      <img src="../static/produk/emina-mask.jpeg"></img>
      <img src="../static/produk/emina-mask.jpeg"></img>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        padding-bottom: 12px;
        line-height: 1.15;
        font-size: 37px;
      }
      .title, .description {
        text-align: center;
      }
      .row {
        max-width: 587px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9B9B9B;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);
