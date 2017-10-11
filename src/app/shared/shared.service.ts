import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HasId } from './has-id.interface';

export abstract class AbstractRestService<T>{
    constructor(protected http: Http, protected actionUrl: string) {
    }

    getAll(): Promise<T[]> {
        return this.http.get(this.actionUrl)
            .toPromise()
            .then((response) => {
                return response.json().data as T[];
            })
    }

    getById(id: number): Promise<T> {
        const url = `${this.actionUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as T)
            .catch(this.handleError);
    }

    create<T extends HasId>(item: T): Promise<T> {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.actionUrl, JSON.stringify(item), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update<T extends HasId>(item: T): Promise<T> {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .put(`${this.actionUrl}/${item.id}`, JSON.stringify(item), { headers: headers })
            .toPromise()
            .then(() => item)
            .catch(this.handleError);
    }

    delete<T extends HasId>(item: T): Promise<Response> {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .delete(`${this.actionUrl}/${item.id}`, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
} 