import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataTransferService {
  private messageSource = new BehaviorSubject<boolean>(false);
  currentStatus = this.messageSource.asObservable();

  private uservalue = new BehaviorSubject<string>('');
  userEvalue = this.uservalue.asObservable();

  private favcitiesSource = new BehaviorSubject<any[]>([]);
  FavcitiesArrayValue = this.favcitiesSource.asObservable();


  constructor() { }

  userDataMethod(Email: string) {
    this.uservalue.next(Email);
  }

  loginStatusMethod(status: boolean) {
    this.messageSource.next(status);
  }

  favcitiesMethod(favcities: any[]) {
     this.favcitiesSource.next(favcities);
  }


}
