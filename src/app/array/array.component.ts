import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent {

  arrayForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.arrayForm = this.fb.group({
      arraySize: [0],
      startIdx: [0]
    });
  }

  createArray(): void {
    console.log(this.arrayForm.value);
  }



}
