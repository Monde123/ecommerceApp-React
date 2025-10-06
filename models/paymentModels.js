class Payment {
  id;
  course = [];
  date;
  price;
 instructorId;
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
    image;
    description;
    instructorId
    constructor({
        id, title, price,image, description,  instructorId
    }){
        this.id= id;
        this.title= title;
        this.price= price;
        this.image=image
        this.description=description
        this.instructorId=instructorId
    }
} 

export default Payment;
export { Course };
