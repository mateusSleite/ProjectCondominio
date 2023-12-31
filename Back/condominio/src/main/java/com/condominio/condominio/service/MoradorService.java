package com.condominio.condominio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.condominio.condominio.service.MoradorService;
import com.condominio.condominio.repository.MoradorRepository;
import com.condominio.condominio.model.MoradorModel;

@Service
public class MoradorService {

    @Autowired
    private MoradorRepository moradorRepository;
    
    public MoradorModel save(MoradorModel moradorModel) {
        return this.moradorRepository.save(moradorModel);
    }

    public void save(String id, String name, String bloco, String apto, Boolean adm) {
        this.moradorRepository.save(new MoradorModel(id, name, bloco, apto, adm));
    }

    public List<MoradorModel> findAll() {
        return this.moradorRepository.findAll();
    }

    public boolean authenticateUser(String name, String senha) {
        MoradorModel morador = this.moradorRepository.findByNomeAndSenha(name, senha);
        return morador != null;
    }

    public void delete(String id) {
        this.moradorRepository.deleteById(id);
    }


}
