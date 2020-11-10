package com.sharma.akash.learnonline.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter @Setter @ToString
@Document
public class Message {
	@Id
	private String id;
	private String userId;
	private String username;
	@DateTimeFormat(iso = ISO.DATE_TIME)
	private Date date = new Date();
	private String message;
	
	public Message(String userId, String username, String message) {
		this.userId = userId;
		this.username = username;
		this.message = message;
	}
}
