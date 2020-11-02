package com.sharma.akash.learnonline.service;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sharma.akash.learnonline.model.Student;
import com.sharma.akash.learnonline.repository.StudentRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class StudentService {
	@Autowired
	private StudentRepository studentRepository;

	public Mono<Student> saveStudent(Student student) {
		// student.id => student.class$student.rollNO
		student.setId(student.getClassEnrolled() + "$" + student.getRollNumber());
		return studentRepository.save(student);
	}

	public Mono<Student> updateStudent(Student student) {
		return studentRepository.save(student);
	}

	public Mono<Student> getStudentById(String id) {
		return studentRepository.findById(id);
	}

	// Get list of all students who are studing in :classEnrolled
	public Flux<Student> getStudentsByClassEnrolled(int classEnrolled) {
		return studentRepository.findByClassEnrolled(classEnrolled).switchIfEmpty(Flux.empty());
	}

	// class, roll No. and password are use for authenticating students
	public Mono<Student> isValidStudent(Student student) {
		return studentRepository.findByClassEnrolledAndRollNumberAndPassword(student.getClassEnrolled(),
				student.getRollNumber(), student.getPassword());
	}

	public Flux<Student> getAllStudents() {
		return studentRepository.findAll().switchIfEmpty(Flux.empty());
	}

	public Mono<Student> deleteStudent(String id) {
		Mono<Student> student = getStudentById(id);
		if (Objects.isNull(student)) {
			return Mono.empty();
		}
		return student.switchIfEmpty(Mono.empty()).filter(Objects::nonNull).flatMap(
				studentToBeDeleted -> studentRepository.delete(studentToBeDeleted).then(Mono.just(studentToBeDeleted)));
	}

}
