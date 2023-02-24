const Fishing = require("../models/model")


module.exports.findall = (req,res) =>{
    Fishing.find()
        .then(allDaPost =>{
            res.json(allDaPost)
        })
        .catch(err => res.json({message:"something went wrong",serveError: err}))

}

module.exports.createdFishing = (req,res)=>{
    Fishing.create(req.body)
        .then(newlyCreatedPost => res.json({
            Post: newlyCreatedPost
        }))
        .catch(err =>res.status(400).json(err))
}

module.exports.findOne = (req,res) =>{
    console.log(req.params.id)
    Fishing.findOne({_id:req.params.id})
        .then(thePost => res.json({Post:thePost}))
        .catch(err => res.json({ message:"something went wrong",serveError: err}))
}

module.exports.update = (req,res) =>{
    console.log(req.params.id)
    Fishing.findOneAndUpdate({_id:req.params.id},
        req.body,{new:true, runValidators:true})
        .then(updatedPost => res.json ({
            Post:updatedPost
        }))
        .catch(err =>res.status(400).json(err))

}

module.exports.deletePost = (req,res)=>{
    Fishing.deleteOne({_id:req.params.id})
        .then(result => res.json({result:result}))
        .catch(err => res.json ({ message:"something went wrong",serveError: err}))


}