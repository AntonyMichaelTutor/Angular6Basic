import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponentComponent } from './basic-component/basic-component.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
                          {path:"BasicExample",component:BasicComponentComponent},
                          {path:"NgIfExample",component:NgIfExampleComponent},
                          {path:"NgSwitch",component:NgSwitchComponent},
                          {path:"NgFor",component:NgForComponent},
                          {path:"Pipe",component:PipeComponent},
                          {path:"CustomPipe",component:CustomPipeComponent},
                          {path:"AttributeDirective",component:AttributeDirectiveComponent},
                          {path:"Service",component:ServiceComponent},
                          {path:"**",component:PageNotFoundComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
