import { Injectable } from '@angular/core';

////use below line while working with angular
const electron=<any>window;

////use below line while working with electron
//const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class ElectronIpcTestService {

  asyncReplyResult
  
  constructor() {

    ////electron -> angular
    // electron.ipcRenderer.on('asynchronous-reply', (event, arg) => {
    //   console.log('async')
    //   console.log(arg) // prints "pong"
    //   this.asyncReplyResult=arg
    // })
    
   }

  // test(val) {
  //   //console.log(electron.ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"
  //   //angular-> electron
  //   electron.ipcRenderer.send('asynchronous-message', val)
  // }

  setCookie(cookie){
    return electron.ipcRenderer.sendSync('set-cookie-sync', cookie)
  }

  getCookie(filter){
    return electron.ipcRenderer.sendSync('get-cookie-sync', filter)
  }

  
}
