



CREATE TABLE "ЗаказПост"
(

	"primaryKey" RAW(16) NOT NULL,

	"СостояниеОплаты" NVARCHAR2(17) NULL,

	"СостОтгрузки" NVARCHAR2(17) NULL,

	"СуммаВклНДС" NUMBER(1) NULL,

	"СуммаДокумента" NUMBER(10) NULL,

	"ДатаНачала" DATE NULL,

	"ДатаОкончания" DATE NULL,

	"Номер" NUMBER(10) NULL,

	"Контрагенты" RAW(16) NOT NULL,

	"Организации" RAW(16) NOT NULL,

	"Склады" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЕдиницыИзмер"
(

	"primaryKey" RAW(16) NOT NULL,

	"ЕдиницаИзмер" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "План"
(

	"primaryKey" RAW(16) NOT NULL,

	"ЭтоУслуга" NUMBER(1) NULL,

	"Количество" NUMBER(10) NULL,

	"Номенклатура" RAW(16) NOT NULL,

	"ПланЗакупок" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Склады"
(

	"primaryKey" RAW(16) NOT NULL,

	"Склад" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПланЗакупок"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаНачала" DATE NULL,

	"Номер" NUMBER(10) NULL,

	"Организации" RAW(16) NOT NULL,

	"Склады" RAW(16) NOT NULL,

	"Контрагенты" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Контрагенты"
(

	"primaryKey" RAW(16) NOT NULL,

	"Контрагент" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Организации"
(

	"primaryKey" RAW(16) NOT NULL,

	"Организация" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОтчетОЗакупках"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Номер" NUMBER(10) NULL,

	"СостояниеОплаты" NVARCHAR2(17) NULL,

	"СостОтгрузки" NVARCHAR2(17) NULL,

	"СуммаВклНДС" NUMBER(1) NULL,

	"СуммаДокумента" NUMBER(10) NULL,

	"ДатаНачала" DATE NULL,

	"ДатаОкончания" DATE NULL,

	"Контрагенты" RAW(16) NOT NULL,

	"Организации" RAW(16) NOT NULL,

	"Склады" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧЗаказ"
(

	"primaryKey" RAW(16) NOT NULL,

	"Цена" NUMBER(10) NULL,

	"ЭтоУслуга" NUMBER(1) NULL,

	"СуммаНДС" NUMBER(10) NULL,

	"Количество" NUMBER(10) NULL,

	"Сумма" NUMBER(10) NULL,

	"Номенклатура" RAW(16) NOT NULL,

	"ЗаказПост_m0" RAW(16) NULL,

	"ЗаказПост_m1" RAW(16) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Номенклатура"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номенклатура" NVARCHAR2(255) NULL,

	"Контрагенты" RAW(16) NOT NULL,

	"ЕдиницыИзмер" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ЗаказПост"
	ADD CONSTRAINT "ЗаказПост_FКо_9459" FOREIGN KEY ("Контрагенты") REFERENCES "Контрагенты" ("primaryKey");

CREATE INDEX "ЗаказПост_IКо_2376" on "ЗаказПост" ("Контрагенты");

ALTER TABLE "ЗаказПост"
	ADD CONSTRAINT "ЗаказПост_FОр_3212" FOREIGN KEY ("Организации") REFERENCES "Организации" ("primaryKey");

CREATE INDEX "ЗаказПост_IОр_7616" on "ЗаказПост" ("Организации");

ALTER TABLE "ЗаказПост"
	ADD CONSTRAINT "ЗаказПост_FСк_1887" FOREIGN KEY ("Склады") REFERENCES "Склады" ("primaryKey");

CREATE INDEX "ЗаказПост_IСк_4052" on "ЗаказПост" ("Склады");

ALTER TABLE "План"
	ADD CONSTRAINT "План_FНоменкл_8019" FOREIGN KEY ("Номенклатура") REFERENCES "Номенклатура" ("primaryKey");

CREATE INDEX "План_IНоменкл_6247" on "План" ("Номенклатура");

ALTER TABLE "План"
	ADD CONSTRAINT "План_FПланЗак_7317" FOREIGN KEY ("ПланЗакупок") REFERENCES "ПланЗакупок" ("primaryKey");

CREATE INDEX "План_IПланЗак_4075" on "План" ("ПланЗакупок");

ALTER TABLE "ПланЗакупок"
	ADD CONSTRAINT "ПланЗакупок_F_5201" FOREIGN KEY ("Организации") REFERENCES "Организации" ("primaryKey");

CREATE INDEX "ПланЗакупок_I_3894" on "ПланЗакупок" ("Организации");

ALTER TABLE "ПланЗакупок"
	ADD CONSTRAINT "ПланЗакупок_F_1877" FOREIGN KEY ("Склады") REFERENCES "Склады" ("primaryKey");

CREATE INDEX "ПланЗакупок_I_1696" on "ПланЗакупок" ("Склады");

ALTER TABLE "ПланЗакупок"
	ADD CONSTRAINT "ПланЗакупок_F_1441" FOREIGN KEY ("Контрагенты") REFERENCES "Контрагенты" ("primaryKey");

CREATE INDEX "ПланЗакупок_I_8661" on "ПланЗакупок" ("Контрагенты");

ALTER TABLE "ОтчетОЗакупках"
	ADD CONSTRAINT "ОтчетОЗакупка_364" FOREIGN KEY ("Контрагенты") REFERENCES "Контрагенты" ("primaryKey");

CREATE INDEX "ОтчетОЗакупк_1092" on "ОтчетОЗакупках" ("Контрагенты");

ALTER TABLE "ОтчетОЗакупках"
	ADD CONSTRAINT "ОтчетОЗакупк_4124" FOREIGN KEY ("Организации") REFERENCES "Организации" ("primaryKey");

CREATE INDEX "ОтчетОЗакупк_6332" on "ОтчетОЗакупках" ("Организации");

ALTER TABLE "ОтчетОЗакупках"
	ADD CONSTRAINT "ОтчетОЗакупк_8433" FOREIGN KEY ("Склады") REFERENCES "Склады" ("primaryKey");

CREATE INDEX "ОтчетОЗакупк_7213" on "ОтчетОЗакупках" ("Склады");

ALTER TABLE "ТЧЗаказ"
	ADD CONSTRAINT "ТЧЗаказ_FНомен_629" FOREIGN KEY ("Номенклатура") REFERENCES "Номенклатура" ("primaryKey");

CREATE INDEX "ТЧЗаказ_IНоме_6381" on "ТЧЗаказ" ("Номенклатура");

ALTER TABLE "ТЧЗаказ"
	ADD CONSTRAINT "ТЧЗаказ_FЗака_7792" FOREIGN KEY ("ЗаказПост_m0") REFERENCES "ЗаказПост" ("primaryKey");

CREATE INDEX "ТЧЗаказ_IЗака_3841" on "ТЧЗаказ" ("ЗаказПост_m0");

ALTER TABLE "ТЧЗаказ"
	ADD CONSTRAINT "ТЧЗаказ_FОтче_1127" FOREIGN KEY ("ЗаказПост_m1") REFERENCES "ОтчетОЗакупках" ("primaryKey");

CREATE INDEX "ТЧЗаказ_IЗака_3842" on "ТЧЗаказ" ("ЗаказПост_m1");

ALTER TABLE "Номенклатура"
	ADD CONSTRAINT "Номенклатура__6405" FOREIGN KEY ("Контрагенты") REFERENCES "Контрагенты" ("primaryKey");

CREATE INDEX "Номенклатура__5359" on "Номенклатура" ("Контрагенты");

ALTER TABLE "Номенклатура"
	ADD CONSTRAINT "Номенклатура__9084" FOREIGN KEY ("ЕдиницыИзмер") REFERENCES "ЕдиницыИзмер" ("primaryKey");

CREATE INDEX "Номенклатура__6986" on "Номенклатура" ("ЕдиницыИзмер");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


