import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицаИзмер: DS.attr('string')
});

export let ValidationRules = {
  единицаИзмер: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki-единицы-измер.validations.единицаИзмер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЕдиницыИзмерE', 'i-i-s-avtomatizaciya-zakupki-единицы-измер', {
    единицаИзмер: attr('Единица измер', { index: 0 })
  });

  modelClass.defineProjection('ЕдиницыИзмерL', 'i-i-s-avtomatizaciya-zakupki-единицы-измер', {
    единицаИзмер: attr('Единица измер', { index: 0 })
  });
};
