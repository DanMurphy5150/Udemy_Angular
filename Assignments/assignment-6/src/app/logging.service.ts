import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status has changed. New Server Status: ' + status);
  }
}
