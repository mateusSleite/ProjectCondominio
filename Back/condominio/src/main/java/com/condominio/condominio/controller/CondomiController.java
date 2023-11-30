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

import com.condominio.condominio.service.CondomiService;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.condominio.condominio.model.CondomiModel;

@RestController
@RequestMapping("/condo")
public class CondomiController {

    @Autowired
    private CondomiService condomiService;

    @GetMapping("")
    public List<CondomiModel> getAllCondo() {
        return condomiService.findAll();
    }

    @GetMapping("/dadosBloco/{bloco}")
    public ResponseEntity<DadosBlocoResponse> getDadosBloco(@PathVariable String bloco) {
        long quantidadeTotal = condomiService.getQuantidadeTotalAptosPorBloco(bloco);
        long quantidadeDisponivel = condomiService.getQuantidadeAptosDisponiveisPorBloco(bloco);

        DadosBlocoResponse response = new DadosBlocoResponse(quantidadeTotal, quantidadeDisponivel);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/preco/{bloco}/{apto}")
    public ResponseEntity<String> getPrecoApto(@PathVariable String bloco, @PathVariable String apto) {
    try {
        String preco = condomiService.getPrecoApto(bloco, apto);
        if (preco != null) {
            return ResponseEntity.ok(preco);
        } else {
            return ResponseEntity.notFound().build();
        }
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao buscar o preço: " + e.getMessage());
    }
}


    @PostMapping("/new")
    public void newCondo(@RequestBody CondomiModel newCondo) {
        condomiService.save(newCondo);
    }

    @PostMapping("/admModi")
    public ResponseEntity<String> admModi(@RequestBody Map<String, String> credentials) {
        String bloco = credentials.get("bloco");
        String apto = credentials.get("apto");

        boolean isStatusChanged = condomiService.mudarAtivo(bloco, apto);

        if (isStatusChanged) {
            return ResponseEntity.ok("Status do condomínio alterado com sucesso");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");
        }
    }

    @PostMapping("/new/batch")
    public ResponseEntity<String> createMultipleCondos(@RequestBody List<CondomiModel> newCondos) {
        for (CondomiModel condo : newCondos) {
            condomiService.save(condo);
        }
        return ResponseEntity.ok("Apartamentos criados com sucesso");
    }

    @DeleteMapping("/{id}")
    public void deleteApto(@PathVariable String id) {
        condomiService.delete(id);
    }

    private static class DadosBlocoResponse {
         @JsonProperty("quantidadeTotal")
        private final long quantidadeTotal;
        @JsonProperty("quantidadeDisponivel")
        private final long quantidadeDisponivel;

        public DadosBlocoResponse(long quantidadeTotal, long quantidadeDisponivel) {
            
            this.quantidadeTotal = quantidadeTotal;
            this.quantidadeDisponivel = quantidadeDisponivel;
        }
    }
}
