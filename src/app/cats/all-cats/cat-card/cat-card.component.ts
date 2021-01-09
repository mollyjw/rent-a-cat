import { Component, Input, OnInit } from '@angular/core';
import { Cat } from 'src/app/shared/models/cat.model';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
