class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        statck=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.ss=this.ss
        if(statck){
            this.stack=statck
        }
        else{
            s.captureStackTrace(this,this.constructor)
        }

    }
}

export{Apis}