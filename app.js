const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true })

const fruitSchema = new mongoose.Schema({
  name: {
    type:String,
    required:[true,"Please check your data entry"]
  },
  rating: {
    type:Number,
    min:1,
    max:10
  },
  review: String
})

const personSchema = new mongoose.Schema({
  name:String,
  age: Number,
  favouriteFruit:fruitSchema
})

const Person = mongoose.model("Person",personSchema)

const Fruit = mongoose.model("Fruit", fruitSchema)

// const pineapple = new Fruit({
//   name:"Pineapple",
//   score:9,
//   review:"Good"
// })
//
// pineapple.save()

const papaya = new Fruit({
  name:"Papaya",
  score:4,
  review:"Average"
})

papaya.save()

Person.updateOne({_id:"5fde305125022a2100155208"},{favouriteFruit:papaya},function(err){
  if(err){
    console.log(err);
  }else {
    console.log("Estd relationship");
  }
})


// const person = new Person({
//   name:"Amy",
//   age:12,
//   favouriteFruit: pineapple
// })
//
// person.save()

// Fruit.find(function(err,fruits){
//   if (err){
//     console.log(err)
//   }else {
//
//     mongoose.connection.close()
//     fruits.forEach(function(fruit){
//       console.log(fruit.name);
//     })
//     }
//   }
// )

// Fruit.updateOne({_id:"5fdf9efda373751598a3463e"},{name:"Pink Peach"},function(err){
//   if (err){
//     console.log(err);
//   }else {
//     console.log("Successfully Updated the document");
//   }
// })
// Fruit.remove({_id:"5fdf9efda373751598a3463e"},function(err){
//   if(err){
//     console.log(err);
//   }else {
//     console.log("Successfully deleted the record");
//   }
// })
// Fruit.deleteMany({name:"Apple"},function(err){
//   if (err){
//     console.log(err);
//   }else {
//     console.log("Successfully deleted Many entries");
//   }
// })
