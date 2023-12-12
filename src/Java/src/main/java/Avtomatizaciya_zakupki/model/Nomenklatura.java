package Avtomatizaciya_zakupki.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_zakupki.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Номенклатура
 */
@Entity(name = "IISAvtomatizaciya_zakupkiНоменклатура")
@Table(schema = "public", name = "Номенклатура")
public class Nomenklatura {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номенклатура")
    private String номенклатура;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kontragenty")
    @Convert("Kontragenty")
    @Column(name = "Контрагенты", length = 16, unique = true, nullable = false)
    private UUID _kontragentyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kontragenty", insertable = false, updatable = false)
    private Kontragenty kontragenty;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "EdinicyIzmer")
    @Convert("EdinicyIzmer")
    @Column(name = "ЕдиницыИзмер", length = 16, unique = true, nullable = false)
    private UUID _edinicyizmerid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "EdinicyIzmer", insertable = false, updatable = false)
    private EdinicyIzmer edinicyizmer;


    public Nomenklatura() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНоменклатура() {
      return номенклатура;
    }

    public void setНоменклатура(String номенклатура) {
      this.номенклатура = номенклатура;
    }


}