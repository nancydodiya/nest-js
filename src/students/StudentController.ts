import {Controller, Get, HttpStatus, Post, Req, Res } from "@nestjs/common";


@Controller("student")
export class StudentController{

    @Get("get")
    getAllStudents():any{
        return "all students"
    }
    
    @Get("get1")
    sendCostumRes(@Req() req, @Res() res):any{
        res.status(HttpStatus.CREATED).json({
            message: "Hello"
        })
    }

    @Post("post")
    addStudents(@Req() req, @Res() res):any{
        console.log(req.body);
        res.status(HttpStatus.CREATED).json({
            message: "Data"
        })
    }
}