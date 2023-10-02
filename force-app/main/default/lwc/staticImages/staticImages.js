import { LightningElement } from 'lwc';
import CAR from '@salesforce/resourceUrl/CarHub'

export default class StaticImages extends LightningElement {
    carImage = CAR +'/ford_ecosport.png'
}