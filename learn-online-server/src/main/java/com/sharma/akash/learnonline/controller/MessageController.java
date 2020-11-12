package com.sharma.akash.learnonline.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sharma.akash.learnonline.model.Message;
import com.sharma.akash.learnonline.service.MessageService;

import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MessageController {
	@Autowired
	private MessageService messageService;

	@PostMapping("/message/save")
	public Mono<Message> saveMessage(Message message) {
		System.out.println(message);
		return messageService.saveMessage(message);
	}

	@GetMapping(value = "/message/get", produces = MediaType.APPLICATION_STREAM_JSON_VALUE)
	public Mono<List<Message>> getMessages() {
		return messageService.getMessages().collectList();
	}

	@MessageMapping("/all")
	@SendTo("/topic/all")
	public Mono<Message> post(@Payload Map<String, String> message) {
		Message generatedMessage = new Message(message.get("userId"), message.get("username"), message.get("message"));
		return messageService.saveMessage(generatedMessage);
	}
}
