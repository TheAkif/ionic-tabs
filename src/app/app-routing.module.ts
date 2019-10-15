import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DetailsComponent } from './details/details.component';
import { ShameerComponent } from './shameer/shameer.component';
import { AkifComponent } from './akif/akif.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path : 'tabs', component: TabsComponent,
    children : [
      
      {
        path : 'contacts',
        component : ContactsComponent
      },
      {
        path : 'details',
        component : DetailsComponent
      },
      {
        path : 'shameer',
        component : ShameerComponent
      },
      {
        path : 'akif',
        component : AkifComponent
      },
      
    ],
  },
  {
    path: '',
    redirectTo: '/app/tabs/contacts',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
