import { Component, OnInit } from '@angular/core';
import { ConfigPageModule } from '../config/config.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.page.html',
  styleUrls: ['./recepcion.page.scss'],
})
export class RecepcionPage implements OnInit {

  constructor(private BarcodeScanner:BarcodeScanner, private toatCtrl: ToastController) { }
  date:Date = new Date();
  QR: string = "nada";
  scannedCode:any;
  elementType: 'url' |'canvas' |'img' = 'canvas'
  ngOnInit() {
    setTimeout(() => {
      document.getElementById('date_input_recepcion').click()
    }, 300);
  }
  
  ScanCode(){
    this.BarcodeScanner.scan().then(
      data=>{
        this.scannedCode= data;
        alert(data);
      }
    )
  }  
  scan(){
    
  }   

}
