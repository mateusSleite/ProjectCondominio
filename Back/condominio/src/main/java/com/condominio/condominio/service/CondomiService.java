package com.condominio.condominio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.condominio.condominio.service.CondomiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.condominio.condominio.repository.CondomiRepository;
import com.condominio.condominio.model.CondomiModel;

@Service
public class CondomiService {

    @Autowired
    private CondomiRepository condomiRepository;

    public CondomiModel save(CondomiModel condomiModel) {
        return this.condomiRepository.save(condomiModel);
    }

    public boolean mudarAtivo(String bloco, String apto) {
        CondomiModel condominio = this.condomiRepository.findByBlocoAndAptoAndAtivo(bloco, apto, false);
    
        if (condominio != null) {
            condominio.setAtivo(true);
            this.condomiRepository.save(condominio);
    
            return true;  
        } else {
            return false;
        }
    }

    public String getPrecoApto(String bloco, String apto) {
        CondomiModel condomi = condomiRepository.findByBlocoAndApto(bloco, apto);
        if (condomi != null) {
            return condomi.getPrice();
        } else {
            return null;
        }
    }

    public List<CondomiModel> findAll() {
        return this.condomiRepository.findAll();
    }

    public void delete(String id) {
        this.condomiRepository.deleteById(id);
    }

    public long getQuantidadeTotalAptosPorBloco(String bloco) {
        return condomiRepository.countByBloco(bloco);
    }

    public long getQuantidadeAptosDisponiveisPorBloco(String bloco) {
        return condomiRepository.countByBlocoAndAtivo(bloco, false);
    }
}


