import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
 import { FormsModule } from '@angular/forms';
 import { HttpClientModule } from '@angular/common/http';
 import {MatSliderModule} from '@angular/material/slider';
 import {MatCheckboxModule} from '@angular/material/checkbox';
 import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     HttpClientModule,
     MatSliderModule,
     MatCheckboxModule,
     MatFormFieldModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
