import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})

export class ListComponent {

  //Datos que se usan por defecto

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    }];

  @Output()
  public OnDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id?: string ):void {
    if ( !id ) return;
    this.OnDelete.emit( id );
  }
  
}
