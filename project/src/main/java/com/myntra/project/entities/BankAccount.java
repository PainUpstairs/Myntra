package com.myntra.project.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "BackAccount")
public class BankAccount{
    @Id
    private String bankAccountNumber;
    private String customerName;    
}
