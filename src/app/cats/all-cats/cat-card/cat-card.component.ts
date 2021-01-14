import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Cat } from 'src/app/shared/models/cat.model';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit, OnChanges {

  @Input()
  cat!: Cat;
  catImg: string = ''
  constructor() {
   }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.cat) {
      this.catImg = this.cat.image
    }
  }

  setDefaultPic() {
    this.catImg = "http://placekitten.com/200/200"
  }
}
