import { Component, OnInit } from '@angular/core';
import { Ropa } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-ropa',
  templateUrl: './list-ropa.page.html',
  styleUrls: ['./list-ropa.page.scss'],
})
export class ListRopaPage implements OnInit {

  ropas = [];
 constructor(private dataService: DataService) { }
 
 ngOnInit() {
   this.dataService.lista().subscribe(
     res => {
       this.ropas = res.map((item) => {
         return {
           id: item.payload.doc.id,
           ... item.payload.doc.data() as Ropa
         };
       })
     }
   );
 }

 deleteBook(id){
  if (window.confirm('Do you want to delete this article?')) {
    this.dataService.elimina(id)
  }
}


}
