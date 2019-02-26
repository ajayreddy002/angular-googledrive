import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModuleWithProviders } from '@angular/core';
import { LoggedInGuard } from '../infrastructure/sessions/loggedInGuard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [LoggedInGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




// const appRoutes: Routes = [
//     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//     { path: 'signin', component: SignInComponent },
//     { path: 'dashboard', component: DashboardComponent,canActivate: [LoggedInGuard] }
// ];
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);