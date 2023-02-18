
/*EJS: Embedded Javascript
 templating engine used to embed html with javascript
atfirst start with installing the library in terminal with command 
1-npm install ejs --save
2-all files will save in the new folder named as views with extension of ejs like home.ejs
*/

const express = require('express') //it will copied from the express function node 
const app = express()
// Set EJS as templating engine with app.set and app.set works as a middleware here  .
app.set('view engine','ejs');

//data stored globally we can access in any route
var data=[{"ID":101,"Name":"A","Course":"MCA"},
        {"ID":102,"Name":"B","Course":"MBA"},
        {"ID":103,"Name":"C","Course":"MCA"},
        {"ID":105,"Name":"D","Course":"MBA"},
        {"ID":106,"Name":"E","Course":"MBA"},
        {"ID":107,"Name":"F","Course":"MCA"},
        {"ID":108,"Name":"G","Course":"MBA"}]

//---------------------------for login details
        var uinfo=[{"uname":"gunjan", "pass":1234},
    {"uname":"dream", "pass":"tech"},
{"uname":"siya", "pass":"123"}]


app.get('/', function (req, res) {
   if(req.query.submit)
   {
    var uname=(req.query.uname);
    var pass=(req.query.pass);
if(uname=="dream" && pass=="tech")
{
    res.render('Home')
}
else
{
res.render('Login');
}
   }
   else
   res.render("inavlid username and password");
 //render a view and sends the rendered HTML string to the client.
})
app.get('/about', function (req, res) {
    res.render('About')
    })
    app.get('/contact', function (req, res) {
        res.render('contact')
        })
        app.get('/data', function (req, res) {
            //res.render('Data',{name:"Dream Tech",addres:"karanpur Dehradun",email:"dreamtech@gmailo.com",phone:"3949393943"})
        //var data=["php","java","python","angular","rect","node"]
        var data=[
            {"id":101,"name":"A","course":"mca"},
            {"id":102,"name":"B","course":"mca"},
            {"id":103,"name":"C","course":"mca"},
            {"id":104,"name":"D","course":"mca"},
            {"id":105,"name":"E","course":"mca"},
            {"id":106,"name":"F","course":"mca"},
            {"id":107,"name":"G","course":"mca"}]
        res.render("Data", {dt:data})// key always used in "" and data key is stored in dt variable and calls in data.ejs
        })

        
        
        //for arthimatic opertaions
/*    app.get('/opr',function(req,res){
        if(req.query.submit)
        {
            var a=parseInt(req.query.n)
            var b=parseInt(req.query.s)
            var c=a+b;

            
            res.send(a+"   +    "+b+"    =   "+c );
        }
        else
        res.render('opr');
    })*/

    // to show data in same page 
    app.get('/opr',function(req,res){
        if(req.query.submit)
        {
            var a=parseInt(req.query.n)
            var b=parseInt(req.query.s)
            var c=a+b;
            var d=a-b;
            var e=a*b;
            var f=a/b;
            res.render('opr',{fn:a,sn:b,ad:c,su:d,mu:e,di:f,st:true});
        }
        else
        res.render('opr',{st:false});
    })



    //---------------------------------- Student details
    /*app.get('/student', function (req, res) {

        if(req.query.submit)
        {
            var a=parseInt(req.query.n)
            var b=parseInt(req.query.r)
            var c=parseInt(req.query.p)
            var d=parseInt(req.query.c)
            var e=parseInt(req.query.m)
            var f=c+d+e;
 res.send(c+"   +    "+d+" +   "+e+"  =   "+f );
        }
        else
      
        res.render('student')
        })*/


// displaying  data in the same page
app.get('/student',function(req,res){
    if(req.query.submit)
    {
        var a=(req.query.n)
        var b=parseInt(req.query.r)
        var c=parseInt(req.query.p)
        var d=parseInt(req.query.c)
        var e=parseInt(req.query.m)
       var f=parseInt(c+d+e);
       var g=parseInt(f/3);
        res.render('student',{name:a, roll:b, phy:c, che:d, math:e, total:f, per:g , st:true});
    }
    else
    res.render('student',{st:false});
})




//--------------------------CRUD OPERATION

app.get('/CRUD', function (req, res) {
 
    res.render("CRUD", {dt:data})// key always used in "" and data key is stored in dt variable and calls in data.ejs
  

})
   
    
    // ADDING DATA INTO
app.get('/AddData', function (req,res)
    {
        if(req.query.submit)
        {
            var n=(req.query.n)
            var c=(req.query.c)
            var dt={"ID":data.length+101, "Name":n, "Course":c}
            data.push(dt);
           // res.send(data);
           res.redirect("/CRUD")
}
        else
        res.render("AddData" )
    })

//------------------------------------DELETE DATA FROM TABLE
    app.get('/DelData', function (req,res)
    
    {
    var ID=req.query.delid;
    data=data.filter(item=>item.ID!=ID)
        res.redirect("/CRUD");
    })

//-------------------------------------UPDATE DATA
    app.get('/update', function (req,res)
    
    {
        if(req.query.Uid)
        {
            var ID=req.query.Uid;
             var pos=data.findIndex(item=>item.ID==ID)
             //console.log(pos)
             console.log(data[pos])
    res.render("update",{id:data[pos].ID, Name:data[pos].Name, Course:data[pos].Course})
    res.redirect("/CRUD");
}
        else
        res.render("Update" )
       
    })
//----------------------------------LOGIN DETAILS
    app.get('/Login', function (req, res) {
       
        })


app.listen(5000)