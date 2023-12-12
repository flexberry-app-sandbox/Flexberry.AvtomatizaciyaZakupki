package Avtomatizaciya_zakupki.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_zakupki.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Склады
 */
@Entity(name = "IISAvtomatizaciya_zakupkiСклады")
@Table(schema = "public", name = "Склады")
public class Sklady {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Склад")
    private String склад;


    public Sklady() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getСклад() {
      return склад;
    }

    public void setСклад(String склад) {
      this.склад = склад;
    }


}