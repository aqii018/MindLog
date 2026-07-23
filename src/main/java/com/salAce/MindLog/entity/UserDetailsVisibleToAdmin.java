package com.salAce.MindLog.entity;

import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.List;


@Data
@NoArgsConstructor

public class UserDetailsVisibleToAdmin {

    private String userName ;

    private String email;
    private boolean sentimentAnalysis ;
    private List<String> roles ;

}











