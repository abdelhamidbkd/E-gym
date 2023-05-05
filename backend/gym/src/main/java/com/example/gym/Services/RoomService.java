package com.example.gym.Services;

import com.example.gym.Rep.*;
import com.example.gym.model.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {
    private final RoomRepository Roomrep;

    public RoomService(RoomRepository Roomrep) {
        this.Roomrep = Roomrep;
    }

    public List<Room> getAllRooms() {
        return Roomrep.findAll();
    }

    public Room findRoomById(long id) {
        return Roomrep.findRoomByroomId(id);
    }

    public Room findRoomByName(String name) {
        return Roomrep.findRoomByroomName(name);
    }

    public boolean createRoom(Room Room) {
        List<Room> Rooms = Roomrep.findAll();
        for (Room other : Rooms) {
            if (other.getRoomNum().toString().equals(Room.getRoomNum().toString()) || other.getRoomName().toString().equals(Room.getRoomName().toString())) {
                return false;
            }
        }
        Roomrep.save(Room);
        return true;
    }

    public boolean updateRoom(Room Room) {
        List<Room> Rooms = Roomrep.findAll();
        for (Room other : Rooms) {
            if (other.getRoomNum().toString().equals(Room.getRoomNum().toString()) || other.getRoomName().toString().equals(Room.getRoomName().toString())) {
                if (!other.getRoomId().equals(Room.getRoomId())) {
                    return false;
                }
            }
        }
        Roomrep.save(Room);
        return true;
    }



    public void deleteRoomByRoom(Room Room) {
        Roomrep.delete(Room);
    }
}
