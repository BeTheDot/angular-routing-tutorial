import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import component that will have links here
import { TabOneComponent } from './devlog/tab-one/tab-one.component';
import { TabTwoComponent } from './devlog/tab-two/tab-two.component';

const routes: Routes = [
  { path: 'devlog/tab-one-component', component: TabOneComponent },
  { path: 'devlog/tab-two-component', component: TabTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
