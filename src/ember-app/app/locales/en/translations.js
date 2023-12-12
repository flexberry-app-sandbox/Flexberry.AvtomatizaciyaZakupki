import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAvtomatizaciya_zakupkiЕдиницыИзмерLForm from './forms/i-i-s-avtomatizaciya-zakupki-единицы-измер-l';
import IISAvtomatizaciya_zakupkiЗаказПостLForm from './forms/i-i-s-avtomatizaciya-zakupki-заказ-пост-l';
import IISAvtomatizaciya_zakupkiКонтрагентыLForm from './forms/i-i-s-avtomatizaciya-zakupki-контрагенты-l';
import IISAvtomatizaciya_zakupkiНоменклатураLForm from './forms/i-i-s-avtomatizaciya-zakupki-номенклатура-l';
import IISAvtomatizaciya_zakupkiОрганизацииLForm from './forms/i-i-s-avtomatizaciya-zakupki-организации-l';
import IISAvtomatizaciya_zakupkiОтчетОЗакупкахLForm from './forms/i-i-s-avtomatizaciya-zakupki-отчет-о-закупках-l';
import IISAvtomatizaciya_zakupkiПланЗакупокLForm from './forms/i-i-s-avtomatizaciya-zakupki-план-закупок-l';
import IISAvtomatizaciya_zakupkiСкладыLForm from './forms/i-i-s-avtomatizaciya-zakupki-склады-l';
import IISAvtomatizaciya_zakupkiЕдиницыИзмерEForm from './forms/i-i-s-avtomatizaciya-zakupki-единицы-измер-e';
import IISAvtomatizaciya_zakupkiЗаказПостEForm from './forms/i-i-s-avtomatizaciya-zakupki-заказ-пост-e';
import IISAvtomatizaciya_zakupkiКонтрагентыEForm from './forms/i-i-s-avtomatizaciya-zakupki-контрагенты-e';
import IISAvtomatizaciya_zakupkiНоменклатураEForm from './forms/i-i-s-avtomatizaciya-zakupki-номенклатура-e';
import IISAvtomatizaciya_zakupkiОрганизацииEForm from './forms/i-i-s-avtomatizaciya-zakupki-организации-e';
import IISAvtomatizaciya_zakupkiОтчетОЗакупкахEForm from './forms/i-i-s-avtomatizaciya-zakupki-отчет-о-закупках-e';
import IISAvtomatizaciya_zakupkiПланЗакупокEForm from './forms/i-i-s-avtomatizaciya-zakupki-план-закупок-e';
import IISAvtomatizaciya_zakupkiСкладыEForm from './forms/i-i-s-avtomatizaciya-zakupki-склады-e';
import IISAvtomatizaciya_zakupkiЕдиницыИзмерModel from './models/i-i-s-avtomatizaciya-zakupki-единицы-измер';
import IISAvtomatizaciya_zakupkiЗаказПостModel from './models/i-i-s-avtomatizaciya-zakupki-заказ-пост';
import IISAvtomatizaciya_zakupkiКонтрагентыModel from './models/i-i-s-avtomatizaciya-zakupki-контрагенты';
import IISAvtomatizaciya_zakupkiНоменклатураModel from './models/i-i-s-avtomatizaciya-zakupki-номенклатура';
import IISAvtomatizaciya_zakupkiОрганизацииModel from './models/i-i-s-avtomatizaciya-zakupki-организации';
import IISAvtomatizaciya_zakupkiОтчетОЗакупкахModel from './models/i-i-s-avtomatizaciya-zakupki-отчет-о-закупках';
import IISAvtomatizaciya_zakupkiПланЗакупокModel from './models/i-i-s-avtomatizaciya-zakupki-план-закупок';
import IISAvtomatizaciya_zakupkiПланModel from './models/i-i-s-avtomatizaciya-zakupki-план';
import IISAvtomatizaciya_zakupkiСкладыModel from './models/i-i-s-avtomatizaciya-zakupki-склады';
import IISAvtomatizaciya_zakupkiТЧЗаказModel from './models/i-i-s-avtomatizaciya-zakupki-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-avtomatizaciya-zakupki-единицы-измер': IISAvtomatizaciya_zakupkiЕдиницыИзмерModel,
    'i-i-s-avtomatizaciya-zakupki-заказ-пост': IISAvtomatizaciya_zakupkiЗаказПостModel,
    'i-i-s-avtomatizaciya-zakupki-контрагенты': IISAvtomatizaciya_zakupkiКонтрагентыModel,
    'i-i-s-avtomatizaciya-zakupki-номенклатура': IISAvtomatizaciya_zakupkiНоменклатураModel,
    'i-i-s-avtomatizaciya-zakupki-организации': IISAvtomatizaciya_zakupkiОрганизацииModel,
    'i-i-s-avtomatizaciya-zakupki-отчет-о-закупках': IISAvtomatizaciya_zakupkiОтчетОЗакупкахModel,
    'i-i-s-avtomatizaciya-zakupki-план-закупок': IISAvtomatizaciya_zakupkiПланЗакупокModel,
    'i-i-s-avtomatizaciya-zakupki-план': IISAvtomatizaciya_zakupkiПланModel,
    'i-i-s-avtomatizaciya-zakupki-склады': IISAvtomatizaciya_zakupkiСкладыModel,
    'i-i-s-avtomatizaciya-zakupki-т-ч-заказ': IISAvtomatizaciya_zakupkiТЧЗаказModel
  },

  'application-name': 'Avtomatizaciya_zakupki',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Avtomatizaciya_zakupki',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avtomatizaciya_zakupki',
          title: 'Avtomatizaciya_zakupki'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'автоматизация-закупок': {
          caption: 'Автоматизация закупок',
          title: 'Автоматизация закупок',
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-avtomatizaciya-zakupki-организации-l': {
              caption: 'Организации',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupki-контрагенты-l': {
              caption: 'Контрагенты',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupki-номенклатура-l': {
              caption: 'Номенклатура',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupki-склады-l': {
              caption: 'Склады',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupki-единицы-измер-l': {
              caption: 'Единицы измер',
              title: ''
            }
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-avtomatizaciya-zakupki-план-закупок-l': {
              caption: 'План закупок',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupki-заказ-пост-l': {
              caption: 'Заказ пост',
              title: ''
            }
          },
          отчеты: {
            caption: 'Отчеты',
            title: 'Отчеты',
            'i-i-s-avtomatizaciya-zakupki-отчет-о-закупках-l': {
              caption: 'Отчет о закупках',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-avtomatizaciya-zakupki-единицы-измер-l': IISAvtomatizaciya_zakupkiЕдиницыИзмерLForm,
    'i-i-s-avtomatizaciya-zakupki-заказ-пост-l': IISAvtomatizaciya_zakupkiЗаказПостLForm,
    'i-i-s-avtomatizaciya-zakupki-контрагенты-l': IISAvtomatizaciya_zakupkiКонтрагентыLForm,
    'i-i-s-avtomatizaciya-zakupki-номенклатура-l': IISAvtomatizaciya_zakupkiНоменклатураLForm,
    'i-i-s-avtomatizaciya-zakupki-организации-l': IISAvtomatizaciya_zakupkiОрганизацииLForm,
    'i-i-s-avtomatizaciya-zakupki-отчет-о-закупках-l': IISAvtomatizaciya_zakupkiОтчетОЗакупкахLForm,
    'i-i-s-avtomatizaciya-zakupki-план-закупок-l': IISAvtomatizaciya_zakupkiПланЗакупокLForm,
    'i-i-s-avtomatizaciya-zakupki-склады-l': IISAvtomatizaciya_zakupkiСкладыLForm,
    'i-i-s-avtomatizaciya-zakupki-единицы-измер-e': IISAvtomatizaciya_zakupkiЕдиницыИзмерEForm,
    'i-i-s-avtomatizaciya-zakupki-заказ-пост-e': IISAvtomatizaciya_zakupkiЗаказПостEForm,
    'i-i-s-avtomatizaciya-zakupki-контрагенты-e': IISAvtomatizaciya_zakupkiКонтрагентыEForm,
    'i-i-s-avtomatizaciya-zakupki-номенклатура-e': IISAvtomatizaciya_zakupkiНоменклатураEForm,
    'i-i-s-avtomatizaciya-zakupki-организации-e': IISAvtomatizaciya_zakupkiОрганизацииEForm,
    'i-i-s-avtomatizaciya-zakupki-отчет-о-закупках-e': IISAvtomatizaciya_zakupkiОтчетОЗакупкахEForm,
    'i-i-s-avtomatizaciya-zakupki-план-закупок-e': IISAvtomatizaciya_zakupkiПланЗакупокEForm,
    'i-i-s-avtomatizaciya-zakupki-склады-e': IISAvtomatizaciya_zakupkiСкладыEForm
  },

});

export default translations;
