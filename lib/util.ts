export function makeSerializable<T extends any> (o: T): T {
    return JSON.parse(JSON.stringify(o))
}

export const areArraysEqual = (arr1: Array<any>, arr2: Array<any>) => {
   
    const a = arr1.map((i) => Object.entries(i).toString())
    const b = arr2.map((i) => Object.entries(i).toString())
    
    if(a.length!=b.length) return false
    else
    {
     for(let i=0; i<a.length; i++)
     if(a[i]!=b[i])
      return false
      return true
    }
}

export const titleize = (string: string) => {
    const sliced = string.split('-')
    return (sliced.join(' '))
}