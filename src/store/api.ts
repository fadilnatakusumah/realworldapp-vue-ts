import axios from 'axios';
import { UserSubmit, User, UserResponse, ArticlesResponse, Profile, ProfileResponse } from './models';

export const conduitApi = axios.create({
  baseURL: 'https://conduit.productionready.io/api',
});

export function setJWT(jwt: string) {
  conduitApi.defaults.headers.common.Authorization = `Token ${jwt}`;
}
export function clearJWT() {
  delete conduitApi.defaults.headers.common.Authorization;
}

export async function signinUser(
  userData: UserSubmit,
): Promise<User | undefined> {
  try {
    const { data } = await conduitApi.post('/users/login', {
      user: userData,
    });
    return (data as UserResponse).user;
  } catch (err) {
    console.error('err', err.response.details);
  }
}

export async function getGlobalFeed() {
  const { data } = await conduitApi.get('/articles')
  return data as ArticlesResponse
}

export async function getProfile(username: string): Promise<Profile | undefined> {
  try {
    const { data } = await conduitApi.get(`/profiles/${username}`);
    return (data as ProfileResponse).profile
  } catch (error) {
    console.error("error", error)
  }
}