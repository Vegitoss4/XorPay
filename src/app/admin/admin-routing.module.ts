import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { MappingComponent } from '../mapping/mapping.component';
import { AdminComponent } from './admin.component';

const routes:Routes = [
  { path:'', component: AdminComponent,
  children:[
    { path: '', loadChildren: () => import('../mapping/mapping.module').then(m => m.MappingModule) },
    // { path: '', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
    {path:'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'scheduler', loadChildren: () => import('../scheduler/scheduler.module').then(m => m.SchedulerModule) },
    { path: 'mapping', loadChildren: () => import('../mapping/mapping.module').then(m => m.MappingModule) },
  ]
 }
]
@NgModule({
 
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
