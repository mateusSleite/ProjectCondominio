package main.java.com.condominio.condominio.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("morador")
public class MoradorModel {
    @Id
    @Getter
    @Setter
    private String id;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private String bloco;

    @Getter
    @Setter
    private String apto;

    @Getter
    @Setter
    private Boolean adm;

    public MoradorModel() { }

    public MoradorModel(String id) {
        this.id = id;
    }

    public MoradorModel(String name, String bloco, String apto, Boolean adm) {
        this.name = name;
        this.bloco = bloco;
        this.apto = apto;
        this.adm = adm;
    }

    public MoradorModel(String name, String bloco, String apto) {
        this.name = name;
        this.bloco = bloco;
        this.apto = apto;
    }
}
