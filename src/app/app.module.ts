import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChildComponent } from './child/child.component';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ProjectServieService } from './project-servie.service';

import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    OrganizationChartModule,
    BadgeModule

  ],
  providers: [ProjectServieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
