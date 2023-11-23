package com.condominio.condominio.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.condominio.condominio.model.MoradorModel;

public interface MoradorRepository extends MongoRepository<MoradorModel, String> {
    
    MoradorModel findByNomeAndSenha(String nome, String senha);

}

