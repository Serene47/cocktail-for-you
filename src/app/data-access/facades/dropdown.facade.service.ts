import { Injectable } from '@angular/core';
import { COCKTAIL_ALCOHOL_STATUS } from '../models/constants/cocktail.constants';
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
      value: COCKTAIL_ALCOHOL_STATUS.ALCOHOLIC
    }, {
      label: 'Non alcoholic',
      value: COCKTAIL_ALCOHOL_STATUS.NON_ALCOHOLIC
    }
  ];
}
