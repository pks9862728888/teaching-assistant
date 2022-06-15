import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  arraySize: number;

  constructor() {
    this.arraySize = 0;
  }

  ngOnInit(): void {
  }

}
