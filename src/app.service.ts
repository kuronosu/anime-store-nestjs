import { Injectable } from '@nestjs/common';

export type Anime = {
  name: string;
};

@Injectable()
export class AppService {
  getHello(): String {
    return 'Hello World!';
  }

  getAnime(): Anime {
    return { name: 'Joujo Senki' };
  }
}
