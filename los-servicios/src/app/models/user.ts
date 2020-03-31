import { Address } from './address'

export class User{
    id: number
    name: string
    username: string
    email: string
    address: Address
    //There was a mistake in a previous iteration regarding city == undefined. This was because address.city property was not initialized. So let's fix it on this class' constructor
    constructor(){
        this.address = new Address()
    }
}