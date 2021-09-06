const router =  require('express').Router();
const {Employee} = require('../Models/Employee');


router.post("/add", (req, res) => {
    var employees = new Employee(req.body);
    employees.save()
      .then(item => {
        res.send("item saved to database",item);
      })
      .catch(err => {
        res.status(400).json({success:false,err});
      });
  });

router.get('/',(req,res)=>{
    Employee.find().exec((err,employees)=>{
        if(err) return res.status(400).json({success:false, err});
        return res.status(200).json({success:true,employees:employees});
    });
});

router.put("/update/:id",(req,res)=>{
    Employee.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },(err,employees)=>{
            if(err) return res.status(400).json({success:false, err});
            return res.status(200).json({success:true});
        }
    )

});

router.delete("/delete/:id",(req,res)=>{
    Employee.findByIdAndRemove(req.params.id).exec((
        err, deteteItem)=>{
          if(err){
              res.send(err);
          }
          return res.json(deteteItem);
        });
});

module.exports = router;