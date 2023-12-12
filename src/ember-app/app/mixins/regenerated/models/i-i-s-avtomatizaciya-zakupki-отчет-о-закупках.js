import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number')
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-отчет-о-закупках.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-отчет-о-закупках.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-avtomatizaciya-zakupki-заказ-пост'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОЗакупкахE', 'i-i-s-avtomatizaciya-zakupki-отчет-о-закупках', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 2 }),
    состОтгрузки: attr('Сост отгрузки', { index: 3 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 4 }),
    суммаДокумента: attr('Сумма документа', { index: 5 }),
    датаНачала: attr('Дата начала', { index: 6 }),
    датаОкончания: attr('Дата окончания', { index: 7 }),
    контрагенты: belongsTo('i-i-s-avtomatizaciya-zakupki-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'контрагент' }),
    организации: belongsTo('i-i-s-avtomatizaciya-zakupki-организации', 'Организации', {
      организация: attr('Организация', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'организация' }),
    склады: belongsTo('i-i-s-avtomatizaciya-zakupki-склады', 'Склады', {
      склад: attr('Склад', { index: 13, hidden: true })
    }, { index: 12, displayMemberPath: 'склад' }),
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

  modelClass.defineProjection('ОтчетОЗакупкахL', 'i-i-s-avtomatizaciya-zakupki-отчет-о-закупках', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 2 }),
    состОтгрузки: attr('Сост отгрузки', { index: 3 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 4 }),
    суммаДокумента: attr('Сумма документа', { index: 5 }),
    датаНачала: attr('Дата начала', { index: 6 }),
    датаОкончания: attr('Дата окончания', { index: 7 }),
    контрагенты: belongsTo('i-i-s-avtomatizaciya-zakupki-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 8 })
    }, { index: -1, hidden: true }),
    организации: belongsTo('i-i-s-avtomatizaciya-zakupki-организации', 'Организация', {
      организация: attr('Организация', { index: 9 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-avtomatizaciya-zakupki-склады', 'Склад', {
      склад: attr('Склад', { index: 10 })
    }, { index: -1, hidden: true })
  });
};
