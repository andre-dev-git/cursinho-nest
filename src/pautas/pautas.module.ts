import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PautasService } from './pautas.service';
import { pautaProviders } from './pauta.providers';
import { PautasController } from './pautas.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...pautaProviders, PautasService],
  controllers: [PautasController],
})
export class PautasModule {}
