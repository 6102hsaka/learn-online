package com.sharma.akash.learnonline.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor @AllArgsConstructor 
@Getter @Setter @ToString
public class Email {
	private int classEnrolled;
	private String subject;
	private String body;
}
