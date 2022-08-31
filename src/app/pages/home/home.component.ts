import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  subscription: Subscription;
  errorMsg: string = null;
  constructor(private commonService: CommonService) {}
  ngOnInit() {}

  fetchAutoCompleteSuggestionData(search_text) {
    search_text = 'permanent roommates';
    this.subscription = this.commonService
      .getAutoCompleteSuggestion(search_text)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
