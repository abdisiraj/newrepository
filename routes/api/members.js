const express = require('express');
const router = express.Router();
const members = require('../../members');
const uuid  = require('uuid');

//get all members
router.get('/', (req, res) => {
    res.json(members); 
});

//get single member
router.get('/:id', (req,res) => {
   const found = members.some((member) => member.id === parseInt(req.params.id ));
   if(found){
       res.json(members.filter((member) => member.id === parseInt(req.params.id )));
       
   }
   else{
       res.status(400).json({msg: 'members not found'});
   }


});

//create member
router.post('/', (req, res) => {
        const newMember = {
            "id": uuid.v4(),
            "name": req.body.name,
            "email": req.body.email,
            "status": req.body.status
        } 
        
        if(!newMember.name || !newMember.email){
            res.status(400).json({'msg': 'please include name and email'});
            return;
        }
        members.push(newMember);
        res.json(members);
});
//update member
router.put('/:id', (req,res) => {
    const found = members.some((member) => member.id === parseInt(req.params.id ));
    if(found){
        const updMember = req.body;
            members.forEach(member => {
               if(member.id === parseInt(req.params.id)){
                   member.name = updMember.name ? req.body.name : member.name;
                   member.email = updMember.email ? req.body.name : member.email;
                   res.status(200).json({msg: `member updated` , member: member});
               }
            });
        

    }
    else{
        res.status(400).json({msg: `member with ${req.params.id} is not found`});
    }
 
 
 });

 //delete single member
router.delete('/:id', (req,res) => {
    const found = members.some((member) => member.id === parseInt(req.params.id ));
    if(found){
        res.json({msg : 'member deleted'  , members: members.filter((member) => member.id !== parseInt(req.params.id ))});
        
    }
    else{
        res.status(400).json({msg: 'members not found'});
    }
 
 
 });

module.exports = router;