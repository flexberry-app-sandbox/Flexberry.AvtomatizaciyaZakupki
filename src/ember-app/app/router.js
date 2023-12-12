import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-avtomatizaciya-zakupki-единицы-измер-l');
  this.route('i-i-s-avtomatizaciya-zakupki-единицы-измер-e',
  { path: 'i-i-s-avtomatizaciya-zakupki-единицы-измер-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupki-единицы-измер-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupki-единицы-измер-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupki-заказ-пост-l');
  this.route('i-i-s-avtomatizaciya-zakupki-заказ-пост-e',
  { path: 'i-i-s-avtomatizaciya-zakupki-заказ-пост-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupki-заказ-пост-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupki-заказ-пост-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupki-контрагенты-l');
  this.route('i-i-s-avtomatizaciya-zakupki-контрагенты-e',
  { path: 'i-i-s-avtomatizaciya-zakupki-контрагенты-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupki-контрагенты-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupki-контрагенты-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupki-номенклатура-l');
  this.route('i-i-s-avtomatizaciya-zakupki-номенклатура-e',
  { path: 'i-i-s-avtomatizaciya-zakupki-номенклатура-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupki-номенклатура-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupki-номенклатура-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupki-организации-l');
  this.route('i-i-s-avtomatizaciya-zakupki-организации-e',
  { path: 'i-i-s-avtomatizaciya-zakupki-организации-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupki-организации-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupki-организации-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupki-отчет-о-закупках-l');
  this.route('i-i-s-avtomatizaciya-zakupki-отчет-о-закупках-e',
  { path: 'i-i-s-avtomatizaciya-zakupki-отчет-о-закупках-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupki-отчет-о-закупках-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupki-отчет-о-закупках-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupki-план-закупок-l');
  this.route('i-i-s-avtomatizaciya-zakupki-план-закупок-e',
  { path: 'i-i-s-avtomatizaciya-zakupki-план-закупок-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupki-план-закупок-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupki-план-закупок-e/new' });
  this.route('i-i-s-avtomatizaciya-zakupki-склады-l');
  this.route('i-i-s-avtomatizaciya-zakupki-склады-e',
  { path: 'i-i-s-avtomatizaciya-zakupki-склады-e/:id' });
  this.route('i-i-s-avtomatizaciya-zakupki-склады-e.new',
  { path: 'i-i-s-avtomatizaciya-zakupki-склады-e/new' });
});

export default Router;
