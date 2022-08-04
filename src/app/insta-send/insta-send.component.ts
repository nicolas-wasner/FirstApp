import { Component, OnInit, Input } from '@angular/core';
import {InstaSend} from '../models/insta-send-model';

@Component({
  selector: 'app-insta-send',
  templateUrl: './insta-send.component.html',
  styleUrls: ['./insta-send.component.scss']
})
export class InstaSendComponent implements OnInit{

  @Input() instaSend!: InstaSend;

  buttonText! : string;

  ngOnInit() {
    this.buttonText = "God Damn";
  }

  onLike(){
    if (this.buttonText == "God Damn"){
      this.instaSend.like++;
      this.buttonText = 'Miss click'
    }
    else {
      this.instaSend.like--;
      this.buttonText = 'God Damn'
    }

  }
}
