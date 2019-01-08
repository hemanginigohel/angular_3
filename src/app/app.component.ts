import { Component, OnChanges, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'app';
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges(){
    console.log('ngOnChanges');
  }
  ngDoCheck(){
    console.log('ngDoCheck');
  }
  ngOnDestroy(){
    console.log('ngOnDestory');
  }
}
