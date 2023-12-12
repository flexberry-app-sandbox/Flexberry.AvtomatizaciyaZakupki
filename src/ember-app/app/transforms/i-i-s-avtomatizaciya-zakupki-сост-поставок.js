import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостПоставокEnum from '../enums/i-i-s-avtomatizaciya-zakupki-сост-поставок';

export default FlexberryEnum.extend({
  enum: СостПоставокEnum,
  sourceType: 'IIS.Avtomatizaciya_zakupki.СостПоставок'
});
