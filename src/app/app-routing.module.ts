import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PastTrialsComponent } from './components/past-trials/past-trials.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { AuthComponent } from './components/auth/auth.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'past-trials', component: PastTrialsComponent },
  { path: 'how-it-works', component: HowItWorksComponent }, 
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: '/' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
