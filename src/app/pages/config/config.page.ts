import { Component, OnInit, ViewChild } from '@angular/core';

import { AlertController } from '@ionic/angular';
import {NavController} from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {


  constructor(public alertController: AlertController, 
    private navCtrl: NavController,
    private _formBuilder: FormBuilder,
    private barcodeScanner: BarcodeScanner){}


  variedades = ['Salvaje', 'Del valle', 'Tropical'];
  huertos = ['Huerto 1', 'Huerto 2', 'Huerto 3'];
  envases = ['Envase 1', 'Envase 2', 'Envase 3'];
  cuarteles = [ 'Cuartel 1', 'Cuartel 2', 'Cuartel 3', 'Cuartel4'];
  jefes = ['Jefe 1', 'Jefe 2', 'Jefe 3'];
  date: Date;
  Huerto: string;
  Cuartel: string;
  Especie: string;
  Variedad: string;
  Cuadrilla = 0;
  Envase: string;
  scannedCodes = [];
  Run = 0;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  equipoFormGroup:  FormGroup;
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      huerto: ['', Validators.required],
      cuartel: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      especie: ['', Validators.required],
      variedad: ['', Validators.required]
    });  
    this.equipoFormGroup = this._formBuilder.group({
      run: ['', Validators.required],
      cuadrilla: ['', Validators.required],
      personas:[',',Validators.required]
    });  
    setTimeout(() => {
      document.getElementById('date_input_config').click()
    }, 300);
  }

  public async  alertCuadrilla() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tamaño de cuadrilla',
      inputs: [
        {
          name: 'cuadrilla',
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
            // console.log(alertData.cuadrilla);
            this.Cuadrilla = alertData.cuadrilla;
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
            this.Run = alertData.run;
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

  scan() {
      const self = this;
      this.barcodeScanner.scan().then(
        data => {
          self.scannedCodes.push(data.text + '/' );
        }
      )
  }
}
