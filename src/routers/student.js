     const express = require("express");
     const router = new express.Router();
     const Student = require("../models/students");

   router.post('/students', async (req,res) => {
        try {
           const user = new Student(req.body)
           const data = await user.save()
           res.status(201).send(data)
        }catch(err){
            res.send(err)
        }
   })
                   // read data
         router.get('/students', async (req, res) => {
                try {
                   const studentData = await Student.find()
                   res.status(201).send(studentData)
                }catch(err) {
                    res.send(err)
                }
           })

           // get the indivisual Student data using id 
          router.get('/students/:id', async (req, res) => {
                 try {
                        const _id = req.params.id;
                           const data =   await Student.findById({_id})
                           res.send(data)
                           if(!data){
                                res.status(404).send()
                           }else {
                                res.send(data)
                           }
                 }catch(err){
                   res.status(500).send(err)
                 }
            })
   
                       // how to update data
           router.patch('/students/:id', async (req, res) => {
                  try {
                        const _id = req.params.id
                      const updateStudent = await Student.findByIdAndUpdate(_id,req.body,{new:true});
                              res.status(201).send(updateStudent)
                  }catch(err) {
                       res.status(500).send(err)
                  }
             })
             
                    // delete the student by it id 
           router.delete('/students/:id', async (req, res) => {
                     try {
                       const _id = req.params.id;
                      const deleteStudent = await Student.findByIdAndDelete(_id)
                         if(!_id){
                              return res.status(400).send()
                         }
                         else {
                              res.send(deleteStudent)
                         }
                     }catch(err){
                        res.status(500).send(err)
                     }
             })
   
   module.exports = router