import { Injectable } from '@angular/core';

interface Disciplinas {
  id: number;
  diasemana: String;
  hora: String;
  nome: String;
  p1?: String;
  p2?: String;
}

@Injectable()
export class HorariosService {
  private horariosList: Disciplinas[] = [];

  constructor() {}

  getList() {
    if (localStorage.getItem('list')) {
      this.horariosList = JSON.parse(localStorage.getItem('list'));
    }
    return this.horariosList;
  }

  add(inputWeekDay: String, inputTime: String, inputName: String) {
    this.getList().push({
      id: new Date().getTime(),
      diasemana: inputWeekDay,
      hora: inputTime,
      nome: inputName,
      p1: '0',
      p2: '0'
    });
    localStorage.setItem('list', JSON.stringify(this.horariosList));
  }

  updateNotas(inputP1: String, inputP2: String, id: number) {
    this.horariosList[this.horariosList.findIndex(e => e.id === +id)].p1 = inputP1
    this.horariosList[this.horariosList.findIndex(e => e.id === +id)].p2 = inputP2
    localStorage.setItem('list', JSON.stringify(this.horariosList));
  }

  remove(id: number) {
    this.horariosList.splice(
      this.horariosList.findIndex(e => e.id === id),
      1
    );
    localStorage.setItem('list', JSON.stringify(this.horariosList));
  }
}
