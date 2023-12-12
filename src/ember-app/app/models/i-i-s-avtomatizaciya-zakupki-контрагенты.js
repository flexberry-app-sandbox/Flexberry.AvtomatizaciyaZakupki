import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КонтрагентыMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupki-контрагенты';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КонтрагентыMixin, Validations, {
});

defineProjections(Model);

export default Model;
