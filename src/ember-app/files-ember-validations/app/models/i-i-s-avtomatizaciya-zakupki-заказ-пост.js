import {
  defineNamespace,
  defineProjections,
  Model as ЗаказПостMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupki-заказ-пост';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаказПостMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
