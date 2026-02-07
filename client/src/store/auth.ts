import { createEffect, createStore, createEvent } from 'effector';
import { authAPI, userAPI } from '../api';

export const setToken = createEvent<string | null>();
export const setUser = createEvent<any | null>();
export const logout = createEvent();

export const registerFx = createEffect(async (userData: any) => {
  const response = await authAPI.register(userData);
  localStorage.setItem('token', response.token);
  return response;
});

export const loginFx = createEffect(async (credentials: any) => {
  const response = await authAPI.login(credentials);
  localStorage.setItem('token', response.token);
  return response;
});

export const getProfileFx = createEffect(async () => {
  return await userAPI.getProfile();
});

export const updateProfileFx = createEffect(async (userData: any) => {
  return await userAPI.updateProfile(userData);
});

export const deleteProfileFx = createEffect(async () => {
  const response = await userAPI.deleteProfile();
  localStorage.removeItem('token');
  return response;
});

export const $token = createStore<string | null>(localStorage.getItem('token'))
  .on(setToken, (_, token) => token)
  .on(logout, () => {
    localStorage.removeItem('token');
    return null;
  });

export const $user = createStore<any | null>(null)
  .on(setUser, (_, user) => user)
  .on(registerFx.doneData, (_, response) => response.user)
  .on(loginFx.doneData, (_, response) => response.user)
  .on(getProfileFx.doneData, (_, response) => response)
  .on(updateProfileFx.doneData, (_, response) => response.user)
  .on(deleteProfileFx.done, () => null)
  .on(logout, () => null);

$token.watch((token) => {
  if (token) {
    localStorage.setItem('token', token);
  }
});