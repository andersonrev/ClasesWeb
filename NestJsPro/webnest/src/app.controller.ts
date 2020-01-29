import { Controller, Get, Param, Res, Post, Body, Headers, Response, Delete, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
    
  }

  @Get('suma')
  suma(@Headers() headers, @Response() res){
    console.log(headers);
    if(headers.numerouno!=null && headers.numerodos!=null){
      const totalsuma = Number(headers.numerouno) + Number(headers.numerodos);
      //return `suama: ${totalsuma}`;
      return res.status(200).send('Suma es : '+ totalsuma);
    }else{
       return res.status(400).send('Error');
    }
  }

  @Post('division')
  division(
    @Headers() headers,
    @Query() Query,
    @Response() res,
    @Body() Body

  ){
    console.log(headers.numerouno)
    console.log(Body.numerodos)
    if(headers.numerouno!=null && Body.numerodos!=null){
      const totalDiv = Number(headers.numerouno) / Number(Body.numerodos);
      //return `suama: ${totalsuma}`;
      return res.status(200).send('DIvision es : '+ totalDiv);
    }else{
       return res.status(400).send('Error');
    }
  }






}
