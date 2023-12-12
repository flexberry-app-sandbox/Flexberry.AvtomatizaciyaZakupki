import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧЗаказMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupki-т-ч-заказ';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧЗаказMixin, Validations, {
});

defineProjections(Model);

export default Model;
