<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  v-model="user.image"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="user.username"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="user.bio"
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="user.email"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" placeholder="Password" />
              </fieldset>
              <button
                @click="updateProfile"
                class="btn btn-lg btn-primary pull-xs-right"
              >Update Settings</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import users from "@/store/modules/users";
import { User } from "@/store/models";

@Component
export default class Settings extends Vue {
  user: Partial<User> = {};

  created() {
    this.user = users.user || {};
  }

  async updateProfile() {
    alert("HEHE")
    await users.updateProfile({
      email: this.user?.email,
      username: this.user?.username,
      password: this.user?.password,
      image: this.user?.image,
    });

    this.user = users.user || {};
  }
}
</script>