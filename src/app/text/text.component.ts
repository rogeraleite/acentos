import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  raw_text = "";
  cooked_text = "cccc";
  constructor() { }

  ngOnInit(): void {

  }

  parseText(value: string){
    this.raw_text = value
    console.log(this.raw_text);
    this.cooked_text = this.raw_text+" banana"
  }


}
