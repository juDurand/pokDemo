import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeDetail } from '../pokemon';
import { PokeAPIServiceService as PokeAPIService} from '../poke-apiservice.service'
import { PokeShareInfoService } from '../poke-share-info.service'

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIService, PokeShareInfoService]
})
export class MyComponentComponent implements OnInit {

    id:string = '';
    selectedPokeId:string = '1';
    searchPokeName:string='';

    pokeList: Pokemon[] = [];
    pokeDetail: PokeDetail;

    constructor(private pokeService : PokeAPIService, private pokeShareInfoService : PokeShareInfoService) {
    }

    ngOnInit(): void {
        this.pokeService.getPokemon().subscribe((data) => {
            data.results.forEach((e,index) => {
                this.pokeList.push(new Pokemon(String(index), e.name));
            })
        });
    }

    go() {
        this.pokeShareInfoService.setValue(this.selectedPokeId);
        if (this.selectedPokeId != ''){
            this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe((data) => this.pokeDetail = data);
        }
    }

}
