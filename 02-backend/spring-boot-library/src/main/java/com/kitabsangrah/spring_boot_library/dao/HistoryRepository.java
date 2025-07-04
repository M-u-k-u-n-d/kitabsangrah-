package com.kitabsangrah.spring_boot_library.dao;

import com.kitabsangrah.spring_boot_library.entity.History;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin(origins = "http://localhost:5173", methods = RequestMethod.GET)
public interface HistoryRepository extends JpaRepository<History, Long> {
    Page<History> findBooksByUserEmail(String userEmail, Pageable pageable);
}
