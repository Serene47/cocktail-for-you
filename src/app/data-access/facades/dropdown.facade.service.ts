import { Injectable } from '@angular/core';
import { DropdownItem } from '../models/interfaces/dropdown.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DropdownFacadeService {

  alcoholicStatusDropdown: DropdownItem[] = [
    {
      label: 'No Preference',
      value: ''
    },
    {
      label: 'Alcoholic',
      value: 'Alcoholic'
    }, {
      label: 'Non alcoholic',
      value: 'Non alcoholic'
    }
  ];
}
