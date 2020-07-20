import {
  VuexModule,
  Module,
  getModule,
  Action,
  Mutation,
} from 'vuex-module-decorators';

import store from '@/store';
import { Profile, User, UserSubmit } from '../models';
import { signinUser, getProfile } from '../api';

@Module({
  namespaced: true,
  name: 'users',
  store,
  dynamic: true,
})
class UsersModule extends VuexModule {
  user: User | null = null;
  profile: Profile | null = null;

  @Mutation
  setUser(user: User) {
    this.user = user;
  }

  @Action({ commit: 'setUser' })
  async signinUser(userSubmit: UserSubmit) {
    const user = await signinUser(userSubmit);
    return user;
  }

  @Mutation
  setProfile(profile: Profile) {
    this.profile = profile
  }

  @Action({ commit: 'setProfile' })
  async loadProfile(username: string) {
    const profile = await getProfile(username);
    return profile
  }

  get username() {
    return (this.user && this.user.username) || null
  }
}

export default getModule(UsersModule);
