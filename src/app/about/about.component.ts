import { Component } from '@angular/core';

interface prod{
  imgpath:string;
title:string;
description:string;
price:number;
}



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  AllProducts:prod[]=[
    {imgpath:"./assets/images/portfolio-1.jpg",title:"item 1",description:"available",price:500}
  ,{imgpath:"./assets/images/portfolio-3.jpg",title:"item 2",description:"available",price:300},
  {imgpath:"./assets/images/portfolio-4.jpg",title:"item 3",description:"available",price:200},
  {imgpath:"./assets/images/portfolio-1.jpg",title:"item 4",description:"available",price:500},
  {imgpath:"./assets/images/portfolio-3.jpg",title:"item 5",description:"available",price:500},
  {imgpath:"./assets/images/portfolio-4.jpg",title:"item 6",description:"available",price:500},
  {imgpath:"./assets/images/portfolio-1.jpg",title:"item 7",description:"available",price:500},
  {imgpath:"./assets/images/portfolio-3.jpg",title:"item 8",description:"available",price:500},
  {imgpath:"./assets/images/portfolio-4.jpg",title:"item 9",description:"available",price:500},
  {imgpath:"./assets/images/portfolio-1.jpg",title:"item 10",description:"available",price:500},
  {imgpath:"./assets/images/portfolio-3.jpg",title:"item 11",description:"available",price:500},
  {imgpath:"./assets/images/portfolio-4.jpg",title:"item 12",description:"available",price:500}]}