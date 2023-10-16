package com.gestion.personas.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.personas.exceptions.ResourceNotFoundException;
import com.gestion.personas.modelo.Persona;
import com.gestion.personas.repositorio.PersonaRepositorio;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/v1/")

public class PersonaControlador {
	@Autowired
	private PersonaRepositorio repositorio;

	@GetMapping("/personas")
	public List<Persona> listarTodasLasPersonas() {
		return repositorio.findAll();
	}

	@PostMapping("/personas")
	public Persona guardarPersona(@RequestBody Persona persona) {
		return repositorio.save(persona);
	}

	@GetMapping("/personas/{id}")
	public ResponseEntity<Persona> obtenerPersonaPorId(@PathVariable Long id) {
		Persona persona = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException(("No existe la persona: " + id)));
		return ResponseEntity.ok(persona);
	}

	@PutMapping("/personas/{id}")
	public ResponseEntity<Persona> actualizarPersonaPorId(@PathVariable Long id, @RequestBody Persona detallesPersona) {
		Persona persona = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException(("No existe la persona: " + id)));
		
		persona.setNombre(detallesPersona.getNombre());
		persona.setMusica(detallesPersona.getMusica());
		persona.setEmail(detallesPersona.getEmail());
		
		
		Persona personaActualizada = repositorio.save(persona);
		return ResponseEntity.ok(personaActualizada);
	}
	
	@DeleteMapping("/personas/{id}")
	public ResponseEntity<Map<String,Boolean>> eliminarPersona(@PathVariable Long id){
		Persona persona = repositorio.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("No existe la persona : " + id));
		
		repositorio.delete(persona);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar", Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
	}
}
