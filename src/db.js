import Dexie from 'dexie';

export default Dexie.async(function* () {
    let db = new Dexie('ApplicationsDB');
    db.version(1).stores({ applications: '++id' }); // inbound primary key
    return db;
});