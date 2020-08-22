import React, { Component } from 'react'
import Menu from '../components/nav';
import Header from '../components/head';


  export default class extends Component {
  constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  this.state = {
    nama:'',
    nomor:'',
    email:'',
  }
  }
  handleChange(evt) {
    this.setState({
    [evt.target.name]: evt.target.value,

  });
  }
  render() {
  return (
  <div>
  <Header judul="Hubungi Kami"/>
  <Menu />
  <div>
    <h1>Silahkan Hubungi Kami</h1>
    <label>Nama:</label><input type="text"
    name="nama" value={this.state.nama} onChange={this.handleChange}/><br/>
    <label>Nomor:</label><input type="text"
    name="nomor" value={this.state.nomor} onChange={this.handleChange}/><br/>
    <label>Email:</label><input type="text"
    name="email" value={this.state.email} onChange={this.handleChange}/><br/>
  </div>
  <div>
    <h5>Data Anda:</h5>
    <label>Nama: {this.state.nama}</label><br/>
    <label>Nomor:
    {this.state.nomor}</label><br/>
    <label>Email:
    {this.state.email}</label><br/>
  </div>
  </div>
  );
  }
  }