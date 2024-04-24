import { LightningElement } from 'lwc';

export default class RenderList extends LightningElement {

  contacts = [
    {id: 1223, name: 'Kapil Joshi', age: 28, profile: 'CEO'},
    {id: 1224, name: 'Harshita Pandey', age: 23, profile: 'CTO'},
    {id: 1225, name: 'Deepanshu Joshi', age: 26, profile: 'CFO'},
    {id: 1226, name: 'Chirag Pandey', age: 19, profile: 'COO'},
  ]

}