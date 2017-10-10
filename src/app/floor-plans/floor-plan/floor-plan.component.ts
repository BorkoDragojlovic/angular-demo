import { NgModule, Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxVectorMapModule } from 'devextreme-angular';
import { projection } from 'devextreme/viz/vector_map/projection';

import { FloorPlanService } from '../services/floor-plan.service';
import { FeatureCollection } from '../shared/feature-collection.model';
import { Customer } from '../../sales/shared/customer.model';

@Component({
    selector: 'mym-app',
    providers: [ FloorPlanService ],
    templateUrl: './floor-plan.component.html',
    styleUrls: ['./floor-plan.component.css']
})

export class FloorPlanComponent {
    projection: any;
    roomsData: FeatureCollection;
    buildingData: FeatureCollection;
    elementsLayers: any;
    @Input() customer: Customer;

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
        this.customizeLayers = this.customizeLayers.bind(this);
    }


    customizeTooltip(arg:any) {
        if(arg.layer.name === "rooms")
            return {
                text: "Square: " + arg.attribute("square") + " ft&#178"
            };
    }

    customizeLayers(elements: any) {
        this.elementsLayers = elements;
        elements.forEach((element: any) => {
            let id = element.attribute("customer");
            if(this.customer && id === this.customer.id) {
                element.applySettings({
                    color: "#000000",
                    hoveredColor: "#e0e000",
                    selectedColor: "#008f00"
                });
            } else {
                element.applySettings({
                    color: "transparent",
                    hoveredColor: "#e0e000",
                    selectedColor: "#008f00"
                });
            };
        });
    }

    ngOnChanges(){
        if(this.elementsLayers)
            this.customizeLayers(this.elementsLayers);
    }
}