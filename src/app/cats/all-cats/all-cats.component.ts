import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/shared/models/cat.model';
import { CatService } from 'src/app/shared/services/cat.service';

@Component({
  selector: 'app-all-cats',
  templateUrl: './all-cats.component.html',
  styleUrls: ['./all-cats.component.scss']
})
export class AllCatsComponent implements OnInit {
  allCats: Cat[] = []

  constructor(
    private catService: CatService,
  ) { }

  ngOnInit(): void {
    this.showAllCats()
  }

  showAllCats() {
    this.catService.getAllCats().subscribe(allCats => {
      if (allCats) {
        this.allCats = allCats
      }
    }, error => {
      if (error) {
        console.log(error)
      }
    })
  }
}
