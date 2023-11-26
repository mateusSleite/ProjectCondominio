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
import java.util.Map;


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

    @PostMapping("/login")
        public ResponseEntity<String> authenticateUser(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("name");
        String password = credentials.get("senha");

        System.out.println("Úsuario: " + username);
        System.out.println("Senha: " + password);

        boolean isAuthenticated = moradorService.authenticateUser(username, password);

        if (isAuthenticated) {
            return ResponseEntity.ok("Login bem-sucedido");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");
        }
    }


    @DeleteMapping("/{id}")
    public void deleteMorador(@PathVariable String id) {
        moradorService.delete(id);
    }
}
