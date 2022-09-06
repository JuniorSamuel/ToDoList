import { Injectable, OnDestroy } from '@angular/core';
import { Event } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITask } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class IndexdDBService {

  public dato: Observable<any[]> | undefined= undefined;
  request = window.indexedDB.open(environment.dataBase.name, environment.dataBase.version); 
  constructor() {  this.init() }

  init() {
    this.request.onsuccess = (event) => { 
      console.log(`Databese "${environment.dataBase.name}" created.`);
      // this.getTaks();
    }
    this.request.onerror = (event) => { console.error(`Database error: ${event.target}`); }
    this.request.onupgradeneeded = (event: any) => {
      console.log(event)
      let db: IDBDatabase = event.target.result;
      let store = db.createObjectStore("List", { keyPath: 'id' });
    }
  }

  addTaks(t: ITask) {
    let db: IDBDatabase = this.request.result;

    const txn = db.transaction("List", "readwrite");
    txn.oncomplete = () => { db.close() }
    txn.onerror = (event) => { console.log(event) }
    console.log(txn)

    const store = txn.objectStore("List");
    let query = store.add(t);

    query.onsuccess = (event) => { console.log(event) }
    query.onerror = (event) => { console.log(event) }

  }

  getTaks(){
    let db: IDBDatabase = this.request.result;
    const txn = db.transaction("List", "readonly");
    const store = txn.objectStore("List");
    let query = store.getAll();

    query.onsuccess = (event: any) => { 
      console.table(event.target.result);
      this.dato = event.target.result
    }
    query.onerror = (event) => { console.log(event) }

    txn.oncomplete = () => { db.close() }
    txn.onerror = (event) => { console.log(event) }
  }
}
