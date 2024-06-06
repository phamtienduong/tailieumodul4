import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import publicAxios from "../../config/publicAxios";

interface State {
  player: Player[];
  maxPoint: number;
}
interface Player {
  player: {
    id: number;
    name: string;
    point: number;
  };
}
const getPlayer: any = createAsyncThunk("player/getPlayer", async () => {
  const response = await publicAxios.get("/api/v1/player");
  console.log(response);
  return response.data;
});
const addPlayer: any = createAsyncThunk(
  "player/addPlayer",
  async (namePlayer) => {
    const response = await publicAxios.post("/api/v1/player", { namePlayer });
    console.log(response);
    return response.data.player;
  }
);
const initialState: State = {
  player: [],
  maxPoint: 0,
};
export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      getPlayer.fulfilled,
      (state: State, action: PayloadAction<Player[]>) => {
        // Add user to the state array
        state.player = action.payload;
      }
    );
    
  },
});

// Action creators are generated for each case reducer function

export default playerSlice.reducer;
