import { Component, OnInit } from '@angular/core';
import { ConfigPageModule } from '../config/config.module';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.page.html',
  styleUrls: ['./recepcion.page.scss'],
})
export class RecepcionPage implements OnInit {

  constructor() { }
  date:Date = new Date();
  ngOnInit() {
    setTimeout(() => {
      document.getElementById('date_input_recepcion').click()
    }, 300);
  }

}
