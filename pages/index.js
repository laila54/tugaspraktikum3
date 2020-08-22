import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';

export default () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div>
      <h1>selamat datang di Rumah Skincare !!</h1>
      <img src="../static/produk/emina-mask.jpeg"></img>
      <div>
        <a href="/produk">Ketahui lebih lanjut</a>
      </div>
    </div>
    <style jsx>{`
     h1{
      padding:10px;
      text-transform: capitalize;
      margin-left:50px;
     }
     img{
       height:550px;
       width:900px;
       margin-left:20%;
     }
     a{
       margin-top:90%;
       margin-left:40%;
       border:5px gray solid;
       border-radius:15px;
       background:gray;
     }
    `}</style>
  </div>
);
