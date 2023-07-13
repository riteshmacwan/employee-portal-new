import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
  Req,
  Put,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Response } from 'express';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CompanyLoginDto } from './dto/login-company.dto';
import { Role } from 'src/auth/guards/roles';
import { Roles } from 'src/auth/guards/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  //Api to signup
  @Post('/signup')
  async companySignup(
    @Body() createCompanyDto: CreateCompanyDto,
    @Res() res: Response,
  ) {
    return await this.companyService.companySignup(createCompanyDto, res);
  }

  //Api to list all employee for a company
  @Roles(Role.COMPANY)
  @Get('employees/list')
  async getEmployees(@Res() res: Response) {
    return await this.companyService.employeeList(res);
  }

  //Api to list recent employee for a company
  @Roles(Role.COMPANY)
  @Get('recent-employees/list')
  async getRecentEmployees(@Res() res: Response) {
    return await this.companyService.getRecentEmployees(res);
  }

  //Api to list recent employee for a company
  @Roles(Role.COMPANY)
  @Get('dashboard')
  async getDashboardData(@Res() res: Response) {
    return await this.companyService.getDashboardData(res);
  }

  //Api to get total employee for a company
  @Roles(Role.COMPANY)
  @Get('total-employees/list')
  async getTotalEmployees(@Res() res: Response) {
    return await this.companyService.getTotalEmployees(res);
  }

  //Api to get pending employees for a company
  @Roles(Role.COMPANY)
  @Get('pending-employees/list')
  async getPendingEmployees(@Res() res: Response) {
    return await this.companyService.getPendingEmployees(res);
  }

  //Api to approve pending employee for a company
  @Roles(Role.COMPANY)
  @Put('approve-employee')
  async employeesVerification(@Body() body: any, @Res() res: Response) {
    return await this.companyService.employeesVerification(body, res);
  }

  //Api to delete employee for a company
  @Roles(Role.COMPANY)
  @Put('employee/delete')
  async employeeDelete(@Body() body: any, @Res() res: Response) {
    return await this.companyService.employeeDelete(body, res);
  }

  //Open api for users
  @Get('user/list')
  async userCompanyList(@Res() res: Response) {
    return await this.companyService.userCompanyList(res);
  }
}
