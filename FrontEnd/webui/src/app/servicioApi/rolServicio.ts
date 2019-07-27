import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './../mensajes/mensaje';
import { Rol } from '../Entidades/RolEntidad';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) };

@Injectable({
    providedIn: 'root'
})
export class RolService {
    url = 'http://192.168.43.17:5000'
    constructor(
        private http: HttpClient,
        private messageService: MessageService,
    ) {
    }

    getRoles(): Observable<Rol[]> {
        let getRolesUrl = this.url + '/obtenerRoles';
        return this.http.get<Rol[]>(getRolesUrl, httpOptions)
            .pipe(tap(_ => this.log('fetched Error Al Cargar')),
                catchError(this.handleError<Rol[]>('getPermisos', []))
            );
    }

    saveRol(rol: Rol): Observable<Rol> {
        let postRoomUrl = this.url+'/guardarRol';
        return this.http.post<Rol>(postRoomUrl, rol, httpOptions)
            .pipe(
                catchError(this.handleError('saveRol', rol))
            );
    }
    deleteRol(id: number): Observable<{}> {
        let deleteUrl = this.url + '/eliminarRol/' + id;
        return this.http.delete(deleteUrl, httpOptions)
            .pipe(
                catchError(this.handleError('Rol borrado'))
            );
    }
    updateRoom(room: Rol): Observable<Rol> {
        let updateUrl = 'http://localhost:30451/room/putRoom';
        return this.http.put<Rol>(updateUrl, room, httpOptions)
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