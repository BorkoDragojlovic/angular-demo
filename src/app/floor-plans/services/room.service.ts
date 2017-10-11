import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FeatureCollection } from '../shared/feature-collection.model';
import { AbstractRestService } from '../../shared/shared.service';

const url: string = 'api/rooms';

@Injectable()
export class RoomService extends AbstractRestService<FeatureCollection>{
  constructor( http: Http) { 
    super(http, url);
  }
}