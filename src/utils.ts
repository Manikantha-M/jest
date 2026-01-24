type User = {
    name:string,
    age:number
}

export function add(a:number, b:number):number{
    return a+b;
};

export function subtract(a:number, b:number):number{
    return a-b;
};

export function isEven(num:number):boolean{
    return num%2 === 0;
};

export function createUser(name:string, age:number):User{
    return {name, age}
};

export async function createJWTtoken() {
    return 'jwt_token';
};

export function calculateAverage(arr:number[]):number{
    if(arr.length == 0) return 0;
    return arr.reduce((acc, currValue) => acc+currValue , 0) / arr.length
}