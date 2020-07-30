import { Component, OnInit } from '@angular/core';
import { ConfigPageModule } from '../config/config.module';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

import { Dialogs } from '@ionic-native/dialogs/ngx';
import { from } from 'rxjs';
@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.page.html',
  styleUrls: ['./recepcion.page.scss'],
})
export class RecepcionPage implements OnInit {

  constructor(private qrScanner: QRScanner,private dialog:Dialogs) { }
  date:Date = new Date();
  QR: string = "nada";
  QRscan:any;
  ngOnInit() {
    setTimeout(() => {
      document.getElementById('date_input_recepcion').click()
    }, 300);
  }
  
  escanear(){
    
      // Optionally request the permission early
      this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          this.qrScanner.show();
          document.getElementsByTagName('body')[0].style.opacity= "0"; 
          this.QRscan = this.qrScanner.scan().subscribe((textFound:string)=>{
            this.QR= textFound;
            document.getElementsByTagName('body')[0].style.opacity= "1"; 
            this.QRscan.unsubscribe();
            this.dialog.alert(textFound);

          },
          (err)=>{this.dialog.alert(JSON.stringify(err)) });
          // start scanning
         /* let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
  
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });*/
  
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

}
