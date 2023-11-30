package com.condominio.condominio.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@AllArgsConstructor
@Document("condominio")
public class CondomiModel {
    @Id
    @Getter
    @Setter
    private String id;

    @Getter
    @Setter
    private String bloco;

    @Getter
    @Setter
    private String apto;

    @Getter
    @Setter
    private Boolean ativo;

    @Getter
    @Setter
    private String price;

    public CondomiModel() { }

    public CondomiModel(String id) {
        this.id = id;
    }

    public CondomiModel(String bloco, String apto, Boolean ativo, String price) {
        this.bloco = bloco;
        this.apto = apto;
        this.ativo = ativo;
        this.price = price;
    }
}
