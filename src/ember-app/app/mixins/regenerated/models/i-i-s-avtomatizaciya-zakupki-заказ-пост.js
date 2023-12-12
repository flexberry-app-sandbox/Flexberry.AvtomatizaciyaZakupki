import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date'),
  датаОкончания: DS.attr('date'),
  номер: DS.attr('number'),
  состОтгрузки: DS.attr('i-i-s-avtomatizaciya-zakupki-сост-поставок'),
  состояниеОплаты: DS.attr('i-i-s-avtomatizaciya-zakupki-сост-оплаты'),
  суммаВклНДС: DS.attr('boolean'),
  суммаДокумента: DS.attr('number'),
  контрагенты: DS.belongsTo('i-i-s-avtomatizaciya-zakupki-контрагенты', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-avtomatizaciya-zakupki-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-avtomatizaciya-zakupki-склады', { inverse: null, async: false }),
  заказ: DS.hasMany('i-i-s-avtomatizaciya-zakupki-т-ч-заказ', { inverse: 'заказПост', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-заказ-пост.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-заказ-пост.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-заказ-пост.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состОтгрузки: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-заказ-пост.validations.состОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояниеОплаты: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-заказ-пост.validations.состояниеОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаВклНДС: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-заказ-пост.validations.суммаВклНДС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаДокумента: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-заказ-пост.validations.суммаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-заказ-пост.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-заказ-пост.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-заказ-пост.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-заказ-пост.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказПостE', 'i-i-s-avtomatizaciya-zakupki-заказ-пост', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    контрагенты: belongsTo('i-i-s-avtomatizaciya-zakupki-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'контрагент' }),
    организации: belongsTo('i-i-s-avtomatizaciya-zakupki-организации', 'Организации', {
      организация: attr('Организация', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'организация' }),
    склады: belongsTo('i-i-s-avtomatizaciya-zakupki-склады', 'Склады', {
      склад: attr('Склад', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'склад' }),
    состояниеОплаты: attr('Состояние оплаты', { index: 9 }),
    состОтгрузки: attr('Состояние отгрузки', { index: 10 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 11 }),
    суммаДокумента: attr('Сумма документа', { index: 12 }),
    заказ: hasMany('i-i-s-avtomatizaciya-zakupki-т-ч-заказ', 'Заказ', {
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
    })
  });

  modelClass.defineProjection('ЗаказПостL', 'i-i-s-avtomatizaciya-zakupki-заказ-пост', {
    состояниеОплаты: attr('Состояние оплаты', { index: 0 }),
    состОтгрузки: attr('Сост отгрузки', { index: 1 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 2 }),
    суммаДокумента: attr('Сумма документа', { index: 3 }),
    датаНачала: attr('Дата начала', { index: 4 }),
    датаОкончания: attr('Дата окончания', { index: 5 }),
    номер: attr('Номер', { index: 6 }),
    контрагенты: belongsTo('i-i-s-avtomatizaciya-zakupki-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 7 })
    }, { index: -1, hidden: true }),
    организации: belongsTo('i-i-s-avtomatizaciya-zakupki-организации', 'Организация', {
      организация: attr('Организация', { index: 8 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-avtomatizaciya-zakupki-склады', 'Склад', {
      склад: attr('Склад', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
