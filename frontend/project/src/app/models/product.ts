import {Category} from "./category";

export interface Product{
  id:number;
  name:string;
  price:number;
  image:string;
  category:Category;
  status:boolean;
  description:string;
}
