package com.example.gym.controller;

import com.example.gym.Services.*;
import com.example.gym.model.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Room")
public class RoomController {
    private final RoomService Roomservice;

    @Autowired
    public RoomController(RoomService Roomservice) {
        this.Roomservice = Roomservice;
    }

    @GetMapping("")
    public List<Room> AllRooms() {
        return Roomservice.getAllRooms();
    }

    @PostMapping("/add")
    public boolean newRoom(@RequestBody Room Room) {
        return Roomservice.createRoom(Room);
    }

    @PutMapping("/update")
    public boolean editRoom(@RequestBody Room Room) {
        return Roomservice.updateRoom(Room);
    }

    @GetMapping("/{RoomId}")
    public Room RoomById(@PathVariable long RoomId) {
        return Roomservice.findRoomById(RoomId);
    }

    @GetMapping("/name/{RoomName}")
    public Room RoomByName(@PathVariable String RoomName) {
        return Roomservice.findRoomByName(RoomName);
    }



    @DeleteMapping("/delete/{RoomId}")
    public void deleteByRoom(@PathVariable long RoomId) {
        Roomservice.deleteRoomByRoom(Roomservice.findRoomById(RoomId));
    }
}
