let NeBD = require('nedb');
let db = new NeBD({
    filename:'users.db',
    autoload:true
})

module.exports = (app)=>{

    app.get('/users',( req, res)=>{

        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json({
            users:[{
                name: 'Hugo Cardoso',
                email: 'dae@dae.com',
                id: 1
            }]
        });
    
    });
    app.post('/users',(req,res)=>{

        db.insert(req.body, (err, user)=>{

            if(err){
                console.log('Error: ${err}');
                res.status(400).json({
                    error:err
                });
            }else{
                res.status(200).json(user);
            }

        });
    
    })

};