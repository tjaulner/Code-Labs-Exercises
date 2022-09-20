import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  //template: `
    //<p>This is a warning, you are in danger!</p>`,
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
