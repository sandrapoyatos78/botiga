import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-ropa',
  templateUrl: './create-ropa.page.html',
  styleUrls: ['./create-ropa.page.scss'],
})
export class CreateRopaPage implements OnInit {
  
  ropaForm: FormGroup;

  constructor(private dataService: DataService,
    public formBuilder: FormBuilder,   
    private router: Router) { }
 
  ngOnInit() {
    this.ropaForm = this.formBuilder.group({
      id: [''],
      tipo: [''],
      precio: [''], 
      intercambio: [false]
    })
  }

    onSubmit() {
      if (!this.ropaForm.valid) {
        return false;
      } else {
        this.dataService.crea(this.ropaForm.value)
        .then(() => {
          this.ropaForm.reset();
          this.router.navigate(['login']);
        }).catch((err) => {
          console.log(err)
        });
      }
    }
   
  }
