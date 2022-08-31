import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonService } from '../../shared/services/common.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, FormsModule],
  declarations: [HomeComponent],
  providers: [CommonService],
})
export class HomeModule {}
