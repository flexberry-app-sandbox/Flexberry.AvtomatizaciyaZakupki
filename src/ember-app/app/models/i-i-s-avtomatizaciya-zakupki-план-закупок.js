import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПланЗакупокMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupki-план-закупок';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПланЗакупокMixin, Validations, {
});

defineProjections(Model);

export default Model;
