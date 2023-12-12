import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-zakupki-отчет-о-закупках', 'Unit | Serializer | i-i-s-avtomatizaciya-zakupki-отчет-о-закупках', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-avtomatizaciya-zakupki-отчет-о-закупках',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-avtomatizaciya-zakupki-сост-оплаты',
    'transform:i-i-s-avtomatizaciya-zakupki-сост-поставок',

    'model:i-i-s-avtomatizaciya-zakupki-единицы-измер',
    'model:i-i-s-avtomatizaciya-zakupki-заказ-пост',
    'model:i-i-s-avtomatizaciya-zakupki-контрагенты',
    'model:i-i-s-avtomatizaciya-zakupki-номенклатура',
    'model:i-i-s-avtomatizaciya-zakupki-организации',
    'model:i-i-s-avtomatizaciya-zakupki-отчет-о-закупках',
    'model:i-i-s-avtomatizaciya-zakupki-план-закупок',
    'model:i-i-s-avtomatizaciya-zakupki-план',
    'model:i-i-s-avtomatizaciya-zakupki-склады',
    'model:i-i-s-avtomatizaciya-zakupki-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
