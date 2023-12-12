import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  сумма: DS.attr('number'),
  суммаНДС: DS.attr('number'),
  цена: DS.attr('number'),
  этоУслуга: DS.attr('boolean'),
  номенклатура: DS.belongsTo('i-i-s-avtomatizaciya-zakupki-номенклатура', { inverse: null, async: false }),
  заказПост: DS.belongsTo('i-i-s-avtomatizaciya-zakupki-заказ-пост', { inverse: 'заказ', async: false, polymorphic: true })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-т-ч-заказ.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-т-ч-заказ.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  суммаНДС: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-т-ч-заказ.validations.суммаНДС.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-т-ч-заказ.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этоУслуга: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-т-ч-заказ.validations.этоУслуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-т-ч-заказ.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказПост: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-т-ч-заказ.validations.заказПост.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧЗаказE', 'i-i-s-avtomatizaciya-zakupki-т-ч-заказ', {
    номенклатура: belongsTo('i-i-s-avtomatizaciya-zakupki-номенклатура', 'Номенклатура', {
      номенклатура: attr('Номенклатура', { index: 1, hidden: true }),
      единицыИзмер: belongsTo('i-i-s-avtomatizaciya-zakupki-единицы-измер', '', {
        единицаИзмер: attr('Единица измерения', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'номенклатура' }),
    количество: attr('Количество', { index: 3 }),
    этоУслуга: attr('Это услуга', { index: 4 }),
    цена: attr('Цена', { index: 5 }),
    сумма: attr('Сумма', { index: 6 }),
    суммаНДС: attr('Сумма НДС', { index: 7 })
  });
};
