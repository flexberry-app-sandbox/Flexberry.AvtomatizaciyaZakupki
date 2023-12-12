import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НоменклатураMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupki-номенклатура';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НоменклатураMixin, Validations, {
});

defineProjections(Model);

export default Model;
