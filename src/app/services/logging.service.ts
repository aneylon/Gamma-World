import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logs: string[] = []
  
  // log, dir, info, error, warn

  add(log: string){
    this.logs.push(log)
  }

  clear() {
    this.logs = []
  }
}
