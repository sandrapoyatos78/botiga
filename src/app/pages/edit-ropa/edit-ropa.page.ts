import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-ropa',
  templateUrl: './edit-ropa.page.html',
  styleUrls: ['./edit-ropa.page.scss'],
})
export class EditRopaPage implements OnInit {

  editForm: FormGroup;
  id: String;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute,
    private router: Router, public formBuilder: FormBuilder) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.filtra(this.id).subscribe(
      res => {
        this.editForm = this.formBuilder.group({
          tipo: [res['tipo']],
          precio: [res['precio']]
        })
      });
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      tipo: [''],
      precio: ['']
    })
  }
 
  onSubmit() {
    this.dataService.actualiza(this.id, this.editForm.value);
  }
 

}
