import { Component, OnInit } from '@angular/core';
import { HorariosService } from '../horarios.service';
 
@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})

export class DisciplinasComponent implements OnInit {
  inputWeekDay: String;
  inputTime: String;
  inputName: String;

  constructor(public horariosService: HorariosService) {}

  handleClick() {
    this.horariosService.add(
      this.inputWeekDay,
      this.inputTime,
      this.inputName
    );
    this.inputWeekDay = '';
    this.inputTime = '';
    this.inputName = '';
  }

  ngOnInit() {}
}
