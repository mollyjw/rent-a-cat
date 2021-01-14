import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cat } from 'src/app/shared/models/cat.model';
import { CatService } from 'src/app/shared/services/cat.service';

@Component({
  selector: 'app-all-cats',
  templateUrl: './all-cats.component.html',
  styleUrls: ['./all-cats.component.scss']
})
export class AllCatsComponent implements OnInit {
  allCats: Cat[] = []
  private subs = new Subscription()

  constructor(
    private catService: CatService,
  ) { }

  ngOnInit(): void {
    this.showAllCats()
  }

  showAllCats() {
    this.subs.add(
      this.catService.getAllCats().subscribe(data => {
        if (data) {
          if (data.length) {
            this.allCats = data.map(x => new Cat(x))
          } else {
            this.allCats = []
          }
        }
      }, error => {
        if (error) {
          console.log(error)
        }
      })
    )
  }
}
