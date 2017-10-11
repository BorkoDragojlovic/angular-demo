
export class InMemoryDataService {
    createDb() {
        const products = [
            { id: 1, productName: "Carpet" },
            { id: 2, productName: "Sofa" }
        ];
        const customers = [
            { id: 1, firstName: "Michael", lastName: "De Santa" },
            { id: 2, firstName: "Franklin", lastName: "Clinton" },
            { id: 3, firstName: "Trevor", lastName: "Phillips" },
            { id: 4, firstName: "Steve", lastName: "Haines" }
        ];
        const buildings = [
            {
                id: 1,
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
            }
        ];

        const rooms = [
            {
                id: 1,
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
            }
        ]
        const db = { products, customers, buildings, rooms };
        return db;
    }
}