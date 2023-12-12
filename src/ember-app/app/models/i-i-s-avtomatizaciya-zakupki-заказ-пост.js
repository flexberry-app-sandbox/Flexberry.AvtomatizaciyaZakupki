import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаказПостMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupki-заказ-пост';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаказПостMixin, Validations, {
});

defineProjections(Model);

export default Model;
