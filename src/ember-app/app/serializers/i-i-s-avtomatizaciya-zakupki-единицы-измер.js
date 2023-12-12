import { Serializer as ЕдиницыИзмерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-zakupki-единицы-измер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЕдиницыИзмерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
