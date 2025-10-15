package com.webmobi.demo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webmobi.demo.model.User;
import com.webmobi.demo.repository.UserRepository;
import com.webmobi.demo.response.ApiResponse;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse> signup(@RequestBody User user) {
        try {
            // Check if user already exists
            if (userRepository.findByEmail(user.getEmail()) != null) {
                return ResponseEntity.badRequest().body(new ApiResponse(false, "User with this email already exists"));
            }
            
            // Save new user
            User newUser = userRepository.save(user);
            
            // Create response data (without password)
            Map<String, Object> userData = new HashMap<>();
            userData.put("id", newUser.getId());
            userData.put("name", newUser.getName());
            userData.put("email", newUser.getEmail());
            
            return ResponseEntity.ok(new ApiResponse(true, "User registered successfully", userData));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(new ApiResponse(false, "Error during signup: " + e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse> login(@RequestBody User loginUser) {
        try {
            // Find user by email
            User user = userRepository.findByEmail(loginUser.getEmail());
            
            if (user == null) {
                return ResponseEntity.badRequest().body(new ApiResponse(false, "User not found"));
            }
            
            // Check password
            if (!user.getPassword().equals(loginUser.getPassword())) {
                return ResponseEntity.badRequest().body(new ApiResponse(false, "Invalid password"));
            }
            
            // Create response data (without password)
            Map<String, Object> userData = new HashMap<>();
            userData.put("id", user.getId());
            userData.put("name", user.getName());
            userData.put("email", user.getEmail());
            
            return ResponseEntity.ok(new ApiResponse(true, "Login successful", userData));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(new ApiResponse(false, "Error during login: " + e.getMessage()));
        }
    }
}