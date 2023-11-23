package com.condominio.condominio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.condominio.condominio.service.MoradorService;
import com.condominio.condominio.model.MoradorModel;

@RestController
@RequestMapping("/morador")
public class MoradorController {

    @Autowired
    private MoradorService moradorService;

    @GetMapping("")
    public List<MoradorModel> getAllMoradores() {
        return moradorService.findAll();
    }

    @PostMapping("")
    public void newMorador(@RequestBody MoradorModel newMorador) { 
        moradorService.save(newMorador);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticateMorador(@RequestBody MoradorModel moradorModel) {
        String nome = moradorModel.getName();
        String senha = moradorModel.getSenha();

        if (moradorService.authenticate(nome, senha)) {
            return ResponseEntity.ok("Autenticação bem-sucedida");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Falha na autenticação");
        }
    }

    @DeleteMapping("/{id}")
    public void deleteMorador(@PathVariable String id) {
        moradorService.delete(id);
    }
}
