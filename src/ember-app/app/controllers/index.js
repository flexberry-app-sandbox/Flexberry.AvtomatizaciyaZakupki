import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.автоматизация-закупок.caption'),
          title: i18n.t('forms.application.sitemap.автоматизация-закупок.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-zakupki-организации-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupki-организации-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupki-организации-l.title'),
              icon: 'folder open',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-zakupki-контрагенты-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupki-контрагенты-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupki-контрагенты-l.title'),
              icon: 'folder open',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-zakupki-номенклатура-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupki-номенклатура-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupki-номенклатура-l.title'),
              icon: 'paperclip',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-zakupki-склады-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupki-склады-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupki-склады-l.title'),
              icon: 'phone',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-zakupki-единицы-измер-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupki-единицы-измер-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-avtomatizaciya-zakupki-единицы-измер-l.title'),
              icon: 'folder',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-zakupki-план-закупок-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-avtomatizaciya-zakupki-план-закупок-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-avtomatizaciya-zakupki-план-закупок-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-avtomatizaciya-zakupki-заказ-пост-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-avtomatizaciya-zakupki-заказ-пост-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-avtomatizaciya-zakupki-заказ-пост-l.title'),
              icon: 'tags',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.title'),
            children: [{
              link: 'i-i-s-avtomatizaciya-zakupki-отчет-о-закупках-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.i-i-s-avtomatizaciya-zakupki-отчет-о-закупках-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.i-i-s-avtomatizaciya-zakupki-отчет-о-закупках-l.title'),
              icon: 'calendar',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})