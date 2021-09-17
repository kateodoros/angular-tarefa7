import { Component, OnInit } from '@angular/core';
import { HorariosService } from '../horarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public horariosService: HorariosService) { }

  ngOnInit() {
  }

}