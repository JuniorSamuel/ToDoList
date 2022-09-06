
window.indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;
window.IDBTransaction =
  window.IDBTransaction ||
  window.mozIDBTransaction ||
  window.webkitIDBTransaction ||
  window.msIDBTransaction;
window.IDBKeyRange =
  window.IDBKeyRange ||
  window.mozIDBKeyRange ||
  window.webkitIDBKeyRange ||
  window.msIDBKeyRange;

if (!window.indexedDB) {
  window.alert("Su navegador no soporta una versión estable de indexedDB.");
}
var Database = {name: "Database", version: 1}
var request = window.indexedDB.open(Database.name, Database.version);
var db;

request.onerror = (event) => {
  console.error(`Database error: ${event.target.errorCode}`);
};

request.onsuccess = (event) => {
  console.log(`Database "${Database.name}" Created, version ${Database.version}.`);
    db = request.result;

    db.onerror = (event) => {
        console.error(`Database error: ${event.target.errorCode}`)
    }
};

request.onupgradeneeded = (event) => {
    db = event.target.result;
    var objStore = db.createObjectStore("list", {keyPath: "id"})
}



