import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // @Output for passing something out of the component
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  // parametr do tego z # potrzebny
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
//  onAddServer() {
//     this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
//   }
//
//   onAddBlueprint() {
//     this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
//   }

}
