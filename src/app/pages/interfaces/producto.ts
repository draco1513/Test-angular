export interface Producto {
  id:number;
  title :string;
  price : Float32Array;
  description: string;
  category : string ;
  image: string;
  rating :rating[]





}
interface rating {
  rate:Float32Array;
  count:number
}
