package com.sharma.akash.learnonline.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sharma.akash.learnonline.model.Email;
import com.sharma.akash.learnonline.model.Student;
import com.sharma.akash.learnonline.model.Teacher;
import com.sharma.akash.learnonline.service.StudentService;
import com.sharma.akash.learnonline.service.TeacherService;
import com.sharma.akash.learnonline.utils.DBException;
import com.sharma.akash.learnonline.utils.DBExceptionCode;
import com.sharma.akash.learnonline.utils.SendEmailService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/teacher")
public class TeacherController {
	@Autowired
	private TeacherService service;
	@Autowired
	private StudentService studentService;
	@Autowired
	private SendEmailService emailService;

	@GetMapping(value = "/teachers", produces = MediaType.APPLICATION_STREAM_JSON_VALUE)
	public Mono<List<Teacher>> getAllTeachers() {
		return service.getAllTeachers().collectList();
	}

	@GetMapping(value = "{id}")
	public Mono<ResponseEntity> getTeacherById(@PathVariable("id") String id) {
		return service.getTeacherById(id).flatMap(t -> Mono.just(new ResponseEntity(t, HttpStatus.OK)))
				.onErrorResume(exception -> {
					if (exception instanceof DBException) {
						DBException dbException = (DBException) exception;
						if (dbException.getDbExceptionCode() == DBExceptionCode.USER_NOT_AVAILABLE) {
							return Mono.just(new ResponseEntity(HttpStatus.BAD_REQUEST));
						}
					}
					return Mono.just(new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR));
				});
	}

	@GetMapping(value = "/subject/{subjectId}", produces = MediaType.APPLICATION_STREAM_JSON_VALUE)
	public Flux<Teacher> getTeacherBySubject(@PathVariable("subjectId") String subject) {
		return service.getTeacherBySubject(subject);
	}

	@PostMapping(value = "/save")
	public Mono<ResponseEntity> saveTeacher(Teacher teacher) {
		return service.saveTeacher(teacher).flatMap(t -> Mono.just(new ResponseEntity(t, HttpStatus.CREATED)))
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
	public Mono<ResponseEntity> isValidTeacher(Teacher teacher) {
		return service.isValidTeacher(teacher).flatMap(t -> Mono.just(new ResponseEntity(t, HttpStatus.OK)))
				.onErrorResume(exception -> {
					if (exception instanceof DBException) {
						DBException dbException = (DBException) exception;
						if (dbException.getDbExceptionCode() == DBExceptionCode.USER_NOT_AVAILABLE) {
							return Mono.just(new ResponseEntity(HttpStatus.BAD_REQUEST));
						}
					}
					return Mono.just(new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR));
				});
	}

	@PutMapping
	public Mono<Teacher> updateTeacher(Teacher teacher) {
		return service.updateTeacher(teacher);
	}

	@DeleteMapping(value = "/{id}")
	public Mono<Teacher> deleteTeacher(@PathVariable("id") String id) {
		return service.deleteTeacher(id);
	}

	@PostMapping(value = "/send")
	public Flux<Student> notifyStudents(Email email) {
		return studentService.getStudentsByClassEnrolled(email.getClassEnrolled()).doOnNext(student -> {
			emailService.sendEmail(student.getEmailId(), email.getSubject(), email.getBody());
			System.out.println("mail sent to: " + student.getEmailId());

		});
	}
}
