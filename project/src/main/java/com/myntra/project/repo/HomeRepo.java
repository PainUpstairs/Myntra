package com.myntra.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myntra.project.entities.Login;
import java.util.List;

@Repository
public interface HomeRepo extends JpaRepository<Login,String>
{
    // List<Login> findByEmailIdAndPassword(String email,String password);
    Login findByEmailIdAndPassword(String emailId, String password);

    List<Login> findByEmailId(String emailId);

    
}
