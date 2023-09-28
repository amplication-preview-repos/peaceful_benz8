import { AndBandShand as TAndBandShand } from "../api/andBandShand/AndBandShand";

export const ANDBANDSHAND_TITLE_FIELD = "id";

export const AndBandShandTitle = (record: TAndBandShand): string => {
  return record.id?.toString() || String(record.id);
};
