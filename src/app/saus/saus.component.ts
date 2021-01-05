import { Component, OnInit } from '@angular/core';
import { BroodjeszaakService } from '../broodjeszaak.service';
import { ISaus } from '../saus';

@Component({
  selector: 'app-saus',
  templateUrl: './saus.component.html',
  styleUrls: ['./saus.component.css']
})
export class SausComponent implements OnInit {

    public allSaus: ISaus[] = [];
    public sausById: ISaus = <ISaus>{};

    hasSaus = false;

    sausId: number = 0;
    sausName: string = "";
    sausPrice: number = 0;
    sausDescription: string = "";

    constructor(private _broodjeszaakService: BroodjeszaakService) { }

    ngOnInit(): void {
      this._broodjeszaakService.getAllSaus()
        .subscribe(data => this.allSaus = data);
    }

    getSausById(id: string){
    var idAsNumber = Number(id);
      this._broodjeszaakService.getSausById(idAsNumber)
            .subscribe(data => this.sausById = data);

      this.sausId = this.sausById.id;
      this.sausName = this.sausById.name;
      this.sausPrice = this.sausById.price;
      this.sausDescription = this.sausById.description;
      this.hasSaus = true;
    }

}
