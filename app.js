const express=require('express');
const app=express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home.ejs")
});

app.get("/test/:herhangibirsey/yorum/:bisey",function(req,res){
    res.send("home")
})
app.get("/test",function(req,res){
    res.send("bu br test denemesidir .ejs");
});

app.get("/test/:bisey",function(req,res){
     var testParameter=req.params.bisey
    res.render("test", {testParameter});
})

app.get("*",function(req,res){
    res.send("sayfa bulunamadı");
});
const server=app.listen(3000,function(){
    console.log("sunucu su anda port numarasında calısıyor: %d",
    server.address().port);
});