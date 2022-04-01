import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeParamType } from 'src/models/helpers/time-param.type';
import { Image } from 'src/models/image';
import { AbstractRestService } from './_abstract.rest.service';

@Injectable({
  providedIn: 'root'
})
export class ImageRestService extends AbstractRestService<Image> {
  route: string = '/images';

  constructor(http: HttpClient) {
    super(http);
  }

  upload(selectedFiles: File[]): Observable<Image[]> {
    let formData = new FormData();
    for (let index = 0; index < selectedFiles.length; index++) {
      formData.append(`files[]`, selectedFiles[index], `file${selectedFiles[index].name}`);
    }
    return this.http.post<Image[]>(`${this.url}`, formData);
  }

  setDeleted(ids: number[]) {
    return this.http.put(`${this.url}/set-deleted`, { ids });
  }

  setMain(projectId: number, imageId: number) {
    return this.http.post(
      `${this.url}/set-main`,
      { projectId, imageId },
      // { params: new HttpParams().set('projectImageId', projectImageId) }
    );
  }

  addPhotosToProject(projectId: number, imageIds: number[], time: TimeParamType): Observable<void> {
    return this.http.post<void>(`${this.url}/add-to-project`, { projectId, imageIds, time });
  }

  removePhotoFromProject(projectId: number, imageId: number) {
    return this.http.get(
      `${this.url}/remove-from-project`,
      {
        params: new HttpParams()
          .set('projectId', projectId)
          .set('imageId', imageId)
      }
    )
  }

  // getProductImageSet(productId: number): Observable<Image[]> {
  //   return this.http.get<Image[]>(`${this.url}/for-product/${productId}`);
  // }
}
