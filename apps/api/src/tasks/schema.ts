import { ApiProperty } from '@nestjs/swagger';

export class Task {
  @ApiProperty({
    description: 'id',
    example: '137df8ae-09a1-4fa2-8dfa-18073bb4e106',
  })
  id: string;

  @ApiProperty({ description: '作成日時', example: '2021-01-01T00:00:00.000Z' })
  createdAt: string;

  @ApiProperty({
    description: '最終更新日時',
    example: '2021-01-01T00:00:00.000Z',
  })
  updatedAt: string;

  @ApiProperty({ description: 'タイトル', example: '仕様書作成' })
  title: string;

  @ApiProperty({ description: '内容', example: '仕様書を作成する' })
  description: string;

  @ApiProperty({ description: '完了フラグ', example: false })
  hasDone: boolean;
}

export class ListResponse {
  @ApiProperty({ type: [Task] })
  tasks: Task[];
}
