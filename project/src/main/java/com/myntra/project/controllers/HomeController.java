package com.myntra.project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.concurrent.SuccessCallback;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myntra.project.entities.Login;
import com.myntra.project.repo.HomeRepo;
import com.myntra.project.services.HomeServices;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("Home")
public class HomeController {

    @Autowired
    HomeServices homeServices;

    @GetMapping("/Test")
    public String getMethodName() {
        return "Done";
    }

    @PostMapping("/Login")
    public Boolean Login2(@RequestBody Login login) {
        // System.out.println("s:"+loginData);
        // return false;
        System.out.println("email"+login.getEmailId());        
        System.out.println("password"+login.getPassword());  
        return homeServices.Login(login);

    }
}