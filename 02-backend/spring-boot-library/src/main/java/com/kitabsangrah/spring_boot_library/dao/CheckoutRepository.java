package com.kitabsangrah.spring_boot_library.dao;

import com.kitabsangrah.spring_boot_library.entity.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173",methods = RequestMethod.GET)
public interface CheckoutRepository extends JpaRepository<Checkout, Long> {

    Checkout findByUserEmailAndBookId(String userEmail, Long bookId);

    List<Checkout> findByUserEmail(String userEmail); // ✅ Correct method name

    @Modifying
    @Transactional // ✅ Required for update/delete queries
    @Query("DELETE FROM Checkout c WHERE c.bookId = :bookId") // ✅ JPQL uses field names, not column names
    void deleteAllByBookId(@Param("bookId") Long bookId);
}
