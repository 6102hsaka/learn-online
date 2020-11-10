package com.sharma.akash.learnonline.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sharma.akash.learnonline.model.Message;
import com.sharma.akash.learnonline.service.MessageService;

import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/message")
public class MessageController {
	@Autowired
	private MessageService messageService;

	@GetMapping("/save")
	public Mono<Message> saveMessage(Message message) {
		return messageService.saveMessage(message);
	}

	@GetMapping(value = "get", produces = MediaType.APPLICATION_STREAM_JSON_VALUE)
	public Mono<List<Message>> getMessages() {
		return messageService.getMessages().collectList();
	}
}
