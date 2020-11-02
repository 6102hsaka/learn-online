package com.sharma.akash.learnonline.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.sharma.akash.learnonline.model.Teacher;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public interface TeacherRepository extends ReactiveMongoRepository<Teacher, String> {
	public Mono<Teacher> findByIdAndPassword(String id, String password);
	public Flux<Teacher> findBySubject(String subject);
}
