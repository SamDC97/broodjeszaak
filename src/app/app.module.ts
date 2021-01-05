import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BroodjeszaakService } from './broodjeszaak.service';
import { SausComponent } from './saus/saus.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SausComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BroodjeszaakService],
  bootstrap: [AppComponent]
})
export class AppModule { }
