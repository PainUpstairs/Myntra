package com.myntra.project;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ProjectApplication {

	// @Bean
	// WebMvcConfigurer CorsSetup(){
	// 	var config = new WebMvcConfigurer() {
			
	// 		@Override
	// 		public void addCorsMappings(CorsRegistry registry){
	// 			registry
	// 			.addMapping("/**")
	// 			.allowedOrigins("http://localhost:3000")
	// 			.allowedMethods("*");
	// 		}
	// 	};

	// 	return config;
	// }

	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
		System.out.println("started...");
	}
}
