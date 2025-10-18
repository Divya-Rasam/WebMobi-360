package com.webmobi.demo.controller;

import com.webmobi.demo.model.User;
import com.webmobi.demo.repository.UserRepository;
import com.webmobi.demo.response.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.HashMap;
import java.util.Map;

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

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            List<User> users = userRepository.findAll();
            // Don't send passwords in the response
            users.forEach(user -> user.setPassword(null));
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}