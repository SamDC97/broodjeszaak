import { Component, OnInit } from '@angular/core';
import { BroodjeszaakService } from '../broodjeszaak.service';
import { IBrood } from '../brood';

@Component({
  selector: 'app-brood',
  templateUrl: './brood.component.html',
  styleUrls: ['./brood.component.css']
})
export class BroodComponent implements OnInit {

  public allBrood: IBrood[] = [];
  public broodById: IBrood = <IBrood>{};

  hasBrood = false;

  broodId: number = 0;
  broodName: string = "";
  broodPrice: number = 0;
  broodDescription: string = "";

  constructor(private _broodjeszaakService: BroodjeszaakService) { }

  ngOnInit(): void {
    this._broodjeszaakService.getAllBrood()
      .subscribe(data => this.allBrood = data);
  }

  getBroodById(id: string){
  var idAsNumber = Number(id);
    this._broodjeszaakService.getBroodById(idAsNumber)
          .subscribe(data => this.broodById = data);

    this.broodId = this.broodById.id;
    this.broodName = this.broodById.name;
    this.broodPrice = this.broodById.price;
    this.broodDescription = this.broodById.description;
    this.hasBrood = true;
  }

}
