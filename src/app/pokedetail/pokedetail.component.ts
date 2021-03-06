import { Component, OnInit, Input } from '@angular/core';
import { PokeDetail } from '../pokemon';
import { PokeShareInfoService } from '../poke-share-info.service'

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css']
})
export class PokedetailComponent implements OnInit {

    @Input('detail')
    detail: PokeDetail

    constructor(private pokeShareInfoService : PokeShareInfoService) { }

    ngOnInit(): void {
        console.log(this.pokeShareInfoService.getValue());
    }

}
