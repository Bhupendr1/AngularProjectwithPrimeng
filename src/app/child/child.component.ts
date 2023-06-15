import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectServieService } from '../project-servie.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() boxColor: string = '';
  @Input() placeholderText: string = '';
  @Output() InputValue = new EventEmitter()
  onCreate(inpval: HTMLInputElement) {
    if (inpval.value.length > 0) {
      this.InputValue.emit(inpval.value)
         }
  }
}
