import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.page.html',
  styleUrls: ['./listclient.page.scss'],
})
export class ListclientPage implements OnInit {
  usuario = {
    email: "",
    password:""
  }
  
  listaDeUsuarios = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAll('usuarios').then(firebaseResponse => {
      firebaseResponse.subscribe(listaDeUsuariosRef => {

        this.listaDeUsuarios = listaDeUsuariosRef.map(usuarioRef => {
          let usuario = usuarioRef.payload.doc.data();
          usuario['id'] = usuarioRef.payload.doc.id;
          return usuario;
        })
        console.log(this.listaDeUsuarios);

      })
    })
  }

  eliminar(id) {
    this.dataService.delete('usuarios', id).then(res => {
      alert("Se ha eliminado correctamente ");
    }).catch(err => {
      console.log("ERROR al eliminar ", err);
    });
  }


  altaUsuario() {
    this.dataService.create('usuarios', this.usuario).then(res => {
      console.log(res);
    }).catch(err => {
      console.log("error en alta: ", err);
    });
  }
}