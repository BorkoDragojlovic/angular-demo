import { FeatureCollection } from '../floor-plans/shared/feature-collection.model';

export const BUILDING_DATA: FeatureCollection = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [10, -80],
                    [-80, -80],
                    [-80, 80],
                    [40, 80],
                    [40, -20],
                    [100, -20],
                    [100, -80],
                    [30, -80],
                    [30, -74],
                    [34, -74],
                    [34, -68],
                    [40, -68],
                    [40, -74],
                    [94, -74],
                    [94, -26],
                    [40, -26],
                    [40, -60],
                    [34, -60],
                    [34, 74],
                    [-74, 74],
                    [-74, 30],
                    [10, 30],
                    [10, 24],
                    [-74, 24],
                    [-74, -24],
                    [10, -24],
                    [10, -30],
                    [-74, -30],
                    [-74, -74],
                    [10, -74]
                ]]
            }
        }
    ]
};