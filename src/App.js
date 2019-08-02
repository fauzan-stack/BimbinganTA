import React from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.slim';
import 'jquery/dist/jquery.min';
import axios from 'axios';

class App extends React.Component {

   state={
      indexMahasiswa:0,
      TabelBimbingan:[
         {
            kode_grup : "0412342211",
            pembimbing : "Nur Achadi",
            mahasiswa : "Fauzan",
            total_bimbingan : 2,
            judul_karya_tulis_ilmiah : "Pembangunan Aplikasi Android",
            Bimbingan : [
               {
                  id:0,
                  kode_bimbingan:"ndwadnisan",
                  pembahasan:"Membahas bab 1",
                  tanggal: "19-02-2019"
               },
               {
                  id:0,
                  kode_bimbingan:"ndwadnisan",
                  pembahasan:"Membahas bab 2",
                  tanggal: "20-10-2019"
               }
            ]
         }         
      ],
      TabelDosen:[
         {
            nidn:"0412342211",
            nama : "Abdul Hafidz Tanjung",
            jenisKelamin : "LK",
            ttl : "Sibolga, 31-12-1998",
            alamat : "Jl. Kapten Yusuf, Ciapus Kab.Bogor",
            prodi : "D3 Manajemen Informatika",
            gelar: "M.Si., S.E.Akt",
            jabatan: "Wakil Rektor",
            pendidikan : "S2"
         }
      ],
      TabelMahasiswa:[],
      visible:false,
      total: 0,
      bimbingan : 0,
      data : {
          datasets: [{
              data: [11,16,7,14],
              backgroundColor: ["#BF00FF","#32CD32","#FFCE56","#36A2EB"],
              label: 'My dataset'
          }],
          labels: [
              "Psikologi",
              "Sastra",
              "Manajemen",
              "Ilmu Komputer"
          ]
      },
      dataSAT : {
          labels: ['Psikologi', 'Sastra', 'Manajemen','Ilmu Komputer'],
          datasets: [
            {
              data: [10, 15, 2,6],
              backgroundColor: ['#BF00FF', '#32CD32', '#FFCE56',"#36A2EB"],
              hoverBackgroundColor: ['#BF00FF', '#32CD32', '#FFCE56',"#36A2EB"]
            }
          ]
      },
      items:[
          {
             label:'Home',
             icon:'pi pi-fw pi-home',
             command:()=>{
              window.location.href = "/Home"
          }
          },
          {
             label:'Data Mahasiswa',
             icon:'pi pi-fw pi-table',
             command:()=>{
              window.location.href = "/DataMahasiswa"
            }
          },
          {
             label:'Data Dosen',
             icon:'pi pi-fw pi-table',
             command:()=>{
               window.location.href = "/DataDosen"
             }
          },
          {
             label:'Data Bimbingan',
             icon:'pi pi-fw pi-table',
             command:()=>{
               window.location.href = "/DataBimbingan"
            }
            },
          {
             separator:true
          }
       ],
       visible: false,
       visibleInput: false,
       NIM: 0,
       nidn:0,
       Nama:"",
       JK:"",
       Ttl:"",
       Alamat:"",
       Bimbingan:[]
  }
   componentDidMount(){
      axios.get("http://192.168.43.208:8080/mahasiswa")
      .then(data=>{
         this.setState({TabelMahasiswa:data.data});
         let ilkom=0;
         let psikolog=0;
         let ekonomi=0;
         let sastra=0;
   
         data.data.map(
             (detail,i)=>
                 detail.jurusan.idFakultas==2?
                 ilkom += 1:
                 detail.jurusan.idFakultas==1?
                 ekonomi += 1:
                 detail.jurusan.idFakultas==4?
                 sastra += 1:
                 psikolog += 1
         );
         this.setState({data:
            {
                datasets: [{
                    data: [psikolog,sastra,ekonomi,ilkom],
                    backgroundColor: ["#BF00FF","#32CD32","#FFCE56","#36A2EB"],
                    label: 'My dataset'
                }],
                labels: [
                    "Psikologi",
                    "Sastra",
                    "Ekonomi",
                    "Ilmu Komputer"
                ]
            }
        });
        this.setState({
         total:(ilkom+psikolog+ekonomi+sastra)
     });

     this.setState({
         bimbingan:0
     });
      });
      
   }
  render(){
    return (
      <div className="container">
    
      </div>
    );
  }
}

export default App;
