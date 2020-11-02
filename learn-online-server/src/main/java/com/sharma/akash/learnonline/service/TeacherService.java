package com.sharma.akash.learnonline.service;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sharma.akash.learnonline.model.Teacher;
import com.sharma.akash.learnonline.repository.TeacherRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class TeacherService {
	@Autowired
	private TeacherRepository teacherRepository;

	public Mono<Teacher> saveTeacher(Teacher teacher) {
		return teacherRepository.save(teacher);
	}

	public Mono<Teacher> updateTeacher(Teacher teacher) {
		return teacherRepository.save(teacher);
	}

	public Mono<Teacher> getTeacherById(String id) {
		return teacherRepository.findById(id);
	}

	// Get list of all teacher who taught :subject
	public Flux<Teacher> getTeacherBySubject(String subject) {
		return teacherRepository.findBySubject(subject);
	}

	// Id and password are used for validating Teacher
	public Mono<Teacher> isValidTeacher(Teacher teacher) {
		return teacherRepository.findByIdAndPassword(teacher.getId(), teacher.getPassword());
	}

	public Flux<Teacher> getAllTeachers() {
		return teacherRepository.findAll();
	}

	public Mono<Teacher> deleteTeacher(String id) {
		Mono<Teacher> teacher = getTeacherById(id);
		if (Objects.isNull(teacher)) {
			return Mono.empty();
		}
		return teacher.switchIfEmpty(Mono.empty()).filter(Objects::nonNull).flatMap(
				teacherToBeDeleted -> teacherRepository.delete(teacherToBeDeleted).then(Mono.just(teacherToBeDeleted)));
	}
}
