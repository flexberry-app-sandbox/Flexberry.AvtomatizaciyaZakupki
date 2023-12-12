import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОрганизацииMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupki-организации';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОрганизацииMixin, Validations, {
});

defineProjections(Model);

export default Model;
