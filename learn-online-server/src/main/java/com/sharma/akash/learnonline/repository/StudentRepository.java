package com.sharma.akash.learnonline.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.sharma.akash.learnonline.model.Student;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public interface StudentRepository extends ReactiveMongoRepository<Student, String>{
	public Mono<Student> findByClassEnrolledAndRollNumberAndPassword(int classEnrolled, int rollNumber, String password);
	public Flux<Student> findByClassEnrolled(int classEnrolled);
}
