const somethingWillHappen = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Hey! We did it');
        }else {
            reject('Opsss!');
        }
   });
};

somethingWillHappen()
    .then(response => console.log(response)) // resolve
    .catch(error => console.log(error)) // reject

const somethingWillHappen2 = ()=>{
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(()=>{
                resolve(true);
            },1500)
        }else{
            const error = new Error("Whoooop!");
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response =>console.log(response)) // resolve
    .catch(error => console.log(error)) // reject

// Promesas al mismo tiempo
// Corre las promesas. Retorna arreglo con resultado de ambas.

Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })