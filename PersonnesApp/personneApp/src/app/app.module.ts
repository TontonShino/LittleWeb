import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule , MatCheckboxModule, MatTable, } from '@angular/material';
import { MatMenuModule, MatTableModule, MatIconModule } from '@angular/material';
import { CreatepersonneComponent } from './createpersonne/createpersonne.component';
import {FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    PersonnesComponent,
    CreatepersonneComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTableModule,
    MatIconModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
