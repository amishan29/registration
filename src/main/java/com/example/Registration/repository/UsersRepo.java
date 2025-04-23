package com.example.Registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Registration.entity.Users;

@Repository
public interface UsersRepo extends JpaRepository<Users, String>{

}
