import { Feature } from './feature.model';
import {HasId} from '../../shared/has-id.interface';

export class FeatureCollection implements HasId{
    id: number;
    type: string;
    features: Feature[];
}