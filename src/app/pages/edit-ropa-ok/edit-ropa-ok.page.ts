import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-edit-ropa-ok',
  templateUrl: './edit-ropa-ok.page.html',
  styleUrls: ['./edit-ropa-ok.page.scss'],
})
export class EditRopaOKPage implements OnInit {

  editForm: FormGroup;
  id: String;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute,
       public formBuilder: FormBuilder) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.filtra(this.id).subscribe(
      res => {
        this.editForm = this.formBuilder.group({
          id: [res['id']],
          tipo: [res['tipo']],
          precio: [res['precio']],
          intercambio: [res['']]
        })
      });
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [''],
      tipo: [''],
      precio: [''], 
      intercambio: ['']
    })
  }
 
  onSubmit() {
    this.dataService.actualiza(this.id, this.editForm.value);
  }
 

}
