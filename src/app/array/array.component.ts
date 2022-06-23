import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent {

  arrayForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.arrayForm = this.fb.group({
      arraySize: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      startIdx: [0, [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  createArray(): void {
    if (this.arrayForm.valid) {
      console.log(this.arrayForm.value);
    }
  }

  getCreateButtonColor() : string {
    if (this.arrayForm.valid) {
        return 'rgb(252, 186, 3)';
    }
    return 'rgba(252, 186, 3, 0.5)';
  }


}
