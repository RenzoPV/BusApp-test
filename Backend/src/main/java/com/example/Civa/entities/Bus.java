package com.example.Civa.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "buses")
@Data
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id;

    @Column(nullable = false)
    private String numeroBus;

    @Column(nullable = false, unique = true)
    private String placa;

    @Column(nullable = false, updatable = false)
    private LocalDateTime fechaCreacion = LocalDateTime.now();

    private String caracteristicas;

    @Column(nullable = false)
    private boolean activo;

    @ManyToOne
    @JoinColumn(name = "marca_id", nullable = false)
    private Marca marca;
}
