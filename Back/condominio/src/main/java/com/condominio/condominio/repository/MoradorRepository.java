package com.condominio.condominio.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.condominio.condominio.model.MoradorModel;

public interface MoradorRepository extends MongoRepository<MoradorModel, String> {

    @Query("{'name': ?0, 'senha': ?1}")
    MoradorModel findByNomeAndSenha(String name, String senha);

}
