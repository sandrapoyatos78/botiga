import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  constructor(public router: Router) { }
  mapa: mapboxgl.Map;
    ngOnInit() {

    (mapboxgl as any).accessToken = environment.mapBoxToken
    this.mapa = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [2.1854994, 41.4532659],
      zoom: 14
 
    });
    this.crearmarcador(2.1854994, 41.4532659);
  }

  crearmarcador(lng:number, lat:number) {
  const marker = new mapboxgl.Marker({
    draggable: true
  })
     .setLngLat([lng, lat])
     .setPopup(new mapboxgl.Popup().setHTML("<h1>Aqui estoy</h1>"))
     .addTo(this.mapa);
    marker.on('drag', () => {
    console.log(marker.getLngLat)
  })
  }
  goTolist() {
    this.router.navigateByUrl('/createclient');
  }

}
