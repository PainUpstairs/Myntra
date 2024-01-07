package com.myntra.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myntra.project.entities.Login;
import com.myntra.project.repo.HomeRepo;


@Service
public class HomeServices {
    
    @Autowired
    HomeRepo homeRepo;

    public Boolean Login(Login login){
        System.out.println("email"+login.getEmailId());        
        System.out.println("password"+login.getPassword());        

        var customerExists = homeRepo.findByEmailIdAndPassword(login.getEmailId(), login.getPassword());
        System.out.println("loginData: "+customerExists);

        if( customerExists == null){
            return false;
        }
        return true;
    }
    
}