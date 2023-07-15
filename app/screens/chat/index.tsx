import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useSocketStore } from "@stores/socket.store";
import { useAuthStore } from "@stores/auth.store";
import {useRoomStore} from '@stores/room.store';

import { PencilSquareIcon } from 'react-native-heroicons/solid'

const Chat = () => {
  const { socket } = useSocketStore();
  const { user } = useAuthStore(); 
  const { rooms } = useRoomStore();

  return (
    <View>
      <View className='absolute right-4'>
        <PencilSquareIcon color='black' size={28} />
      </View>
      {rooms.map((room) => (
        <View>
          {
            room.users.length > 2 ? (
              <Text></Text>
            ) : (
              <Text>{}</Text>
            )
          }
        </View>
      ))}
    </View>
  );
};

export default Chat;
