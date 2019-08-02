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
            <Fieldset legend="Data Dosen" toggleable={true} style={{}}>
                <Tabel />
            </Fieldset>
          </div>
        );
    }
}

class Tabel extends App {
    onClick(nidn,nama,jenisKelamin,Ttl,Alamat) {
        this.setState({visible: true,nidn:nidn,Nama:nama,JK:jenisKelamin,Ttl:Ttl,Alamat:Alamat});
    }

    onHide() {
        this.setState({visible: false});
    }
    render(){
    return (  
        <div>
         <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand"></a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search NIDN or Name" aria-label="Search"/>
                </form>
          </nav>
        
    <div class="wrapper">
        <table class="table table-bordered table-paginate">
            <thead>
                <tr>
                <th scope="col" style={{width:30}} >No.</th>
                <th scope="col" style={{width:50}}>NIDN</th>                
                <th scope="col" style={{width:200}}>Nama</th>
                <th scope="col" style={{width:50}}>Gelar</th>
                <th scope="col" style={{width:10}}>Pendidikan</th>
                <th scope="col" style={{width:50}}>Jabatan</th>
                <th scope="col" style={{width:100}}>Prodi</th> 
                <th scope="col" className="kolom" style={{width:10}}>Detail</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.TabelDosen.map(
                        (detail,i)=>
                            <tr>
                                <th scope="row" value={i+1}>{i+1}</th>
                                <th>{detail.nidn}</th>
                                <th>{detail.nama}</th>
                                <th>{detail.gelar}</th>
                                <th>{detail.pendidikan}</th>
                                <th>{detail.jabatan}</th>
                                <th>{detail.prodi}</th>
                                <th className="kolom">
                                <button className="btn btn-primary" onClick={()=>this.onClick(detail.nidn,detail.nama,detail.jenisKelamin,detail.ttl,detail.alamat)}  data-toggle="modal" data-target="#exampleModal">
                                <i className="pi pi-fw pi-info-circle"></i>
                                </button>
                                <div className="content-section implementation">
                                </div>
                                </th>
                            </tr>
                    )
                }
            </tbody>
        </table>
        <Dialog header="Detail Dosen" visible={this.state.visible} style={{width: '40vw', height: '46vw'}} onHide={()=>this.onHide()}>
                <div class="modal-body">
                    <div class="form-group">
                        <label className="lll" for="exampleFormControlInput1">NIDN</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" disabled value={this.state.nidn}/>
                    </div>
                    <div class="form-group">
                        <label className="lll" for="exampleFormControlInput1">Nama</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" disabled value={this.state.Nama}/>
                    </div>
                    <div class="form-group">
                        <label className="lll" for="exampleFormControlInput1">Jenis Kelamin</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" disabled value={this.state.JK=="LK"?"Laki - laki":"Perempuan"}/>
                    </div>
                    <div class="form-group">
                        <label className="lll" for="exampleFormControlInput1">Tempat Tanggal Lahir</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" disabled value={this.state.Ttl}/>
                    </div>
                    <div class="form-group">
                        <label className="lll" for="exampleFormControlInput1">Alamat</label>
                        <textarea class="form-control" id="exampleFormControlInput1" disabled value={this.state.Alamat}/>
                    </div>
                    <div class="form-group">
                        <label className="lll" for="exampleFormControlInput1">No. Telp</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" disabled value="085778152016"/>
                    </div>
                </div>
        </Dialog>
    </div>
    </div>
    );
            }
}

export default Menu;