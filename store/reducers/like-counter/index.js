import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: { value: 0 },
	reducers: {
		increment: (state) => ({
			...state,
			vaue: state.value + 1,
		}),
		decrement: (state) => ({
			...state,
			vaue: state.value - 1,
		}),
		incrementByAmount: (state, action) => ({
			...state,
			vaue: state.value + action.payload,
		}),
		decreaseByAmount: (state, action) => ({
			...state,
			vaue: state.value - action.payload,
		}),
	},
});

export const { increment, decrement, incrementByAmount, decreaseByAmount } =
	counterSlice.actions;

export default counterSlice.reducer;
