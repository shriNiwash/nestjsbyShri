import { Module } from '@nestjs/common';
import {RouterController} from './router.controller';
import {RoutersService} from './routers.service';
import { Book_inventory } from './Entity/Entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [
        TypeOrmModule.forFeature([Book_inventory]),
        TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'database_inventory',
        entities: [Book_inventory],
        synchronize: true,
    })],
    controllers: [RouterController],
    providers: [RoutersService],
    exports:[RoutersService]

})
export class RouterModule {}
