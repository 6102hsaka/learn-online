package com.sharma.akash.learnonline.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SendEmailService {
	@Autowired
	private JavaMailSender javaMailSender;

	public boolean sendEmail(String to, String subject, String body) {
		try {
			SimpleMailMessage mailMessage = new SimpleMailMessage();
			mailMessage.setFrom("develop.swachhpio@gmail.com");
			mailMessage.setTo(to);
			mailMessage.setSubject(subject);
			mailMessage.setText(body);
			javaMailSender.send(mailMessage);
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}
}
