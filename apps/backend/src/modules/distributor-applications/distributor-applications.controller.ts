import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Roles } from '../../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { DistributorApplicationsService } from './distributor-applications.service';
import { CreateDistributorApplicationDto } from './dto/create-distributor-application.dto';
import { UpdateDistributorApplicationDto } from './dto/update-distributor-application.dto';

@Controller('distributor-applications')
export class DistributorApplicationsController {
  constructor(
    private readonly distributorService: DistributorApplicationsService,
  ) {}

  /** Public: submit a new distributor application */
  @Post()
  create(@Body() body: CreateDistributorApplicationDto) {
    return this.distributorService.create(body);
  }

  /** Admin: list all applications */
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  findAll() {
    return this.distributorService.findAll();
  }

  /** Admin: get status counts */
  @Get('counts')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  counts() {
    return this.distributorService.countByStatus();
  }

  /** Admin: get single application */
  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  findOne(@Param('id') id: string) {
    return this.distributorService.findById(id);
  }

  /** Admin: update status / add notes */
  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  update(
    @Param('id') id: string,
    @Body() body: UpdateDistributorApplicationDto,
  ) {
    return this.distributorService.update(id, body);
  }

  /** Admin: delete */
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.distributorService.remove(id);
  }
}
