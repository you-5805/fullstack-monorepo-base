import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
