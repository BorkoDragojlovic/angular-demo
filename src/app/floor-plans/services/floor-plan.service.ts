import { Injectable } from '@angular/core';
import { BUILDING_DATA } from '../../mock-data/mock.building-data';
import { ROOMS_DATA } from '../../mock-data/mock.rooms-data';
import { FeatureCollection } from '../shared/feature-collection.model';


@Injectable()
export class FloorPlanService {
    getBuildingData(): FeatureCollection {
        return BUILDING_DATA;
    }
    getRoomsData(): FeatureCollection {
        return ROOMS_DATA;
    }
}
