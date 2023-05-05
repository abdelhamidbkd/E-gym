package com.example.gym.controller;

import com.example.gym.Services.*;
import com.example.gym.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Member")
public class MemberController {
    private final MemberService Memberservice;

    @Autowired
    public MemberController(MemberService Memberservice) {
        this.Memberservice = Memberservice;
    }

    @GetMapping("")
    public List<Member> AllMembers() {
        return Memberservice.getAllMembers();
    }

    @PostMapping("/add")
    public boolean newMember(@RequestBody Member Member) {
        return Memberservice.createMember(Member);
    }

    @PutMapping("/update")
    public boolean editMember(@RequestBody Member Member) {
        return Memberservice.updateMember(Member);
    }

    @GetMapping("/{MemberId}")
    public Member MemberById(@PathVariable long MemberId) {
        return Memberservice.findMemberById(MemberId);
    }

    @GetMapping("/lastname/{lastname}")
    public Member MemberByTitle(@PathVariable String lastname) {
        return Memberservice.findMemberByName(lastname);
    }

    @DeleteMapping("/delete/{MemberId}")
    public void deleteByMember(@PathVariable long MemberId) {
        Memberservice.deleteMemberByMember(Memberservice.findMemberById(MemberId));
    }

    @PostMapping("/login")
    public boolean loginMember( @RequestBody Member member) {
        return Memberservice.loginMember(member);
    }

    @GetMapping("/code/{code}")
    public Member MemberByCode(@PathVariable String code) {
        return Memberservice.findMemberByCode(code);
    }

}
