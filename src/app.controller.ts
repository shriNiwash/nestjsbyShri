import { Body, Controller, Get ,Render,UseGuards,Post, Redirect} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly userService:AuthService){}

  @Get('/login')
  @Render('login')
  dataCol(){
    return{
    data:"stylesheets/new.css"
    }
  }

  @Post('/login')
  @Redirect('/list')
  rootdata(@Body() records:any):Promise<any>{
    const data= this.userService.validateUser(records.username,records.password);
    if(data == null){
      return 
    }
    else{
      return data;
    }
    
  }
 


  @Get('/home')
  @Render('index')
  root(){

  }
 

}
