import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'v0.2.0';
  }

  handleFileUpload(file: Express.Multer.File) {
    console.log(file);
    return file.originalname;
  }
}
