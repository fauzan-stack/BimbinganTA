import React from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {Menubar} from 'primereact/menubar';
import {Fieldset} from 'primereact/fieldset';

import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';

import App from '../App';
import Nav from '../Nav.jsx';

class Menu extends App{
    logout(){
        window.location.href="/"
    }

    render(){
        return(<div>
            <Nav/>
            <div className="content-section implementation">
            <Menubar model={this.state.items}>
                        <Button onClick={this.logout} label="Logout" icon="pi pi-power-off" style={{marginLeft:4}}/>
                    </Menubar>
            </div>
            <br/>
            <div>
            </div>
            <Fieldset legend="Data Bimbingan" toggleable={true} style={{}}>
                <Tabel />
            </Fieldset>
          </div>
        );
    }
}

class Tabel extends App {
    onHide() {
        this.setState({visible: false});
    }
    render(){
    return (  
        <div>
         <nav class="navbar navbar-light bg-light justify-content-between">
            <div class="navbar-brand">
                <button className="btn btn-primary" onClick={()=>{this.setState({visibleInput: true})}}>Tambah Data</button>
            </div>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" style={{width:300}} type="search" placeholder="Search Lecturer or Student" aria-label="Search"/>
                </form>
          </nav>
          <Dialog header="Input Data Bimbingan" footer={<button className="btn btn-primary">Save</button>} visible={this.state.visibleInput} style={{width: '50vw'}} onHide={()=>this.setState({visibleInput: false})}>
          <div class="modal-body">
                    <div class="form-group">
                        <label className="lll" for="exampleFormControlInput1">Nama Dosen</label>
                        <select class="custom-select" id="namaDosen">
                            <option selected>-- Select One --</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label className="lll" for="exampleFormControlInput1">Nama Mahasiswa</label>
                        <select class="custom-select" id="namaMahasiswa">
                            <option selected>-- Select One --</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label className="lll" for="exampleFormControlInput1">Judul Skripsi atau TA</label>
                        <input type="text" class="form-control" placeholder="Masukan Judul" id="exampleFormControlInput1"/>
                    </div>
                </div>
            </Dialog>
    <div class="wrapper">
        <table class="table table-bordered table-paginate">
            <thead>
                <tr>
                <th scope="col" style={{width:30}} >No.</th>                
                <th scope="col" style={{width:180}}>Pembimbing</th>
                <th scope="col" style={{width:140}}>Mahasiswa</th>
                <th scope="col" style={{width:10}}>Total Bimbingan</th>
                <th scope="col" style={{width:300}}>Judul Karya Tulis Ilmiah</th> 
                <th scope="col" className="kolom" style={{width:10}}>Detail</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.TabelBimbingan.map(
                        (detail,i)=>
                            <tr>
                                <th scope="row" value={i+1}>{i+1}</th>
                                <th>{detail.pembimbing}</th>
                                <th>{detail.mahasiswa}</th>
                                <th>{detail.total_bimbingan}</th>
                                <th>{detail.judul_karya_tulis_ilmiah}</th>
                                <th className="kolom">
                                <button className="btn btn-primary" onClick={()=>this.setState({visible: true,Bimbingan:detail.Bimbingan,Nama:detail.mahasiswa})}  data-toggle="modal" data-target="#exampleModal">
                                    {/* <img width="25px" height="25px" src="cari.png">
                                    </img> */}
                                    <i className="pi pi-fw pi-list"></i>
                                </button>
                                <div className="content-section implementation">
                                </div>
                                </th>
                            </tr>
                    )
                }
            </tbody>
        </table>
        <Dialog header="Detail Bimbingan" visible={this.state.visible} style={{width: '50vw'}} onHide={()=>this.onHide()}>
        <div class="wrapper">
        <table class="table table-bordered table-paginate">
            <thead>
                <tr>
                <th scope="col" style={{width:30}} >No.</th>                
                <th scope="col" style={{width:180}}>Nama  Mahasiswa</th>
                <th scope="col" style={{width:140}}>Pembahasan</th>
                <th scope="col" style={{width:10}}>Tanggal</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.Bimbingan.map(
                        (detail,i)=>
                            <tr>
                                <th scope="row" value={i+1}>{i+1}</th>
                                <th>{this.state.Nama}</th>
                                <th>{detail.pembahasan}</th>
                                <th>{detail.tanggal}</th>
                            </tr>
                    )
                }
            </tbody>
        </table>
    </div>
    
        </Dialog>
    </div>
    </div>
    );
            }
}

export default Menu;