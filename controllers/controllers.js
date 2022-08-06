const Task = require('../model/task')
const utility = require('../Utility/utility')

exports.Task = async(req, res) =>{
    try {
    const task = await Task.create(req.body)
    return await utility.success(res,task, "Task created")
    } catch (error) {
        return error
    }
    
}

exports.updateTask = async(req, res) =>{
    try {
    let update_Task = await Task.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    return await utility.success(res,update_Task, "updated Successfully ")   
    } catch (error) {
    return error
    }
    
}

exports.getTask = async(req, res)=>{
        try {
            let { page, size, sort } = req.query;
        
            if (!page) {
                page = 1;
            }
        
            if (!size) {
                size = 20;
            }
        
            const limit = parseInt(size);
        
            const info = await Task.find().sort(
                {targetDate: -1}).limit(limit)
            res.send({
                page,
                size,
                Info: info,
            });
        }
        catch (error) {
            res.sendStatus(500)
        }
}


exports.getOneTask = async(req, res)=>{
    try {
    let get_One_Task = await Task.findOne({_id:req.params.id})
    return await utility.success(res,get_One_Task, "your Task")
    } catch (error) {
        return error
    }
}

exports.getByTitle = async(req, res)=>{
    try {
    let getByTitle = await Task.find({
        "$or":[
            {title:{$regex:req.params.key}}
        ]
    })   
    return await utility.success(res,getByTitle, "same categorized")
    } catch (error) {
    return error    
    }  
    
}
exports.removeTask = async(req,res)=>{
    try {
        const removeTask = await Task.deleteOne({_id:req.params._id})
        return await utility.success(res,removeTask, "deleted succesfuly")
    } catch (error) {
        return error
    }
}

exports.removeManyTask = async(req,res)=>{
    try {
        const removeTask = await Task.deleteMany({targetDate:{$lte:Date.now()}})
        return await utility.success(res,removeTask, "deleted succesfuly")
    } catch (error) {
        return error
    }
}