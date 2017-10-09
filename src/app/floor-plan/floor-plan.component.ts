import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxVectorMapModule } from 'devextreme-angular';
import { projection } from 'devextreme/viz/vector_map/projection';

import { FeatureCollection, FloorPlanService } from './floor-plan.service';

@Component({
    selector: 'my-app',
    providers: [ FloorPlanService ],
    templateUrl: './floor-plan.component.html',
    styleUrls: ['./floor-plan.component.css']
})

export class FloorPlanComponent {
    projection: any;
    roomsData: FeatureCollection;
    buildingData: FeatureCollection;
    
    constructor(service: FloorPlanService) {
        this.roomsData = service.getRoomsData();
        this.buildingData = service.getBuildingData();
        this.projection = projection({
            to: function (coordinates) {
                return [coordinates[0] / 100, coordinates[1] / 100];
            },

            from: function (coordinates) {
                return [coordinates[0] * 100, coordinates[1] * 100];
            }
        });
    }

    customizeTooltip(arg:any) {
        if(arg.layer.name === "rooms")
            return {
                text: "Square: " + arg.attribute("square") + " ft&#178"
            };
    }
}