let mongoose = require("mongoose");

let schema = new mongoose.Schema(
    {
        roll : {type : String , required : true , unique : true} , 
        date_of_adm : {type : Date , default : Date.now } ,
        name : {type : String , required : true} , 
        marks : Number,
        rep : Boolean
    }
)


// ! Creating a collection named as Student of type schema

let student = new mongoose.model("Student" , schema);

// ? Saving a document

saveDoc = async()=>{
    let s1 = new student({
      roll : "23",
      name : "extreme",
      marks : "99",
      rep : false
    })

    let s2 = new student({
        roll : "24",
        name : "extreme",
        marks : "12",
        rep : false
      })

//    let a =  await s1.save();
//     let b = await s2.save();

//   console.log(a);
//   console.log(b);

await student.insertMany([s1 , s2])


} 

let retrieve = async()=>{
    // ! marks will not come....
    let r1 = await student.find({roll : {$in : ["11" , "101"] }}).select({marks:1})
    // ! limit number to one only
    // let r1 = await student.find({roll : "11"}).limit(1)
    // ! sort ascending with respect to marks
    // let r1 = await student.find().sort({marks:1})
    // ! sort desending with respect to marks
    // let r1 = await student.find().sort({marks:-1})
    console.log(r1);
}

let updatedoc = async(roll)=>{
    let up = await student.updateOne(
        {roll},
        {$set:{marks:1000}}
    )
    // console.log(up);
}




let deldoc = async(roll)=>{
    let up = await student.deleteOne(
        {roll}
    )
    // console.log(up);
}


let deldocmany = async()=>{
    let up = await student.deleteMany(
        {marks : {$lt : 35}}
    )
    // console.log(up);
}


// module.exports = saveDoc;
module.exports = deldocmany;
// module.exports = retrieve;
// module.exports = updatedoc;
// module.exports = deldoc;