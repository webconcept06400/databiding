import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input('srvElement') element:{type: string, name: string, content: string};//@input permet au composant parent de binder sur cet élément
  @Input() name: string;

  constructor() { 
    console.log('Constructor called!');
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('OnChanges called!');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit called!');
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('doCheck called!');
  }
}
