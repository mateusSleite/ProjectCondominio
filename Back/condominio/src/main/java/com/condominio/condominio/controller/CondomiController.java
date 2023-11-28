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

    @PostMapping("/new")
    public void newCondo(@RequestBody CondomiModel newCondo) {
        condomiService.save(newCondo);
    }

    @PostMapping("/admModi")
    public ResponseEntity<String> admModi(@RequestBody Map<String, String> credentials) {
        String bloco = credentials.get("bloco");
        String apto = credentials.get("apto");

        System.out.println(bloco);
        System.out.println(apto);

        boolean isStatusChanged = condomiService.mudarAtivo(bloco, apto);

        if (isStatusChanged) {
            return ResponseEntity.ok("Status do condomínio alterado com sucesso");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");
        }
    }

    @DeleteMapping("/{id}")
    public void deleteApto(@PathVariable String id) {
        condomiService.delete(id);
    }

    private static class DadosBlocoResponse {
        private final long quantidadeTotal;
        private final long quantidadeDisponivel;

        public DadosBlocoResponse(long quantidadeTotal, long quantidadeDisponivel) {
            this.quantidadeTotal = quantidadeTotal;
            this.quantidadeDisponivel = quantidadeDisponivel;
        }
    }
}
