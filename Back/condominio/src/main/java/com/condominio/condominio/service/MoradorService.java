package main.java.com.condominio.condominio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.java.com.condominio.condominio.service.MoradorService;
import main.java.com.condominio.condominio.model.MoradorModel;

@Service
public class MoradorService {

    private MoradorRepository moradorRepository;

    @Autowired
    public MoradorService(MoradorRepository moradorRepository) {
        this.moradorRepository = moradorRepository;
    }

    public MoradorModel save(MoradorModel moradorModel) {
        return this.moradorRepository.save(moradorModel);
    }

    public void save(String id, String name, String bloco, String apto) {
        this.moradorRepository.save(new MoradorModel(id, name, bloco, apto));
    }

    public List<MoradorModel> findAll() {
        return this.moradorRepository.findAll();
    }

    public void delete(String id) {
        this.moradorRepository.deleteById(id);
    }
}
