class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.ss=this.ss
        if(stack){
            this.stack=stack
        }
        else{
            s.captureStackTrace(this,this.constructor)
        }

    }
}

export{Apis}