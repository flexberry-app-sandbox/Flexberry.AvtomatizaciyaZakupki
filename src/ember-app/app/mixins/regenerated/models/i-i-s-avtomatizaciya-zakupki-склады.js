import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  склад: DS.attr('string')
});

export let ValidationRules = {
  склад: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-склады.validations.склад.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СкладыE', 'i-i-s-avtomatizaciya-zakupki-склады', {
    склад: attr('Склад', { index: 0 })
  });

  modelClass.defineProjection('СкладыL', 'i-i-s-avtomatizaciya-zakupki-склады', {
    склад: attr('Склад', { index: 0 })
  });
};
