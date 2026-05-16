import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Roles } from '../../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { CustomerCareSubmissionsService } from './customer-care-submissions.service';
import { CreateCustomerCareSubmissionDto } from './dto/create-customer-care-submission.dto';
import { UpdateCustomerCareSubmissionDto } from './dto/update-customer-care-submission.dto';

@Controller('customer-care-submissions')
export class CustomerCareSubmissionsController {
  constructor(private readonly submissions: CustomerCareSubmissionsService) {}

  @Post()
  create(@Body() body: CreateCustomerCareSubmissionDto) {
    return this.submissions.create(body);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  findAll() {
    return this.submissions.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  findOne(@Param('id') id: string) {
    return this.submissions.findOne(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  update(@Param('id') id: string, @Body() body: UpdateCustomerCareSubmissionDto) {
    return this.submissions.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.submissions.remove(id);
  }
}
