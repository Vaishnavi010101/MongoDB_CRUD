const mongoose = require("mongoose");
//const uri="mongodb://localhost:27017/empolyeeDB";
const uri ="mongodb+srv://Vaishu-mtalkz:Vaishu123@cluster0.33yrva5.mongodb.net/?retryWrites=true&w=majority";

  
async function connect() {
    try {
      mongoose.set("strictQuery", false);
      await mongoose.connect(uri);
      console.log("connected to mongodb");
    } catch (error) {
      console.error(error);
    }
  }
  connect();

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});
const Employee = mongoose.model("Employee", employeeSchema);


//create
// const fun = async ()=>{
//     try {
//         const e1 =  Employee.insertMany([{
//             name: "vaishnavi",
//             email: "hdgcjdnjfn",
//           },{
//             name:"vaishu",
//             email:"gdhhdh"

//           }]);
//          await  e1.save();
          
//     } catch (error) {
//         console.log(error)
//     }
// }
// fun()

//read
// const fun = async ()=>{
//     try {
//          Employee.find({name:"vaishu"},function(err,emp){
//             if(err){
//                 console.log(err);

//             }
//             else
//             console.log(emp);
//          });
         
          
//     } catch (error) {
//         console.log(error)
//     }
// }
// fun()

//update 
// const update=async()=>{
//     try{
//  Employee.updateOne({name:"vaishu"},{email:"gdchbhdbhd"},function(err){
//  if(err)
//  console.log(err)
//  else
//  console.log("sucessfuly updated") 
//     });
//     }
//     catch(error){
//         console.log(error)
//     }


// }
//update();
//delete
const delee=async()=>{
    try{
Employee.deleteOne({name:"vaishu"},function(err){
if(err)
 console.log(err)
 else
 console.log("sucessfuly updated")
    })}
    catch(error)
    {
        console.log(error)
    }
}
delee()



