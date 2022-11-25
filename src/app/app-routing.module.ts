import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customers-list', component: CustomersListComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/customers' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
