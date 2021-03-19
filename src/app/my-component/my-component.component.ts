import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

    id:string = '';
    selectedPokeId:string = '1';
    searchPokeName:string='';

    pokeList : Pokemon[] = [];

    constructor() {
        this.pokeList.push(new Pokemon('1', 'pikachu'));
        this.pokeList.push(new Pokemon('2', 'bulbasaur'));
        this.pokeList.push(new Pokemon('3', 'ivysaur'));
        this.pokeList.push(new Pokemon('4', 'venusaur'));
    }

    ngOnInit(): void {
    }

}
