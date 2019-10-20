import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule, MatMenuModule, MatToolbarModule, MatListModule, MatIconModule, MatProgressBarModule, MatButtonModule} from '@angular/material';
import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  exports: [
    MatMenuModule,
    MatSidenavModule,
    NavbarComponent,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class SharedModule { }
