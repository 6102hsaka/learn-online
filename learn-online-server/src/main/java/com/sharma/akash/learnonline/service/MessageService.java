package com.sharma.akash.learnonline.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sharma.akash.learnonline.model.Message;
import com.sharma.akash.learnonline.repository.MessageRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class MessageService {
	@Autowired
	private MessageRepository messageRepository;

	public Mono<Message> saveMessage(Message message) {
		return messageRepository.save(message);
	}

	public Flux<Message> getMessages() {
		return messageRepository.findAll();
	}
}
