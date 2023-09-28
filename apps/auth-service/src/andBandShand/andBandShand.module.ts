import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AndBandShandModuleBase } from "./base/andBandShand.module.base";
import { AndBandShandService } from "./andBandShand.service";
import { AndBandShandController } from "./andBandShand.controller";
import { AndBandShandResolver } from "./andBandShand.resolver";

@Module({
  imports: [AndBandShandModuleBase, forwardRef(() => AuthModule)],
  controllers: [AndBandShandController],
  providers: [AndBandShandService, AndBandShandResolver],
  exports: [AndBandShandService],
})
export class AndBandShandModule {}
