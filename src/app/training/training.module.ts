import { NgModule } from '@angular/core';
import { TrainingComponent } from './training.component';
import { TrainingRoutingModule } from './training.routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './../navigation/header/header.component';
import { SidenavListComponent } from '../navigation/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [TrainingComponent, HeaderComponent ,
    SidenavListComponent
  ],
  imports : [

  TrainingRoutingModule,
    SharedModule,
  ],
  providers: []
})

export class TrainingModule {}
