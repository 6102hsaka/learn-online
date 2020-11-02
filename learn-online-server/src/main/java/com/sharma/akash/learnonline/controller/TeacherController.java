package com.sharma.akash.learnonline.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sharma.akash.learnonline.model.Teacher;
import com.sharma.akash.learnonline.service.TeacherService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = "/teacher")
public class TeacherController {
	@Autowired
	private TeacherService service;

	@GetMapping(value = "/teachers", produces = MediaType.APPLICATION_STREAM_JSON_VALUE)
	public Flux<Teacher> getAllTeachers() {
		return service.getAllTeachers();
	}

	@GetMapping(value = "{id}")
	public Mono<Teacher> getTeacherById(@PathVariable("id") String id) {
		return service.getTeacherById(id);
	}

	@GetMapping(value = "/subject/{subjectId}", produces = MediaType.APPLICATION_STREAM_JSON_VALUE)
	public Flux<Teacher> getTeacherBySubject(@PathVariable("subjectId") String subject) {
		return service.getTeacherBySubject(subject);
	}

	@PostMapping(value = "/save")
	public Mono<Teacher> saveTeacher(Teacher teacher) {
		return service.saveTeacher(teacher);
	}

	@PostMapping(value = "/login")
	public Mono<Teacher> isValidTeacher(Teacher teacher) {
		return service.isValidTeacher(teacher);
	}

	@PutMapping
	public Mono<Teacher> updateTeacher(Teacher teacher) {
		return service.updateTeacher(teacher);
	}

	@DeleteMapping(value = "/{id}")
	public Mono<Teacher> deleteTeacher(@PathVariable("id") String id) {
		return service.deleteTeacher(id);
	}
}
