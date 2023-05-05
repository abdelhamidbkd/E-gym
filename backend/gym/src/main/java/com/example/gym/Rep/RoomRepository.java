package com.example.gym.Rep;

import com.example.gym.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface RoomRepository extends JpaRepository<Room, Long>, JpaSpecificationExecutor<Room> {

    Room findRoomByroomId(long id);

    Room findRoomByroomName(String name);
}