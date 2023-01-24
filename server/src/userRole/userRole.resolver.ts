import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { UserRoleResolverBase } from "./base/userRole.resolver.base";
import { UserRole } from "./base/UserRole";
import { UserRoleService } from "./userRole.service";

@graphql.Resolver(() => UserRole)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserRoleResolver extends UserRoleResolverBase {
  constructor(
    protected readonly service: UserRoleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
