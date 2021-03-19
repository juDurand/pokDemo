import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeAPIServiceService as PokeAPIService} from '../poke-apiservice.service'

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIService]
})
export class MyComponentComponent implements OnInit {

    id:string = '';
    selectedPokeId:string = '1';
    searchPokeName:string='';

    pokeList : Pokemon[] = [];

    constructor(private pokeService : PokeAPIService) {
    }

    ngOnInit(): void {
        this.pokeService.getPokemon().subscribe((data) => {
            data.results.forEach((e,index) => {
                this.pokeList.push(new Pokemon(index, e.name));
            })
        });
    }

    go() {
        console.log(this.selectedPokeId);
    }

}
