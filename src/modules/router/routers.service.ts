import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { retry } from 'rxjs';
import { Repository } from 'typeorm';
import { Book_inventory } from './Entity/Entity';

@Injectable()
export class RoutersService {

    constructor(@InjectRepository(Book_inventory)
    private BookModel:Repository<Book_inventory>
    ){}

    async getData():Promise<any[]>{
        const data = await this.BookModel.find();
        return data;

    }

    async getInsert(data:object):Promise<object>{
        await this.BookModel.save(data);
        return data;

    }

    async getUpdate(id:number,data:object):Promise<object>{
        await this.BookModel.update(id,data);
        return data;
    }

    async getDelete(id:number):Promise<object>{
        await this.BookModel.delete(id);
        return { id:id,
         message:"deleted"}
    }

    async getInsertData(records:object):Promise<any>{
        await this.BookModel.save(records);
        return console.log('data inserted');
        
    }

    async getDetails():Promise<object>{
        const data = await this.BookModel.find();
        return data;
    }

    async getFetch(id:object):Promise<object>{
        const data = await this.BookModel.findOneBy(id);
        console.log(id);
        return data

    }

    async getUpdata_data(id:object, data:object):Promise<any>{
        const datas = await this.BookModel.update(id,data);
        return console.log('The data is inserted');
    }

    async getDeleteService(id:object):Promise<object>{
        const data = await this.BookModel.delete(id);
        return {
            id:id,
            message:"The data is deleted"
        }
    }

}
