import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AndBandShandServiceBase } from "./base/andBandShand.service.base";

@Injectable()
export class AndBandShandService extends AndBandShandServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
