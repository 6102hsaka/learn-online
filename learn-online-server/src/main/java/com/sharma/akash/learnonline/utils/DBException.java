package com.sharma.akash.learnonline.utils;

public class DBException extends Exception {

	private static final long serialVersionUID = 2592161522837376237L;
	private DBExceptionCode dbExceptionCode;
	
	public DBException(DBExceptionCode dbExceptionCode) {
		super();
		this.dbExceptionCode = dbExceptionCode;
	}
	
	public DBException(DBExceptionCode dbExceptionCode, String message) {
		super(message);
		this.dbExceptionCode = dbExceptionCode;
	}

	public DBExceptionCode getDbExceptionCode() {
		return dbExceptionCode;
	}

	public void setDbExceptionCode(DBExceptionCode dbExceptionCode) {
		this.dbExceptionCode = dbExceptionCode;
	}
}
