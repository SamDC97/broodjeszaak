import { Component, OnInit } from '@angular/core';
import { BroodjeszaakService } from '../broodjeszaak.service';
import { IBeleg } from '../beleg';

@Component({
  selector: 'app-beleg',
  templateUrl: './beleg.component.html',
  styleUrls: ['./beleg.component.css']
})
export class BelegComponent implements OnInit {

  public allBeleg: IBeleg[] = [];
  public belegById: IBeleg = <IBeleg>{};

  hasBeleg = false;

  belegId: number = 0;
  belegName: string = "";
  belegPrice: number = 0;
  belegDescription: string = "";


  constructor(private _broodjeszaakService: BroodjeszaakService) { }

  ngOnInit(): void {
    this._broodjeszaakService.getAllBeleg()
        .subscribe(data => this.allBeleg = data);
  }

  getBelegById(id: string){
    var idAsNumber = Number(id);
      this._broodjeszaakService.getBelegById(idAsNumber)
            .subscribe(data => this.belegById = data);

      this.belegId = this.belegById.id;
      this.belegName = this.belegById.name;
      this.belegPrice = this.belegById.price;
      this.belegDescription = this.belegById.description;
      this.hasBeleg = true;
    }

}
