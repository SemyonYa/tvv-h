import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from 'src/models/item';
import { Place } from 'src/models/place';
import { Project } from 'src/models/project';
import { Region } from 'src/models/region';
import { SearchResponse } from 'src/models/search-response';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url: string = `${environment.baseUrl}/data`;
  constructor(
    private http: HttpClient,
  ) { }

  getInfo(): Observable<string> {
    return this.http.get<string>(`${this.url}/info`);
  }

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.url}/regions`);
    // .pipe(
    //   map(_items => _items.map(_item => _item as Region))
    // )
  }
  getRegion(regionId: number): Observable<Region> {
    return this.http.get<Region>(`${this.url}/regions/${regionId}`);
  }
  getPlaces(regionId: number): Observable<Place[]> {
    return this.http.get<Place[]>(
      `${this.url}/places`,
      {
        params: new HttpParams()
          .set('regionId', regionId)
      }
    );
  }
  getPlace(placeId: number): Observable<Place> {
    return this.http.get<Place>(`${this.url}/places/${placeId}`);
  }

  getProjects(placeId: number): Observable<Project[]> {
    return this.http.get<Project[]>(
      `${this.url}/projects`,
      {
        params: new HttpParams()
          .set('placeId', placeId)
      }
    );
  }

  getProject(projectId: number): Observable<Project> {
    return this.http.get<Project>(`${this.url}/projects/${projectId}`);
  }

  getProjectTypes(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}/project-types`);
  }

  search(value: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(
      `${this.url}/search`,
      { params: new HttpParams().set('value', value) }
    )
  }


  ///
  /// TODO: FAKE
  ///
  // data(): Observable<{ id: number, name: string, brief: string, description: string }[]> {
  //   return of([1, 2, 3, 4, 5].map(i => ({ id: i, name: `Name ${i}`, brief: `Brief ${i}`, description: `Description ${i}` })));
  // }

  // dataItem(): Observable<{ id: number, name: string, brief: string, description: string }> {
  //   return of({ id: 1000000, name: `Name test`, brief: `Brief test`, description: `Description test` })
  //     .pipe(
  //       delay(1000),
  //     );
  // }
}
