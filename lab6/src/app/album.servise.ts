import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './models';

@Injectable({
    providedIn: 'root'
  })
  export class AlbumService {
    BASE_URL: string = 'https://jsonplaceholder.typicode.com/albums'
  
    constructor(private client: HttpClient) { }
    getAlbums(): Observable<Album[]> {
      return this.client.get<Album[]>(`${this.BASE_URL}`)
    }
  
    getAlbum(id: number): Observable<Album> {
      return this.client.get<Album>(`${this.BASE_URL}/${id}`)
    }
  
    addAlbum(album: Album): Observable<Album> {
      return this.client.post<Album>(`${this.BASE_URL}`, album);
    }
  
    deleteAlbum(albumId: number) {
      return this.client.delete(`${this.BASE_URL}/${albumId}`);
    }
  
    updateAlbum(updatedAlbum: Album){
      return this.client.put(`${this.BASE_URL}/${updatedAlbum.id}`,updatedAlbum)
    }
  }
