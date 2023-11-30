package com.condominio.condominio.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.condominio.condominio.model.CondomiModel;


public interface CondomiRepository extends MongoRepository<CondomiModel, String> {

    @Query("{'bloco': ?0, 'apto': ?1, 'ativo': ?2}")
    CondomiModel findByBlocoAndAptoAndAtivo(String bloco, String apto, boolean ativo);

    @Query("{'bloco': ?0, 'apto': ?1}")
    CondomiModel findByBlocoAndApto(String bloco, String apto);

    long countByBloco(String bloco);
    
    long countByBlocoAndAtivo(String bloco, boolean ativo);
}



