import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // tslint:disable-next-line:component-selector
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl:  './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  string = 'Now';
  serverCreationStatus = 'Server is not created';
  serverName = 'Testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created ! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

}
