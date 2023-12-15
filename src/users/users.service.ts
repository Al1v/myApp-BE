import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from 'src/roles/roles.model';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { CreateUserDto } from './dto/user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
    private roleService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    try {
      const user = await this.userRepository.create(dto);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers() {
    try {
      return await this.userRepository.findAll({
        include: {
          model: Role,
          attributes: ['value'],
          through: { attributes: [] },
        },
        attributes: { exclude: ['password'] },
      });
    } catch (error) {
      throw error;
    }
  }

  async getUserByEmail(email: string) {
    try {
      return await this.userRepository.findOne({
        where: { email },
        include: {
          model: Role,
          attributes: ['value'],
          through: { attributes: [] },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id: number) {
    try {
      return await this.userRepository.findOne({
        where: { id },
        include: {
          model: Role,
          attributes: ['value'],
          through: { attributes: [] },
        },
        attributes: { exclude: ['password'] },
      });
    } catch (error) {
      throw error;
    }
  }

  async addRole(dto: AddRoleDto) {
    try {
      const user = await this.userRepository.findByPk(dto.userId);
      const role = await this.roleService.getRoleByValue(dto.value);

      if (role && user) {
        const result = await user.$add('role', role.id);
        return dto;
      }
      throw new HttpException('user or role not found', HttpStatus.NOT_FOUND);
    } catch (e) {
      throw e;
    }
  }
}
