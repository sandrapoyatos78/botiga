import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { FileI, Ropa } from '../interfaces/interfaces';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private postsCollection: AngularFirestoreCollection<Ropa>;
  private filePath: any;
  private downloadURL: Observable<string>;
  
  constructor(public firestore: AngularFirestore,
     private router: Router, 
    
     private storage: AngularFireStorage) { 
       this.postsCollection = firestore.collection<Ropa>('Productos'); 
      }
  
   crearopa(ropa:Ropa) {
    return  this.firestore.collection('Productos').add(ropa);
  }

  lista() {
    return this.firestore.collection('Productos').snapshotChanges();
  }

  filtra(id) {
    return this.firestore.collection('Productos').doc(id).valueChanges();

  }
  actualiza(id, ropa: Ropa) {

    this.firestore.collection('Productos').doc(id).update(ropa)
      .then(() => {
        this.router.navigate(['list-ropa']);
      }).catch(error => console.log(error));
  }

  elimina(id) {
    this.firestore.doc('Productos/'+id).delete();
  }

  public preAddAndUpdatePost(post: Ropa, image: FileI): void {
    this.uploadImage(post, image);
  }
  private savePost(post: Ropa) {
    const postObj = {
      id: post.id,
      tipo: post.tipo,
      precio: post.precio,
      intercambio: post.intercambio,
      imagePost: this.downloadURL
      
      
    };
    if (post.id) {
      return this.postsCollection.doc(post.id).update(postObj);
    } else {
      return this.postsCollection.add(postObj);
    }

  }


   uploadImage(post: Ropa, image: FileI) {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.downloadURL = urlImage;
            this.savePost(post);
          });
        })
      ).subscribe();
  }
 
  //CRUD CLIENTES
  async create(collection, dato) {
    try {
      return await this.firestore.collection(collection).add(dato);
    } catch (error) {
      console.log("error en: create ", error)
    }
  }

  async getAll(collection) {
    try {
      return await this.firestore.collection(collection).snapshotChanges();
    } catch (error) {
      console.log("error en: getAll ", error)
    }
  }

  async getAllropa(collection) {
    try {
      return await this.firestore.collection(collection).snapshotChanges();
    } catch (error) {
      console.log("error en: getAll ", error)
    }
  }



  async getById(collection, id) {
    try {
      return await this.firestore.collection(collection).doc(id).get();
    } catch (error) {
      console.log("error en: getById ", error)
    }
  }


  async delete(collection, id) {
    try {
      return await this.firestore.collection(collection).doc(id).delete();
    } catch (error) {
      console.log("error en: getAll ", error)
    }
  }


  async update(collection, id, dato) {
    try {
      return await this.firestore.collection(collection).doc(id).set(dato);
    } catch (error) {
      console.log("error en: getAll ", error)
    }
  }


}



