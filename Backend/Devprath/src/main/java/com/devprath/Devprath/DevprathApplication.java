package com.devprath.Devprath;

import com.devprath.Devprath.config.NativeRuntimeHints;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportRuntimeHints;

@SpringBootApplication
@ImportRuntimeHints(NativeRuntimeHints.class)
public class DevprathApplication {

	public static void main(String[] args) {
		SpringApplication.run(DevprathApplication.class, args);
	}
}
