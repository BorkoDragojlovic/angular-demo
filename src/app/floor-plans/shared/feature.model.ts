import { FeatureProperty } from './feature-property.model';
import { FeatureGeometry } from './feature-geometry.model';

export class Feature {
    type: string;
    properties?: FeatureProperty;
    geometry: FeatureGeometry;
}