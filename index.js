                             //1
let car = {
    model: "malibu 2",
    information:{
        company: "gm",
        type: "sedan",
        wheels: 3,
        color: "black",
        price: 27000,
    },

    tech_passport: {
        year: 2017,
        complectation: "ltz",
        engine: 2.4
    },
   
    
}






let user = {
    name: "Aziza",
    surname: "Saliyeva",
    age: 15,
    passport: {
        serries: "AC",
        number: 234893,
        born: "2008-11-29",
        gender: "female",
    },
    radio: {
        height: 178,
        weight: 43,
        
    },
    
    status: "married",
    husband: ["Han Djisung"],
    parrents: {
        mom: "Dilya",
        dad: "Iskandar",
        brother: "Aziz_lox",
    }
}



                                  //2
let obj = {
    model: car.model,
    information: car.information,
    tech_passport: car.tech_passport,
    name: user.name,
    surname: user.surname,
    age: user.age,
    passport: user.passport,
    radio: user.radio,
    status: user.status,
    husband: user.husband,
    parrents: user.parrents

}
console.log(obj);

                                  //3

let keys = Object.keys(obj) 

console.log(keys);


                                     //4

let znacheniya = Object.values(obj)

console.log(znacheniya);

                                           //5


let kley = Object.entries(obj)

console.log(kley)

                                         //6
let ik = {
    string: [],
    numbers: [],
    object: [],
    boolean: [],
}

