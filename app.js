const express =require('express');
const app     =express();
const PORT    =process.env.PORT || 5000

var userList=[
    "selam"
];

app.get('/',(req,res)=>{
    return res.status(200).send(userList);
})


const server=app.listen(PORT,()=>{
    console.log(`Listenin on ${PORT}.port`)
});