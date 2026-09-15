package com.devprath.Devprath.repository;

import com.devprath.Devprath.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface BlogRepository extends JpaRepository<Blog, UUID> {
}
