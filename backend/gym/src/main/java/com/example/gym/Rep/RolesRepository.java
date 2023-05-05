package com.example.gym.Rep;

import com.example.gym.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface RolesRepository extends JpaRepository<Roles, Long>, JpaSpecificationExecutor<Roles> {

    Roles findRolesByroleId(long id);

    Roles findRolesByuserId(Long id);
}