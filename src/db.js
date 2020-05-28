import Dexie from 'dexie';
let db;

const asyncWrapper = Dexie.async(function* () {
    db = new Dexie('ApplicationsDB');
    db.version(1).stores({ applications: '++id' });
});

asyncWrapper().catch(e => console.error(e));

export default db;