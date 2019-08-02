import React from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {Menubar} from 'primereact/menubar';
import {Chart} from 'primereact/chart';
import {Fieldset} from 'primereact/fieldset';
import {Button} from 'primereact/button';

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
            <Fieldset legend="Grafik" toggleable={true} style={{}}>
                <Grafik data={this.state.data} dataSAT={this.state.dataSAT} total={this.state.total} bimbingan={this.state.bimbingan}/>
                </Fieldset>
          </div>
        );
    }
}

const Grafik = (props) => {
    return (

      
        <div class="row">
        <div class="col-sm">
        <div className="container card" style={{ width: 600,height:400 }}>
        <div className="container card">
            <strong>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;Grafik Mahasiswa Yang Sedang Skripsi / TA
            </strong>
        </div>
        <div className="content-section implementation">
                <Chart type="doughnut" data={props.dataSAT} />
                <label style={{marginLeft:200}}>Total Yang Bimbingan : &nbsp;
                {
                    <strong>{props.bimbingan}</strong>
                }
                </label>
            </div>
        </div>
        </div>
        <div class="col-sm">

        <div className="container card" style={{ width: 600,height:400 }}>
        <div className="container card">
            <strong>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;Grafik Mahasiswa Dari Total Semua Jurusan
            </strong>
        </div>
        <div className="content-section implementation">
                <Chart type="polarArea" data={props.data} />
                <label style={{marginLeft:220}}>Total Mahasiswa :&nbsp; 
                {
                    <strong>{props.total}</strong>
                }
                </label>
        </div>
    </div>
        </div>
    </div>

    );
}

export default Menu;