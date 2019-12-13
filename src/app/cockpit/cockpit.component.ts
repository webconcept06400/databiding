import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  //Permet de créer un event personnalisé que pourra écouter le composant parent
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput', {static:true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
