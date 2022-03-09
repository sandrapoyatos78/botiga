import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Ropa } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore, private router: Router) { }

  crea(ropa: Ropa) {
    return this.firestore.collection('ropas').add(ropa);
  }

  lista() {
    return this.firestore.collection('ropas').snapshotChanges();
  }

  filtra(id) {
    return this.firestore.collection('ropas').doc(id).valueChanges();

  }
  actualiza(id, ropa: Ropa) {

    this.firestore.collection('ropas').doc(id).update(ropa)
      .then(() => {
        this.router.navigate(['list-ropas']);
      }).catch(error => console.log(error));
  }

  elimina(id) {
    this.firestore.doc('ropas/'+id).delete();

  }

}

