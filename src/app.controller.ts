import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

type HealthcheckResponse = {
  status: string;
  errors: string[];
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.appService.handleFileUpload(file);
  }

  @Get('healthcheck')
  getHealthcheck(): HealthcheckResponse {
    return { status: 'OK', errors: [] };
  }
}
