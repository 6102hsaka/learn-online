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

import com.sharma.akash.learnonline.model.Student;
import com.sharma.akash.learnonline.service.StudentService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = "/student")
public class StudentController {
	@Autowired
	private StudentService service;

	@GetMapping(value = "/students", produces = MediaType.APPLICATION_STREAM_JSON_VALUE)
	public Flux<Student> getAllStudents() {
		return service.getAllStudents();
	}

	@GetMapping(value = "/{id}")
	public Mono<Student> getStudentById(@PathVariable("id") String id) {
		return service.getStudentById(id);
	}

	@GetMapping(value = "/class/{classEnrolled}", produces = MediaType.APPLICATION_STREAM_JSON_VALUE)
	public Flux<Student> getStudentsByClassEnrolled(@PathVariable("classEnrolled") int classEnrolled) {
		return service.getStudentsByClassEnrolled(classEnrolled);
	}

	@PostMapping(value = "/save")
	public Mono<Student> saveStudent(Student student) {
		return service.saveStudent(student);
	}

	@PostMapping(value = "/login")
	public Mono<Student> isValidStudent(Student student) {
		return service.isValidStudent(student);
	}

	@PutMapping
	public Mono<Student> updateStudent(Student student) {
		return service.updateStudent(student);
	}

	@DeleteMapping(value = "/{id}")
	public Mono<Student> deleteStudent(@PathVariable("id") String id) {
		return service.deleteStudent(id);
	}
}
