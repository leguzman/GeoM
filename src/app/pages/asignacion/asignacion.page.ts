import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.page.html',
  styleUrls: ['./asignacion.page.scss'],
})
export class AsignacionPage implements OnInit {
  scannedCodes=[];
  online=false;

  constructor(private barcodeScanner: BarcodeScanner) { }
  ngOnInit() {
  }
  scan(){
    const self =this;
    this.barcodeScanner.scan().then(
      data=>{
        self.scannedCodes.push(data.text);
      }
    )
  }
}
