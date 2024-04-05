import { LightningElement } from 'lwc';

export default class ConditionallyRenderingTemplate extends LightningElement {
  firstDetail=false;
  secondDetail=false;
  bothDetails=false;
  handleChange(event){
    if(event.target.name==="input1"){
      this.firstDetail = !this.firstDetail;
    }
    if(event.target.name==="input2"){
      this.secondDetail = !this.secondDetail;
    }
    if(this.firstDetail && this.secondDetail) {
      this.bothDetails = true;
    }else{
      this.bothDetails = false;
    }
    console.log(this.firstDetail, this.secondDetail, this.bothDetails);
  }
  
}