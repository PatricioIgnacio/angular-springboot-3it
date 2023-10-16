package com.gestion.personas.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "personas")

public class Persona {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "nombre", length = 60, nullable = false)
	private String nombre;

	@Column(name = "musica", length = 60, nullable = false)
	private String musica;

	@Column(name = "email", length = 60, nullable = false, unique = true)
	private String email;

	public Persona() {

	}

	public Persona(Long id, String nombre, String musica, String email) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.musica = musica;
		this.email = email;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getMusica() {
		return musica;
	}

	public void setMusica(String musica) {
		this.musica = musica;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
