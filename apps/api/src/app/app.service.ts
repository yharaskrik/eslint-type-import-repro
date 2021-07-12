import { Injectable } from '@nestjs/common';
import { ClassType, InterfaceType } from './type';

@Injectable()
export class AppService {
  constructor(private classType: ClassType) {}

  getData(): InterfaceType {
    return { message: 'Welcome to api!' };
  }
}
