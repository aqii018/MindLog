package com.salAce.MindLog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

//@RestControllerx
@Controller
@RequestMapping("/")
public class PageController {


    @GetMapping()
    public String root() {
        return "forward:/login.html";
    }

    @GetMapping("/login")
    public String login() {
        return "forward:/login.html";
    }

    @GetMapping("/signup")
    public String signup() {
        return "forward:/signup.html";
    }

    @GetMapping("/journal")
    public String journal() {
        return "forward:/journal.html";
    }

    @GetMapping("/admin")
    public String admin() {
        return "forward:/admin.html";
    }
    @GetMapping("/weather")
    public String weather() {
        return "forward:/getWeather.html";
    }


    @GetMapping("/swagger-api")
    public String swagger() {
        return "forward:/swagger-ui/index.html";
    }

}
