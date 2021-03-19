import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { PokeServiceRes } from './pokemon';
import { PokeDetail } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {

    constructor(private http: HttpClient) {}

    getPokemon() :Observable<PokeServiceRes> {
        return this.http.get<PokeServiceRes>('https://pokeapi.co/api/v2/pokemon/');
    }

    getPokemonInfo( id:string ) :Observable<PokeDetail> {
        return this.http.get<PokeDetail>('https://pokeapi.co/api/v2/pokemon/'+(Number(id)+1)+'/' );
    }
}
