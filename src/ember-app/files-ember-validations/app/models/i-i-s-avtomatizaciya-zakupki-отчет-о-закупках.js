import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ОтчетОЗакупкахMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupki-отчет-о-закупках';

import ЗаказПостModel from './i-i-s-avtomatizaciya-zakupki-заказ-пост';

let Model = ЗаказПостModel.extend(ОтчетОЗакупкахMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
