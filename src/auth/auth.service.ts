import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '@/user/user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { ResetPassword } from './entities/ResetPassword.entity';
import { MailerService } from '@nestjs-modules/mailer';
import 'dotenv/config';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,

    @InjectRepository(ResetPassword)
    private resetPasswordRepository: Repository<ResetPassword>,

    private readonly entityManager: EntityManager,
    private readonly mailerService: MailerService,
  ) {}
  testRoute() {
    return 'auth route ok';
  }
  async validateUser(auth: SignInDto) {
    const user = await this.userService.findWhereUsername(auth.username);

    if (!user) throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);

    const compare_res = await bcrypt.compare(auth.password, user.pasw_hash);

    if (compare_res) return user;
    else return;
  }

  async login(user: any) {
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(dto: SignUpDto) {
    const user = await this.userService.createUser(dto);
    delete user.pasw_hash;
    return user;
  }

  async sendResetPasswordEmail(email: string) {
    const user = await this.userService.findWhereEmail(email);
    if (!user) throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);

    const token = Math.floor(100000 + Math.random() * 900000).toString();
    const resetPassword = this.resetPasswordRepository.create({
      token,
      user_id: user.id,
    });

    await this.entityManager.save(resetPassword);

    return await this.sendEmail(email, token);
  }

  async findWhereResetPasswordToken(token: string) {
    return await this.resetPasswordRepository.findOne({
      where: {
        token,
      },
    });
  }

  async resetPassword(token: string, newPassword: string) {
    const user = await this.findWhereResetPasswordToken(token);
    if (!user) throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    // return await this.userService.resetPassword(user, newPassword);
  }

  async sendEmail(email: string, token: string) {
    const url = `${process.env.BASE_URL}/reset-password/${token}`;
    await this.mailerService.sendMail({
      to: email,
      subject: 'Reset Password',
      template: 'reset-password',
      context: {
        url,
      },
    });

    return {
      message: 'Email Sent',
    };
  }
}
