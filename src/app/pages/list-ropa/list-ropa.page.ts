import { Component, OnInit } from '@angular/core';
import { Ropa } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-ropa',
  templateUrl: './list-ropa.page.html',
  styleUrls: ['./list-ropa.page.scss'],
})
export class ListRopaPage implements OnInit {
  ropa = {
    id: "",
    tipo: "",
    precio: "",
    intercambio: [false], 
    imagePost:""
  }

ropas = [];

 constructor(private dataService: DataService) { }
 
 ngOnInit() {
  this.dataService.getAllropa('Productos').then(firebaseResponse => {
    firebaseResponse.subscribe(ropasRef => {

      this.ropas = ropasRef.map(ropaRef => {
        let ropa = ropaRef.payload.doc.data();
        ropa['id'] = ropaRef.payload.doc.id;
        return ropa;
      })
      console.log(this.ropas);

    })
  })
}

 eliminar(id) {
  if (window.confirm('Do you want to delete this article?')) {
  this.dataService.delete('Productos', id).then(res => {
    alert("Se ha eliminado correctamente ");
  }).catch(err => {
    console.log("ERROR al eliminar ", err);
  });
}
}


}
