import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path:'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m =>m.AdminModule)}

 // { path: '', pathMatch: 'full', redirectTo: 'login'},
 // { path: 'login', component: LoginComponent },
  //{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
