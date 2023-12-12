import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  этоУслуга: DS.attr('boolean'),
  номенклатура: DS.belongsTo('i-i-s-avtomatizaciya-zakupki-номенклатура', { inverse: null, async: false }),
  планЗакупок: DS.belongsTo('i-i-s-avtomatizaciya-zakupki-план-закупок', { inverse: 'план', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-план.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этоУслуга: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-план.validations.этоУслуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-план.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планЗакупок: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-план.validations.планЗакупок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланE', 'i-i-s-avtomatizaciya-zakupki-план', {
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
  });
};
