import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CustomerGroupResolverBase } from "./base/customerGroup.resolver.base";
import { CustomerGroup } from "./base/CustomerGroup";
import { CustomerGroupService } from "./customerGroup.service";

@graphql.Resolver(() => CustomerGroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CustomerGroupResolver extends CustomerGroupResolverBase {
  constructor(
    protected readonly service: CustomerGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
