package main.java.com.condominio.condominio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import main.java.com.condominio.condominio.service.MoradorService;
import main.java.com.condominio.condominio.model.MoradorModel;

@RestController
@RequestMapping("/moradores")
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

    @DeleteMapping("/{id}")
    public void deleteMorador(@PathVariable String id) {
        moradorService.delete(id);
    }
}
