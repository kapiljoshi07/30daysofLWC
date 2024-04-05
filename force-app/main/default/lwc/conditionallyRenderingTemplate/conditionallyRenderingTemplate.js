import { LightningElement } from 'lwc';

export default class ConditionallyRenderingTemplate extends LightningElement {
  firstDetail=false;
  secondDetail=false;
  handleChange(event){
    if(event.target.name==="input1"){
      this.firstDetail = !this.firstDetail;
    }
    if(event.target.name==="input2"){
      this.secondDetail = !this.secondDetail;
    }
  }
  get bothDetails(){
    return this.firstDetail && this.secondDetail;
  }
}