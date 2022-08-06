const config = ('config')

module.exports = {
    success: async(res, data, message = "")=>{
        return res.status(200).send({
            message: message,
            data:data
        })
    },    
}