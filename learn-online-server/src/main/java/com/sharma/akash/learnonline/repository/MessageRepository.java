package com.sharma.akash.learnonline.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.sharma.akash.learnonline.model.Message;

@Repository
public interface MessageRepository extends ReactiveMongoRepository<Message, String> {

}
