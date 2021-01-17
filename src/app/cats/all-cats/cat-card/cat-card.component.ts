import { Attribute, Component, OnInit } from '@angular/core';
import { Attributes } from 'src/app/shared/models/attributes.model';
import { Cat } from 'src/app/shared/models/cat.model';
import { CatService } from 'src/app/shared/services/cat.service';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {
  cat: Cat | undefined
  attributes: Attributes | undefined

  constructor(private catService: CatService) {
   }

  ngOnInit(): void {}

  // ngOnChanges() {
  //   if (this.cat) {
  //     this.catImg = this.cat.image
  //   }
  // }

  setDefaultPic(attributes: Attributes) {
    if (attributes.pictureThumbnailUrl === null || attributes.pictureThumbnailUrl === undefined || attributes.pictureThumbnailUrl === "") {
      return "http://placekitten.com/200/200"
    }
    return attributes.pictureThumbnailUrl
  }

}
