/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateUserRoleArgs } from "./CreateUserRoleArgs";
import { UpdateUserRoleArgs } from "./UpdateUserRoleArgs";
import { DeleteUserRoleArgs } from "./DeleteUserRoleArgs";
import { UserRoleFindManyArgs } from "./UserRoleFindManyArgs";
import { UserRoleFindUniqueArgs } from "./UserRoleFindUniqueArgs";
import { UserRole } from "./UserRole";
import { Role } from "../../role/base/Role";
import { User } from "../../user/base/User";
import { UserRoleService } from "../userRole.service";

@graphql.Resolver(() => UserRole)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserRoleResolverBase {
  constructor(
    protected readonly service: UserRoleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserRole",
    action: "read",
    possession: "any",
  })
  async _userRolesMeta(
    @graphql.Args() args: UserRoleFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserRole])
  @nestAccessControl.UseRoles({
    resource: "UserRole",
    action: "read",
    possession: "any",
  })
  async userRoles(
    @graphql.Args() args: UserRoleFindManyArgs
  ): Promise<UserRole[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserRole, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserRole",
    action: "read",
    possession: "own",
  })
  async userRole(
    @graphql.Args() args: UserRoleFindUniqueArgs
  ): Promise<UserRole | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserRole)
  @nestAccessControl.UseRoles({
    resource: "UserRole",
    action: "create",
    possession: "any",
  })
  async createUserRole(
    @graphql.Args() args: CreateUserRoleArgs
  ): Promise<UserRole> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        roleId: {
          connect: args.data.roleId,
        },

        userId: {
          connect: args.data.userId,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserRole)
  @nestAccessControl.UseRoles({
    resource: "UserRole",
    action: "update",
    possession: "any",
  })
  async updateUserRole(
    @graphql.Args() args: UpdateUserRoleArgs
  ): Promise<UserRole | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          roleId: {
            connect: args.data.roleId,
          },

          userId: {
            connect: args.data.userId,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserRole)
  @nestAccessControl.UseRoles({
    resource: "UserRole",
    action: "delete",
    possession: "any",
  })
  async deleteUserRole(
    @graphql.Args() args: DeleteUserRoleArgs
  ): Promise<UserRole | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Role, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Role",
    action: "read",
    possession: "any",
  })
  async roleId(@graphql.Parent() parent: UserRole): Promise<Role | null> {
    const result = await this.service.getRoleId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async userId(@graphql.Parent() parent: UserRole): Promise<User | null> {
    const result = await this.service.getUserId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
