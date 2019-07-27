import { Injectable } from '@angular/core';
import { Permiso } from './../Entidades/PermisoEntidad';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {MessageService} from './../mensajes/mensaje';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };

@Injectable({
    providedIn: 'root'
})
export class PermisoService {
    url = 'http://192.168.43.17:5000'
    constructor(
        private http: HttpClient,
        private messageService: MessageService,
    ) {
    }

    getPermisos(): Observable<Permiso[]> {
        let getPermisosUrl = this.url+'/obtenerPermisos';
        return this.http.get<Permiso[]>(getPermisosUrl,httpOptions)
            .pipe(tap(_ => this.log('fetched Error Al Cargar')),
                catchError(this.handleError<Permiso[]>('getPermisos', []))
            );
    }

    savePermiso(permiso: Permiso): Observable<Permiso> {
        let postRoomUrl = this.url+'/guardarPermiso';
        return this.http.post<Permiso>(postRoomUrl, permiso, httpOptions)
            .pipe(
                catchError(this.handleError('savePermiso', permiso))
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