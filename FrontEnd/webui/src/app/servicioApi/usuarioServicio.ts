import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './../mensajes/mensaje';
import { Usuario } from '../Entidades/UsuarioEntidad';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) };

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    url = 'http://192.168.0.26:5000'
    constructor(
        private http: HttpClient,
        private messageService: MessageService,
    ) {
    }

    getUsuarios(): Observable<Usuario[]> {
        let getUsuariosUrl = this.url + '/obtenerUsuarios';
        return this.http.get<Usuario[]>(getUsuariosUrl, httpOptions)
            .pipe(tap(_ => this.log('fetched Error Al Cargar')),
                catchError(this.handleError<Usuario[]>('getUsuarios', []))
            );
    }

    guardarUsuario(usuario: Usuario): Observable<Usuario> {
        let postRoomUrl = this.url+'/guardarUsuario';
        return this.http.post<Usuario>(postRoomUrl, usuario, httpOptions)
            .pipe(
                catchError(this.handleError('guardarUsuario', usuario))
            );
    }
    deleteUsuario(id: number): Observable<{}> {
        let deleteUrl = this.url + '/eliminarUsuario/' + id;
        return this.http.delete(deleteUrl, httpOptions)
            .pipe(
                catchError(this.handleError('Usuario borrado'))
            );
    }
    updateRoom(room: Usuario): Observable<Usuario> {
        let updateUrl = 'http://localhost:30451/room/putRoom';
        return this.http.put<Usuario>(updateUrl, room, httpOptions)
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