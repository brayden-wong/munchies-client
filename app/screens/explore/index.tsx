import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import axios from "axios";

import { useDebounce } from "@hooks/useDebounce";
import { Response } from "@utils/types";
import { useAuthStore } from "@stores/auth.store";
import { useRequest } from "@hooks/useRequest";

import { API_URL } from "@env";

const Explore = () => {
  const [explore, onChangeExplore] = useState("");
  const { at, rt, user } = useAuthStore();
  const debounceValue = useDebounce(explore, 500);
  const { data, error, loading } = useRequest<
    Array<{
      id: string;
      name: string;
      username: string;
      email: string;
      password: string;
      deactivate: boolean;
      createdAt: Date;
      updatedAt: Date;
      deletedAt: Date;
    }>
  >(`${API_URL}/users/all`, {
    method: "GET",
  });

  return (
    <View>
      <TextInput
        className="mx-8 rounded border-2 border-black p-2 text-[16px] placeholder:text-start placeholder:text-[16px]"
        value={explore}
        onChangeText={onChangeExplore}
        placeholder="explore"
        autoCapitalize="none"
      />
      <Text>{at()}</Text>
      <Text></Text>
      <Text>{rt()}</Text>
      <Text></Text>
      <Text>{debounceValue}</Text>
      <Text>{user?.id}</Text>
      <Text></Text>
      {(!error || !loading) &&
        data &&
        data?.map((user) => (
          <View key={user.id}>
            <Text>{user.id}</Text>
          </View>
        ))}
    </View>
  );
};

export default Explore;
