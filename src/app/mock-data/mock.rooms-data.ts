import { FeatureCollection } from '../floor-plans/shared/feature-collection.model';

export const ROOMS_DATA: FeatureCollection = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: {
                name: "Room 1",
                square: 576,
                customer: 1
            },
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [-74, -30],
                    [34, -30],
                    [34, -74],
                    [-74, -74]
                ]]
            }
        }, {
            type: "Feature",
            properties: {
                name: "Room 2",
                square: 600,
                customer: 2
            },
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [-74, 24],
                    [34, 24],
                    [34, -24],
                    [-74, -24]
                ]]
            }
        }, {
            type: "Feature",
            properties: {
                name: "Room 3",
                square: 540,
                customer: 3
            },
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [-74, 74],
                    [34, 74],
                    [34, 30],
                    [-74, 30]
                ]]
            }
        }, {
            type: "Feature",
            properties: {
                name: "Room 4",
                square: 288,
                customer: 4
            },
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [40, -26],
                    [94, -26],
                    [94, -74],
                    [40, -74]
                ]]
            }
        }
    ]
};