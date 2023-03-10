import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { AlbumService } from '../album.servise';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{

  albums : Album[];
  newAlbum : Album;

  ngOnInit(): void {
    this.getAlbums()
  }

  constructor (private albumService : AlbumService){
    this.albums = []
    this.newAlbum = {} as Album;
  }

  getAlbums(){
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums
    })
  }

  addAlbum(){
    this.albumService.addAlbum(this.newAlbum).subscribe((album)=>{
      this.albums.unshift(album)
      this.newAlbum = {} as Album
    })
  }

  deleteAlbum(id : number){
    this.albums = this.albums.filter((x) => x.id != id)
    this.albumService.deleteAlbum(id)
  }
}
