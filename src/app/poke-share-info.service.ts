import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  constructor() { }

  value: string;

  getValue() : string {
      return this.value;
  }

  setValue(value: string) {
      this.value = value;
  }
}
