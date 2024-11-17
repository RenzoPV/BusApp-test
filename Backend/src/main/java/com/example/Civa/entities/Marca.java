package com.example.Civa.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "marcas")
@Data
public class Marca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, unique = true)
    private String nombre;
}
