import { TasksService } from './tasks.service';
import { ListResponse } from './schema';
import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'タスク一覧取得' })
  @ApiOkResponse({
    status: 200,
    type: ListResponse,
  })
  async findAll() {
    const tasks = await this.tasksService.findAll();

    return {
      tasks,
    };
  }
}
