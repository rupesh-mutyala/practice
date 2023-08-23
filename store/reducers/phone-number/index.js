import { createSlice } from '@reduxjs/toolkit';

const phoneNumberSlice = createSlice({
	name: 'phone-number',
	initialState: { rupesh: '6303894655' },
	reducers: {
		setPhoneNumber: (state, action) => ({ ...state, ...action.payload }),
	},
});

export const { setPhoneNumber } = phoneNumberSlice.actions;

export default phoneNumberSlice.reducer;
