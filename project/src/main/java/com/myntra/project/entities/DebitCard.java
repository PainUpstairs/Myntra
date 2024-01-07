
package com.myntra.project.entities;

import java.math.BigInteger;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "DebitCard")
public class DebitCard {
    @Id
    private String debitCardNumber;
    private BigInteger Amount;
}