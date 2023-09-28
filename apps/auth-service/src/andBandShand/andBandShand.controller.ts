import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AndBandShandService } from "./andBandShand.service";
import { AndBandShandControllerBase } from "./base/andBandShand.controller.base";

@swagger.ApiTags("andBandShands")
@common.Controller("andBandShands")
export class AndBandShandController extends AndBandShandControllerBase {
  constructor(
    protected readonly service: AndBandShandService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
