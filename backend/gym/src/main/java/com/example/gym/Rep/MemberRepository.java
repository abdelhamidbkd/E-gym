package com.example.gym.Rep;

import com.example.gym.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface MemberRepository extends JpaRepository<Member, Long>, JpaSpecificationExecutor<Member> {

    Member findMemberBymemberId(long id);

    Member findMemberBylastname(String lastname);

    Member findMemberBymembercode(String code);
}