import {
  defineNamespace,
  defineProjections,
  Model as ПланЗакупокMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupki-план-закупок';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПланЗакупокMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
