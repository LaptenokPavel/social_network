export const requiredField = (value:string)=> {
    if(value){
        return undefined
    }
    return 'Field is requred'
}

export const maxLenghtCreator = (maxLenght: number) => {
   return (value:string)=>{
        if (value && value.length > maxLenght){
            return `Max length is ${maxLenght} symbols`
        }
        return undefined
    }
}

export const minLenghtCreator = (minLenght: number) => {
    return (value:string)=>{
        if (value && value.length < minLenght){
            return `Min length is ${minLenght} symbols`
        }
        return undefined
    }
}