package com.salAce.MindLog.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import org.springframework.data.mongodb.core.index.Indexed;


@Data
@NoArgsConstructor
// ADMIN / USER LOGIN DTO

public class CreateAdminDTO{

    @Indexed(unique = true)
    @NonNull
    private String userName ;
    @NonNull
    private String password ;
    private String email;


    private boolean sentimentAnalysis ;


}













