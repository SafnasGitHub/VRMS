package com.vsms.repository;

import com.vsms.entity.ServiceRequest;
import com.vsms.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ServiceRequestRepository extends JpaRepository<ServiceRequest, Long> {
    List<ServiceRequest> findByCustomer(User customer);
    List<ServiceRequest> findByMechanic(User mechanic);
    List<ServiceRequest> findByStatus(ServiceRequest.RequestStatus status);
} 