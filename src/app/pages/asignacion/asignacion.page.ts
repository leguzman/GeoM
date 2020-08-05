import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.page.html',
  styleUrls: ['./asignacion.page.scss'],
})
export class AsignacionPage implements OnInit {

  scannedCodes = [];
  online = false;
  run: string;
  data: string;

  constructor(private barcodeScanner: BarcodeScanner, public alertController: AlertController) { }
  ngOnInit() {
  }
  scan() {
    if (!this.run) {
      this.alertRun();
    }
    else {
      const self = this;
      this.barcodeScanner.scan().then(
        data => {
          self.scannedCodes.push(data.text + '/' + self.run);
        }
      )
    }
  }
  public async  alertRun() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ingrese el RUN',
      inputs: [
        {
          name: 'run',
          type: 'number',
          placeholder: 'Ingrese un número',
        },

      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            console.log(alertData.run);
            this.run = alertData.run;
          }
        }
      ]
    });

    alert.present().then(() => {
      const firstInput: any = document.querySelector('ion-alert input');
      firstInput.focus();
      return;
    });;
  }
  scans(){
    if (!this.run) {
      this.alertRun();
    }
    else {
    
          this.scannedCodes.push(this.data + '/' + this.run);
      
    }
  }
}
