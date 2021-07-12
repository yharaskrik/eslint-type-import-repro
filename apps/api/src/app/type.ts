import { Injectable } from '@nestjs/common';

export interface InterfaceType {
  message: string;
}

@Injectable()
export class ClassType {}
