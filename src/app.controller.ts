import { Controller, Get, Param } from '@nestjs/common';
import { AppService, Anime } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): String {
    return this.appService.getHello();
  }

  @Get('animes/:id')
  getAnime(@Param('id') id: number): Anime {
    return this.appService.getAnime();
  }
}
