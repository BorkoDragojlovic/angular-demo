import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HasId } from './has-id.interface';

export abstract class AbstractRestService<T>{
    constructor(protected _http: Http, protected actionUrl: string) {
    }

    getAll(): Promise<T[]> {
        return this._http.get(this.actionUrl)
            .toPromise()
            .then((response) => {
                return response.json().data as T[];
            })
    }
    save(item: T): Promise<T> {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this._http
            .post(this.actionUrl, JSON.stringify(item), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete<T extends HasId>(item: T): Promise<Response> {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        const url = `${this.actionUrl}/${item.id}`;

        return this._http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
} 