import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'config',
        loadChildren: () => import('../config/config.module').then(m => m.ConfigPageModule)
      },
      {
        path: 'cosecha',
        loadChildren: () => import('../cosecha/cosecha.module').then(m => m.CosechaPageModule)
      },
      {
        path: 'transferencia',
        loadChildren: () => import('../transferencia/transferencia.module').then(m => m.TransferenciaPageModule)
      
      },
      {
        path: 'despacho',
        loadChildren: () => import('../despacho/despacho.module').then(m => m.DespachoPageModule)
      
      },
      {
        path: 'recepcion',
        loadChildren: () => import('../recepcion/recepcion.module').then(m => m.RecepcionPageModule)
      
      },
      {
        path: 'asignacion',
        loadChildren: () => import('../asignacion/asignacion.module').then(m => m.AsignacionPageModule)
      
      },
      {
        path: 'mas',
        loadChildren: () => import('../mas/mas.module').then(m => m.MasPageModule)
      
      },
      {
        path: '',
        redirectTo: '/tabs/config',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/config',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
