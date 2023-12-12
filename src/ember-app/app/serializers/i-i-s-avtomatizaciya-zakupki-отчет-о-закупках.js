import { Serializer as ОтчетОЗакупкахSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-zakupki-отчет-о-закупках';
import ЗаказПостSerializer from './i-i-s-avtomatizaciya-zakupki-заказ-пост';

export default ЗаказПостSerializer.extend(ОтчетОЗакупкахSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
