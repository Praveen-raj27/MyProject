let request = indexedDB.open('login')
request.onupgradeneeded =  function(event){
    let db = event.target.result
    db.createObjectStore('user_details',{keyPath:'id'})

request.onsuccess = function (event) {
    let db = event.target.result
    const tx = db.transaction('user_details','readwrite')
    const store = tx.objectStore('user_details')
    const user = {id:'user_name', name:'praveen', email:'pravin@gmail.com'}
    store.put(user)
    tx.oncomplete = function () {
        db.close()
    }
}
}
const updateValues = (dbName, storeName, updatedUser)=>{
    const request = indexedDB.open(dbName)
    request.onsuccess = function(event){
        const db = event.target.result
        const tx = db.transaction(storeName,'readwrite')
        const store = tx.objectStore(storeName)
        store.put(updatedUser)
        tx.oncomplete=()=> db.close
    }
}

const updateParticularValue = (dbName, storeName, key)=>{
    const request = indexedDB.open(dbName)
    request.onsuccess = function(event){
        const db = event.target.result
        const tx = db.transaction(storeName,'readwrite')
        const store = tx.objectStore(storeName)
        const getEmail = store.get(key)
        getEmail.onsuccess = function(){
            const emailId = getEmail.result
            emailId.email = 'pravinraj@update.com'
            store.put(emailId)
        }
        tx.oncomplete=()=> db.close()
    }
}
updateParticularValue('login','user_details','user_name')

updateValues('login', 'user_details',{id:'user_name', name:'praveen', email:'pravin@gmail.com'} )

const getValuesFromDB=(dbName, storeName)=>{
    return new Promise((resolve, reject) => {
        // Simulating a database call with a timeout
       const request = indexedDB.open(dbName);
       request.onerror = (event) => {
            reject(new Error("Database error: " + event.target.errorCode));
        };

        request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction(storeName, "readonly");
            const store = transaction.objectStore(storeName);
            const getAllRequest = store.getAll();

            getAllRequest.onsuccess = () => {
                resolve(getAllRequest.result);
            };

            getAllRequest.onerror = (event) => {
                reject(new Error("Error retrieving data: " + event.target.errorCode));
            };
        };
    });
}
getValuesFromDB('login','user_details')
    .then((values) => {
        console.log("Values retrieved from DB:", values);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
