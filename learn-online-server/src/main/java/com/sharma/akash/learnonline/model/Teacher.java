package com.sharma.akash.learnonline.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor @AllArgsConstructor 
@Getter @Setter
@ToString(exclude = "password")
@Document
public class Teacher {
	@Id
	private String id;
	private String name;
	private int age;
	private String subject;
	private String password;
	private long mobileNo;
	private String emailId;
}
