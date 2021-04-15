const mongodb=require('mongoose');

const db="mongodb+srv://root:satyam@cluster0.ohshp.mongodb.net/loginusers?retryWrites=true&w=majority"

  mongodb.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
  })
  .then(()=>console.log(`connection successful`)
  ).catch((err)=>console.log(`no connection`));
