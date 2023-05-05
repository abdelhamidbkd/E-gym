package com.example.gym.Services;

import com.example.gym.Rep.*;
import com.example.gym.model.*;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class MemberService {
    private final MemberRepository Memberrep;

    public MemberService(MemberRepository Memberrep) {
        this.Memberrep = Memberrep;
    }

    public List<Member> getAllMembers() {
        return Memberrep.findAll();
    }

    public Member findMemberById(long id) {
        return Memberrep.findMemberBymemberId(id);
    }



    public boolean createMember(Member Member) {
        List<Member> Members = Memberrep.findAll();
        for (Member other : Members) {
            if (other.getCin().toString().equals(Member.getCin().toString())) {
                return false;
            }
        }
        Member.setStatus("Active");
        Memberrep.save(Member);
        return true;
    }

    public boolean updateMember(Member Member) {
        List<Member> Members = Memberrep.findAll();
        for (Member other : Members) {
            if (other.getCin().toString().equals(Member.getCin().toString())) {
                if (!other.getMemberId().equals(Member.getMemberId())) {
                    return false;
                }
            }
        }
        Member.setStatus("Active");
        Memberrep.save(Member);
        return true;
    }

    public Member findMemberByName(String lastname) {
        return Memberrep.findMemberBylastname(lastname);
    }

    public void deleteMemberByMember(Member Member) {
        Memberrep.delete(Member);
    }

    public boolean loginMember(Member member) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        List<Member> members = Memberrep.findAll();
        for (Member other : members) {
            if (other.getMembercode().toString().equals(member.getMembercode().toString())) {
                if (other.getPassword().toString().equals(member.getPassword().toString())){

                    java.util.Date utilDate = new java.util.Date(other.getSubscriptionExpire().getTime());
                    if(formatter.format(utilDate).compareTo(formatter.format(date)) < 0 || formatter.format(utilDate).compareTo(formatter.format(date)) == 0){
                        other.setStatus("Locked");
                        Memberrep.save(other);
                    }

                    return true;

                }
            }
        }
        return false;
    }

        public Member findMemberByCode(String code) {
            return Memberrep.findMemberBymembercode(code);
        }

}
