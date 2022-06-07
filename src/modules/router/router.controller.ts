import { Body, Controller, Delete, Get, Param, Post, Put, Redirect, Render,Res ,UseGuards} from '@nestjs/common';
import {RoutersService} from './routers.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class RouterController {
    constructor(private readonly appService:RoutersService){}

    //CRUD API
    @Get()
    @Render('home')
    getRespond(){}
    
    

    @Get('/list-data')
    @UseGuards(AuthGuard('local'))
    getList():Promise<any>{
        return this.appService.getData();

    }
    @Post('/insert-data')
    insertData(@Body() record:object):Promise<object>{
        return this.appService.getInsert(record);
    }

    @Put('/update/:id')
    update_book(@Param('id') id:number, @Body() records:object):Promise<object>{
        return this.appService.getUpdate(id,records);
    }

    @Delete('/delete/:id')
    delete_book(@Param('id') id:number):Promise<object>{
        return this.appService.getDelete(id);
    }

    //Book_inventory API
    @Get('insert')
    @UseGuards(AuthGuard('local'))
    @Render('insert')
    root(){}

    @Get('list')
    @Render('datalist')
    async rootData(){
        const data  =await this.appService.getDetails();
        return{ list : data }

    }

    @Get('list/edit/:id')
    @UseGuards(AuthGuard('local'))
    @Render('update')
    async update_data(@Param('id') id:number){
        console.log(id);
        const data = await this.appService.getFetch({id});
        return{ list:data }  
    }

    @Post('list/edit/:id')
    @Redirect('/list')
    async database_data(@Param('id') id:number , @Body() records:object):Promise<object>{
        return await this.appService.getUpdata_data({id},records)
    }

    @Get('list/delete/:id')
    @Redirect('/list')
    async dataBase_delete(@Param('id') id:number):Promise<any>{
        return await this.appService.getDeleteService({id});
    }

    @Post('/insert')
    @Redirect('/list')
    dataBooks(@Res() res, @Body() data:object):Promise<object>{
        return this.appService.getInsertData(data);
    }


}
