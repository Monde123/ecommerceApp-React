class Payment {
  id;
  course = [];
  date;
  price;

  constructor({ id, course = [], date, price }) {
    this.id = id ?? this.generateId(); 
    this.course = course;
    this.date = date;
    this.price = price;
  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
  }
}


class Course{
    id;
    title;
    price;
    constructor({
        id, title, price,
    }){
        this.id= id;
        this.title= title;
        this.price= price
    }
} 

export default Payment;
export { Course };
