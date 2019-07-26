import { Injectable } from '@angular/core';
import { Permiso } from './../Entidades/PermisoEntidad';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {MessageService} from './../mensajes/mensaje';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'}) };

@Injectable({
    providedIn: 'root'
})
export class PermisoService {
    url = 'http://localhost:5000'
    constructor(
        private http: HttpClient,
        private messageService: MessageService,
    ) {
        var url = 'http://localhost:5000'
    }

    getPermisos(): Observable<Permiso[]> {
        let getPermisosUrl = this.url+'/obtenerPermisos';
        return this.http.get<Permiso[]>(getPermisosUrl,httpOptions)
            .pipe(tap(_ => this.log('fetched Error Al Cargar')),
                catchError(this.handleError<Permiso[]>('getPermisos', []))
            );
    }

    addRoom(room: Permiso): Observable<Permiso> {
        let postRoomUrl = 'http://localhost:30451/room/saveRoom';
        return this.http.post<Permiso>(postRoomUrl, room, httpOptions)
            .pipe(
                catchError(this.handleError('addRoom', room))
            );
    }
    deletePermiso(id: number): Observable<{}> {
        let deleteUrl = this.url+'/eliminarPermiso/'+id;
        return this.http.delete(deleteUrl, httpOptions)
            .pipe(
                catchError(this.handleError('Permiso borrado'))
            );
    }
    updateRoom(room: Permiso): Observable<Permiso> {
        let updateUrl = 'http://localhost:30451/room/putRoom';
        return this.http.put<Permiso>(updateUrl, room, httpOptions)
            .pipe(
                catchError(this.handleError('updateRoom', room))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.log(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

}