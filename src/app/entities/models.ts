export interface Client{
    nom:string,
    prenom:string,
    email:string,
    tel:number,
    motdepasse:string,
    role:string,
    status:string,
    typedecompte:string,
}

export interface Agent{
    nom:string,
    prenom:string,
    email:string,
    tel:number,
    motdepasse:string,
    role:string,
    matricule: string,
    
}

export interface User{
    nom:string,
    email:string,
    motdepasse:string,
    role:string,
}



export interface Currency {
    "success" : true,
    "terms" : "https:\/\/currencylayer.com\/terms",
    "privacy" : "https:\/\/currencylayer.com\/privacy",
    "timestamp" : number,
    "source" : "USD",
    "quotes": {}
}

export interface Quotes{
"quotes" : {KeyValue}
}