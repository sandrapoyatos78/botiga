import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Ropa } from 'src/app/interfaces/interfaces';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-create-ropa',
  templateUrl: './create-ropa.page.html',
  styleUrls: ['./create-ropa.page.scss'],
})
export class CreateRopaPage implements OnInit {

  ropaForm: FormGroup;
  newFile: "";
  newProducto: any;
  loading: any;
  private path = 'Productos/';
  
  constructor(private dataService: DataService,
    public formBuilder: FormBuilder,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private router: Router, 
    private emailComposer: EmailComposer) { }

    public newPostForm = new FormGroup({
      id: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      intercambio: new FormControl('', Validators.required),
      imagePost: new FormControl('', Validators.required),
    });

  ngOnInit() {
    this.ropaForm = this.formBuilder.group({
      id: [''],
      tipo: [''],
      precio: [''],
      intercambio: [false], 
      imagePost: []
    })
  }

  onSubmit() {
    if (!this.ropaForm.valid) {
      return false;
    } else {
      this.dataService.crearopa(this.ropaForm.value)
        .then(() => {
          this.ropaForm.reset();
          this.router.navigate(['list-ropa']);
        }).catch((err) => {
          console.log(err)
        });
    }
  }
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      cssClass: 'normal',
      duration: 2000,
      color: 'light',
    });
    toast.present();
  }

async presentLoading() {
  this.loading = await this.loadingController.create({
    cssClass: 'normal',
    message: 'guardando...',
  });
  await this.loading.present();
}


addNewPost(data: Ropa) {
  console.log('New post', data);
  this.dataService.preAddAndUpdatePost(data, this.image);
  this.router.navigate(['list-ropa']);
}
private image: any;
handleImage(event: any): void {
  this.image = event.target.files[0];
 
} 

 sendEmail(){
   let email = {
     to: 'sandru76@gmail.com', cc: 'sandra.poyatos.7e4@itb.cat',
     attachments: ['file://img/logo.png', 'res://icon.png',
       'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...','file://README.pdf'],
     subject: 'Confirmación de tu Pedido',
     body: 'Confirmamos que tu artículo se ha subido correctamente.', isHtml: true
   }
   this.emailComposer.open(email);
 }


}
