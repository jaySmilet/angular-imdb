import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit ,OnDestroy {
  subscription: Subscription;
  errorMsg: string = null;
  autoCompleteSuggestionData:any[]=[];
  search_txt:string;
  constructor(private commonService: CommonService) {
  }
  ngOnInit() {}

  fetchAutoCompleteSuggestionData(search_text) {
    this.subscription = this.commonService
      .getAutoCompleteSuggestion(this.search_txt)
      .subscribe(
        (res) => {
          console.log(res);
          this.autoCompleteSuggestionData = res.d;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
