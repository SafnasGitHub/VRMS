package com.vsms.entity;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "service_requests")
public class ServiceRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private User customer;

    @ManyToOne
    @JoinColumn(name = "mechanic_id")
    private User mechanic;

    @Column(nullable = false)
    private String vehicleMake;

    @Column(nullable = false)
    private String vehicleModel;

    @Column(nullable = false)
    private String serviceType;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private LocalDateTime requestDate;

    @Column
    private LocalDateTime appointmentDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RequestStatus status;

    @Column
    private Double estimatedCost;

    @Column
    private String mechanicNotes;

    public enum RequestStatus {
        PENDING,
        APPROVED,
        IN_PROGRESS,
        COMPLETED,
        CANCELLED
    }
} 