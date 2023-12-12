import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as ОтчетОЗакупкахMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupki-отчет-о-закупках';

import ЗаказПостModel from './i-i-s-avtomatizaciya-zakupki-заказ-пост';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-avtomatizaciya-zakupki-заказ-пост';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = ЗаказПостModel.extend(ОтчетОЗакупкахMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
