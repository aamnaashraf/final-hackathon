type Blog = {
    blog: string,
    Paragraph: string,
    image: any,
    slug: string,
    block:any[]
}

export interface User {
    name: string;
    email: string;
    address: string;
  }
  
  export interface Product {
    productId: string;
    name: string;
    price: number;
  }
  
  export interface Order {
    _type: string;
    orderId: string;
    user: User;
    products: { _type: string; _ref: string }[];
    status: string;
    createdAt: string;
  }