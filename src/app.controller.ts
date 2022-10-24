import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

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

  @Get('healthcheck')
  getHealthcheck(): HealthcheckResponse {
    return { status: 'OK', errors: [] };
  }
}
