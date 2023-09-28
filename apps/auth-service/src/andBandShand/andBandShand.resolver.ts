import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AndBandShandResolverBase } from "./base/andBandShand.resolver.base";
import { AndBandShand } from "./base/AndBandShand";
import { AndBandShandService } from "./andBandShand.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AndBandShand)
export class AndBandShandResolver extends AndBandShandResolverBase {
  constructor(
    protected readonly service: AndBandShandService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
