import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.page.html',
  styleUrls: ['./createclient.page.scss'],
})
export class CreateclientPage implements OnInit {

  
  constructor(private dataService:DataService, private router: Router) { }

  ngOnInit() {
  }

  usuario = {
    nombre:"",
    email: "",
    password:"", 
    location:""
  }
  altaUser() {
    this.dataService.create('usuarios', this.usuario).then (res => {
      console.log(res);
      this.router.navigate(['listclient']);
    });
  }
}
