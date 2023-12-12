import Controller from '@ember/controller';
import $ from 'jquery';
import { computed, observer } from '@ember/object';
import { isNone } from '@ember/utils';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';



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

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: undefined,

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (isNone(i18n)) {
      return;
    }

    this.set('locales', ['ru', 'en']);

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.includes(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: service('objectlistview-events'),

  /**
    Service for managing the state of the application.

    @property appState
    @type AppStateService
  */
  appState: service(),

  actions: {
    /**
      Call `updateWidthTrigger` for `objectlistviewEventsService`.

      @method actions.updateWidth
    */
    updateWidth() {
      this.get('objectlistviewEventsService').updateWidthTrigger();
    },

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = $('.ui.sidebar.main.menu');
      sidebar.sidebar('toggle');
      sidebar.toggleClass('sidebar-mini');

      $('.full.height').toggleClass('content-opened');

      $('.sidebar.icon .text_menu').toggleClass('hidden');
      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.bgw-opacity').toggleClass('hidden');

      // For reinit overflowed tabs.
      $(window).trigger('resize');
    },

    /**
      Toggles application sitemap's side bar in mobile view.

      @method actions.toggleSidebarMobile
    */
    toggleSidebarMobile() {
      $('.ui.sidebar.main.menu').sidebar('toggle');

      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.sidebar.icon').toggleClass('hidden-text');
      $('.bgw-opacity').toggleClass('hidden');

      if (!this.get('_hideEventIsAttached')) {
        $('.ui.sidebar.main.menu').sidebar('attach events', '.ui.sidebar.main.menu .item a', 'hide');
        this.set('_hideEventIsAttached', true);
      }
    }
  }
});
