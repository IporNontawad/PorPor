import { BrowserModule,TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TransferHttpService} from "@gorniv/ngx-transfer-http";
import {CommomServiceService} from "./commom-service.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TransferHttpService, TransferState, CommomServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
