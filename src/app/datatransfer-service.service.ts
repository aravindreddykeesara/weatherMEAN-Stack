import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DatatransferServiceService {

  private messageSource = new BehaviorSubject<boolean>(false);
  currentStatus = this.messageSource.asObservable();

  constructor() { }

  loginStatus(status: boolean) {
      this.messageSource.next(status);
  }

}
