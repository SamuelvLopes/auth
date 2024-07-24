import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class CustomGoogleAuthGuard extends AuthGuard('custom-google') {
  constructor() {
    super();
  }
}
