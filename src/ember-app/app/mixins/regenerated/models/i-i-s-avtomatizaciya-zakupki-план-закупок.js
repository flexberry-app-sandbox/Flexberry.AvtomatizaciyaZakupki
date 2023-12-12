import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  номер: DS.attr('number'),
  контрагенты: DS.belongsTo('i-i-s-avtomatizaciya-zakupki-контрагенты', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-avtomatizaciya-zakupki-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-avtomatizaciya-zakupki-склады', { inverse: null, async: false }),
  план: DS.hasMany('i-i-s-avtomatizaciya-zakupki-план', { inverse: 'планЗакупок', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-план-закупок.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-план-закупок.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-план-закупок.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-план-закупок.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-план-закупок.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  план: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-план-закупок.validations.план.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланЗакупокE', 'i-i-s-avtomatizaciya-zakupki-план-закупок', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    организации: belongsTo('i-i-s-avtomatizaciya-zakupki-организации', 'Организации', {
      организация: attr('Организация', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'организация' }),
    склады: belongsTo('i-i-s-avtomatizaciya-zakupki-склады', 'Склады', {
      склад: attr('Склад', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'склад' }),
    контрагенты: belongsTo('i-i-s-avtomatizaciya-zakupki-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'контрагент' }),
    план: hasMany('i-i-s-avtomatizaciya-zakupki-план', 'План', {
      номенклатура: belongsTo('i-i-s-avtomatizaciya-zakupki-номенклатура', 'Номенклатура', {
        номенклатура: attr('Номенклатура', { index: 1, hidden: true }),
        единицыИзмер: belongsTo('i-i-s-avtomatizaciya-zakupki-единицы-измер', '', {
          единицаИзмер: attr('Единица измерения', { index: 2 })
        }, { index: -1, hidden: true }),
        контрагенты: belongsTo('i-i-s-avtomatizaciya-zakupki-контрагенты', '', {
          контрагент: attr('Контрагент', { index: 5 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'номенклатура' }),
      количество: attr('Количество', { index: 3 }),
      этоУслуга: attr('Это услуга', { index: 4 })
    })
  });

  modelClass.defineProjection('ПланЗакупокL', 'i-i-s-avtomatizaciya-zakupki-план-закупок', {
    датаНачала: attr('Дата начала', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    организации: belongsTo('i-i-s-avtomatizaciya-zakupki-организации', 'Организация', {
      организация: attr('Организация', { index: 2 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-avtomatizaciya-zakupki-склады', 'Склад', {
      склад: attr('Склад', { index: 3 })
    }, { index: -1, hidden: true }),
    контрагенты: belongsTo('i-i-s-avtomatizaciya-zakupki-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
