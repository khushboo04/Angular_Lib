import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  data =  [{
    "name": "Carrier Compatibility",
    "priority": 1,
    "value": "Carrier_Compatibility",
    "filters": [{
        "controlType": null,
        "level": 2,
        "name": "CDMA Unlocked",
        "priority": 1,
        "value": "CDMA_Unlocked",
        "completed": false
        }, {
        "controlType": null,
        "level": 2,
        "name": "GSM Unlocked",
        "priority": 1,
        "value": "GSM_Unlocked",
        "completed": false
    }, {
        "controlType": null,
        "level": 2,
        "name": "Page Plus",
        "priority": 1,
        "value": "Page_Plus",
        "completed": false
    }, {
        "controlType": null,
        "level": 2,
        "name": "Total Wireless",
        "priority": 1,
        "value": "Total_Wireless",
        "completed": false
    }, {
        "controlType": null,
        "level": 2,
        "name": "Net 10",
        "priority": 1,
        "value": "Net_10",
        "completed": false
    }]
},
{
    "name": "Brand",
    "priority": 2,
    "value": "Brand",
    "filters": [{
        "controlType": null,
        "level": 2,
        "name": "Alcatel",
        "priority": 1,
        "value": "Alcatel",
        "completed": false
        }, {
        "controlType": null,
        "level": 2,
        "name": "Apple",
        "priority": 1,
        "value": "Apple",
        "completed": false
    }, {
        "controlType": null,
        "level": 2,
        "name": "BLU",
        "priority": 1,
        "value": "BLU",
        "completed": false
    }, {
        "controlType": null,
        "level": 2,
        "name": "Coolpad",
        "priority": 1,
        "value": "Coolpad",
        "completed": false
    }, {
        "controlType": null,
        "level": 2,
        "name": "LG",
        "priority": 1,
        "value": "LG",
        "completed": false
    }]
  }];
  selectionData: any;
  formData: any;

  ngOnInit() {
  }

  displayFormData(formData) {
    this.formData = formData;
  }

  displaySelectionData(selectionData) {
    this.selectionData = selectionData;
  }

}
