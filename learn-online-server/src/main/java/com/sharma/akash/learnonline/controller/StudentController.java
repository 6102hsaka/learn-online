package com.sharma.akash.learnonline.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sharma.akash.learnonline.model.Student;
import com.sharma.akash.learnonline.service.StudentService;
import com.sharma.akash.learnonline.utils.DBException;
import com.sharma.akash.learnonline.utils.DBExceptionCode;

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
	public Mono<ResponseEntity> getStudentById(@PathVariable("id") String id) {
		return service.getStudentById(id).flatMap(s -> Mono.just(new ResponseEntity(s, HttpStatus.FOUND)))
				.onErrorResume(exception -> {
					if(exception instanceof DBException) {
						DBException dbException = (DBException) exception;
						if(dbException.getDbExceptionCode() == DBExceptionCode.USER_NOT_AVAILABLE) {
							return Mono.just(new ResponseEntity(HttpStatus.NOT_FOUND));
						}
					}
					return Mono.just(new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR));
				});
	}

	@GetMapping(value = "/class/{classEnrolled}", produces = MediaType.APPLICATION_STREAM_JSON_VALUE)
	public Flux<Student> getStudentsByClassEnrolled(@PathVariable("classEnrolled") int classEnrolled) {
		return service.getStudentsByClassEnrolled(classEnrolled);
	}

	@PostMapping(value = "/save")
	public Mono<ResponseEntity> saveStudent(Student student) {
		return service.saveStudent(student).flatMap(s -> Mono.just(new ResponseEntity(s, HttpStatus.CREATED)))
				.onErrorResume(exception -> {
					if (exception instanceof DBException) {
						DBException dbException = (DBException) exception;
						if (dbException.getDbExceptionCode() == DBExceptionCode.USER_ALREADY_EXIST) {
							return Mono.just(new ResponseEntity(HttpStatus.BAD_REQUEST));
						}
					}
					return Mono.just(new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR));
				});
	}

	@PostMapping(value = "/login")
	public Mono<ResponseEntity> isValidStudent(Student student) {
		return service.isValidStudent(student).flatMap(s -> Mono.just(new ResponseEntity(s, HttpStatus.FOUND)))
				.onErrorResume(exception -> {
					if(exception instanceof DBException) {
						DBException dbException = (DBException) exception;
						if(dbException.getDbExceptionCode() == DBExceptionCode.USER_NOT_AVAILABLE) {
							return Mono.just(new ResponseEntity(HttpStatus.NOT_FOUND));
						}
					}
					return Mono.just(new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR));
				});
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
