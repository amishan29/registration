package com.example.Registration.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Users {

    public Users(){

    }

    public Users(String email, String name, String password, String phone){
        super();
        this.email=email;
        this.name=name;
        this.password=password;
        this.phone=phone;
    }

    public String getEmail(){
        return email;
    }
    public void setEmail(String email){
        this.email = email;
    }
    
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }

    public String getPhone(){
        return phone;
    }
    public void setPhone(String phone){
        this.phone = phone;
    }

    public String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password = password;
    }


    @Id
    private String email;

    private String name;

    private String phone;

    private String password;
}
