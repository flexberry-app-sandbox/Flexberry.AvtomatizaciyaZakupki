import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-zakupki-единицы-измер', 'Unit | Model | i-i-s-avtomatizaciya-zakupki-единицы-измер', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
