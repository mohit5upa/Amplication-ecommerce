/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UserRole, Role, User } from "@prisma/client";

export class UserRoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserRoleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserRoleFindManyArgs>
  ): Promise<number> {
    return this.prisma.userRole.count(args);
  }

  async findMany<T extends Prisma.UserRoleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserRoleFindManyArgs>
  ): Promise<UserRole[]> {
    return this.prisma.userRole.findMany(args);
  }
  async findOne<T extends Prisma.UserRoleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserRoleFindUniqueArgs>
  ): Promise<UserRole | null> {
    return this.prisma.userRole.findUnique(args);
  }
  async create<T extends Prisma.UserRoleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserRoleCreateArgs>
  ): Promise<UserRole> {
    return this.prisma.userRole.create<T>(args);
  }
  async update<T extends Prisma.UserRoleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserRoleUpdateArgs>
  ): Promise<UserRole> {
    return this.prisma.userRole.update<T>(args);
  }
  async delete<T extends Prisma.UserRoleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserRoleDeleteArgs>
  ): Promise<UserRole> {
    return this.prisma.userRole.delete(args);
  }

  async findRoles(
    parentId: string,
    args: Prisma.RoleFindManyArgs
  ): Promise<Role[]> {
    return this.prisma.userRole
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .roles(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.userRole
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .user(args);
  }
}
