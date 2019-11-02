import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  getAlbum(id:number);
  constructor(private _http: Http) { }

}
