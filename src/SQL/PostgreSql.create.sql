




CREATE TABLE ЗаказПост (
 primaryKey UUID NOT NULL,
 СостояниеОплаты VARCHAR(17) NULL,
 СостОтгрузки VARCHAR(17) NULL,
 СуммаВклНДС BOOLEAN NULL,
 СуммаДокумента INT NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 ДатаОкончания TIMESTAMP(3) NULL,
 Номер INT NULL,
 Контрагенты UUID NOT NULL,
 Организации UUID NOT NULL,
 Склады UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЕдиницыИзмер (
 primaryKey UUID NOT NULL,
 ЕдиницаИзмер VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE План (
 primaryKey UUID NOT NULL,
 ЭтоУслуга BOOLEAN NULL,
 Количество INT NULL,
 Номенклатура UUID NOT NULL,
 ПланЗакупок UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Склады (
 primaryKey UUID NOT NULL,
 Склад VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПланЗакупок (
 primaryKey UUID NOT NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 Номер INT NULL,
 Организации UUID NOT NULL,
 Склады UUID NOT NULL,
 Контрагенты UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Контрагенты (
 primaryKey UUID NOT NULL,
 Контрагент VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Организации (
 primaryKey UUID NOT NULL,
 Организация VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОтчетОЗакупках (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 Номер INT NULL,
 СостояниеОплаты VARCHAR(17) NULL,
 СостОтгрузки VARCHAR(17) NULL,
 СуммаВклНДС BOOLEAN NULL,
 СуммаДокумента INT NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 ДатаОкончания TIMESTAMP(3) NULL,
 Контрагенты UUID NOT NULL,
 Организации UUID NOT NULL,
 Склады UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧЗаказ (
 primaryKey UUID NOT NULL,
 Цена INT NULL,
 ЭтоУслуга BOOLEAN NULL,
 СуммаНДС INT NULL,
 Количество INT NULL,
 Сумма INT NULL,
 Номенклатура UUID NOT NULL,
 ЗаказПост_m0 UUID NULL,
 ЗаказПост_m1 UUID NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Номенклатура (
 primaryKey UUID NOT NULL,
 Номенклатура VARCHAR(255) NULL,
 Контрагенты UUID NOT NULL,
 ЕдиницыИзмер UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ЗаказПост ADD CONSTRAINT FK638643cc7bf95902d97b3a92f8e05bee7821b0e7 FOREIGN KEY (Контрагенты) REFERENCES Контрагенты; 
CREATE INDEX Index638643cc7bf95902d97b3a92f8e05bee7821b0e7 on ЗаказПост (Контрагенты); 

 ALTER TABLE ЗаказПост ADD CONSTRAINT FK7802685339dae94fb0983ccd43756ab721477750 FOREIGN KEY (Организации) REFERENCES Организации; 
CREATE INDEX Index7802685339dae94fb0983ccd43756ab721477750 on ЗаказПост (Организации); 

 ALTER TABLE ЗаказПост ADD CONSTRAINT FK0356aba9361f2e1b47c1fb8e886c44a3fa471a8c FOREIGN KEY (Склады) REFERENCES Склады; 
CREATE INDEX Index0356aba9361f2e1b47c1fb8e886c44a3fa471a8c on ЗаказПост (Склады); 

 ALTER TABLE План ADD CONSTRAINT FK49e4a3e08c106dbd71bc0946a7ce6f507a7f14ef FOREIGN KEY (Номенклатура) REFERENCES Номенклатура; 
CREATE INDEX Index49e4a3e08c106dbd71bc0946a7ce6f507a7f14ef on План (Номенклатура); 

 ALTER TABLE План ADD CONSTRAINT FK97bb4bfafc2155cc1910684c316067048ee92263 FOREIGN KEY (ПланЗакупок) REFERENCES ПланЗакупок; 
CREATE INDEX Index97bb4bfafc2155cc1910684c316067048ee92263 on План (ПланЗакупок); 

 ALTER TABLE ПланЗакупок ADD CONSTRAINT FKbf9e70d96fb420383707a47005bbe8d9112d1886 FOREIGN KEY (Организации) REFERENCES Организации; 
CREATE INDEX Indexbf9e70d96fb420383707a47005bbe8d9112d1886 on ПланЗакупок (Организации); 

 ALTER TABLE ПланЗакупок ADD CONSTRAINT FK19e381ecd2afb4a9cb1acc2bc535a389684ef502 FOREIGN KEY (Склады) REFERENCES Склады; 
CREATE INDEX Index19e381ecd2afb4a9cb1acc2bc535a389684ef502 on ПланЗакупок (Склады); 

 ALTER TABLE ПланЗакупок ADD CONSTRAINT FKa24a80f84eb2458998932bb392a2b08862e298f1 FOREIGN KEY (Контрагенты) REFERENCES Контрагенты; 
CREATE INDEX Indexa24a80f84eb2458998932bb392a2b08862e298f1 on ПланЗакупок (Контрагенты); 

 ALTER TABLE ОтчетОЗакупках ADD CONSTRAINT FK0291cd43570fee8589902063784bd209a4f05ac8 FOREIGN KEY (Контрагенты) REFERENCES Контрагенты; 
CREATE INDEX Index0291cd43570fee8589902063784bd209a4f05ac8 on ОтчетОЗакупках (Контрагенты); 

 ALTER TABLE ОтчетОЗакупках ADD CONSTRAINT FK59752f72b67082536f40704e69e503d2c71709d9 FOREIGN KEY (Организации) REFERENCES Организации; 
CREATE INDEX Index59752f72b67082536f40704e69e503d2c71709d9 on ОтчетОЗакупках (Организации); 

 ALTER TABLE ОтчетОЗакупках ADD CONSTRAINT FK85c67ecfad04ec5e6345217111b9d017828e7b00 FOREIGN KEY (Склады) REFERENCES Склады; 
CREATE INDEX Index85c67ecfad04ec5e6345217111b9d017828e7b00 on ОтчетОЗакупках (Склады); 

 ALTER TABLE ТЧЗаказ ADD CONSTRAINT FK5820b1eb1f54e51975e2348fd399037bd3401f45 FOREIGN KEY (Номенклатура) REFERENCES Номенклатура; 
CREATE INDEX Index5820b1eb1f54e51975e2348fd399037bd3401f45 on ТЧЗаказ (Номенклатура); 

 ALTER TABLE ТЧЗаказ ADD CONSTRAINT FK0333727b80df37db65b251923db37203120fd33b FOREIGN KEY (ЗаказПост_m0) REFERENCES ЗаказПост; 
CREATE INDEX Index0333727b80df37db65b251923db37203120fd33b on ТЧЗаказ (ЗаказПост_m0); 

 ALTER TABLE ТЧЗаказ ADD CONSTRAINT FK6e12981e87f6018d65371f1ad02dbd846f5af265 FOREIGN KEY (ЗаказПост_m1) REFERENCES ОтчетОЗакупках; 
CREATE INDEX Index6e12981e87f6018d65371f1ad02dbd846f5af265 on ТЧЗаказ (ЗаказПост_m1); 

 ALTER TABLE Номенклатура ADD CONSTRAINT FK40c32e1cee7d4df810ed035bb3af3d793e4c7539 FOREIGN KEY (Контрагенты) REFERENCES Контрагенты; 
CREATE INDEX Index40c32e1cee7d4df810ed035bb3af3d793e4c7539 on Номенклатура (Контрагенты); 

 ALTER TABLE Номенклатура ADD CONSTRAINT FKc47082871db0b53f909e62c3904407ee31fcb2d0 FOREIGN KEY (ЕдиницыИзмер) REFERENCES ЕдиницыИзмер; 
CREATE INDEX Indexc47082871db0b53f909e62c3904407ee31fcb2d0 on Номенклатура (ЕдиницыИзмер); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

