import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponentComponent } from './basic-component/basic-component.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
                          {path:"BasicExample",component:BasicComponentComponent},
                          {path:"NgIfExample",component:NgIfExampleComponent},
                          {path:"**",component:PageNotFoundComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
