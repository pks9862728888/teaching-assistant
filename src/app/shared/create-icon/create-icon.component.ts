import { Component, Input } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'create-icon',
  templateUrl: './create-icon.component.html',
  styleUrls: ['./create-icon.component.css']
})
export class CreateIconComponent {

  faIcon = faCircleCheck;

  @Input() iconSizeInPx: number;
  @Input() cssColorCode: string;

  constructor() {
    this.iconSizeInPx = 25;
    this.cssColorCode = "#fcad03"
  }

}
