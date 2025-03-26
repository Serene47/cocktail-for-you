import { Component, Input } from '@angular/core';
import { BadgeVariant } from './models/badge.types';

@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) variant!: BadgeVariant;
}
