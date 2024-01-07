package com.myntra.project.entities;

import java.math.BigInteger;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "CreditCard")
public class CreditCard {
    @Id
    private String creditCardNumber;
    private BigInteger Amount;
}
