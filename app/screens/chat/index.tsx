import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useSocketStore } from "@stores/socket.store";
import { useAuthStore } from "@stores/auth.store";
import { Response } from "@utils/types";

const Chat = () => {
  const { socket } = useSocketStore();
  const { userId } = useAuthStore();
  useEffect(() => {
    socket?.on(userId, (data: Response<any>) => {
      console.log(data);
    });
  });
  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
};

export default Chat;
