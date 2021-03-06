import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { CrudController } from '../core/crud/crud.controller';
import { Country } from './country.entity';
import { CountryService } from './country.service';

@ApiTags('Country')
@UseGuards(AuthGuard('jwt'))
@Controller()
export class CountryController extends CrudController<Country> {
	constructor(private readonly countryService: CountryService) {
		super(countryService);
	}
}
