import { Component, OnInit } from '@angular/core';
import { HorariosService } from '../horarios.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  p1: String;
  p2: String;
  id: number

  constructor(public horariosService: HorariosService) {}

  ngOnInit() {}

  handleClick() {
    // this.horariosService.add(
    //   this.inputWeekDay,
    //   this.inputTime,
    //   this.inputName
    // );

    this.horariosService.updateNotas(
      this.p1,
      this.p2,
      this.id
    )
    this.p1 = '';
    this.p2 = '';
  }
}
