import {Component, OnInit} from '@angular/core';
import {InstaSend} from "./models/insta-send-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myInsta!: InstaSend;
  myInsta1!: InstaSend;
  myInsta2!: InstaSend;

  ngOnInit() {
    this.myInsta = {
      title: 'Smile',
      description: 'Une photo pour sourire',
      imageUrl: 'https://images.unsplash.com/photo-1659542216885-dcce5ca1de92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      like: 33,
      location: 'Aix-en-Provence'
    };
    this.myInsta1 = {
      title: 'Smile',
      description: 'Une photo pour sourire',
      imageUrl: 'https://images.unsplash.com/photo-1659602172431-bf5552ede8db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      like: 109
    };
    this.myInsta2 = {
      title: 'Smile',
      description: 'Une photo pour sourire',
      imageUrl: 'https://images.unsplash.com/photo-1657299143482-4f4ea1ebd71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      like: 59
    };
  }
}
