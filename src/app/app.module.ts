import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponentComponent } from './basic-component/basic-component.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponentComponent,
    NgIfExampleComponent,
    PageNotFoundComponent,
    NgSwitchComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
