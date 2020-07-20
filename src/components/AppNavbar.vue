<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li v-if="username" class="nav-item">
          <router-link class="nav-link" to="/new">
            <i class="ion-compose"></i>&nbsp;New Post
          </router-link>
        </li>
        <li v-if="username" class="nav-item">
          <router-link class="nav-link" to="/settings">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
        <li v-if="username" class="nav-item">
          <router-link class="nav-link" :to="'/@'+username">
            <i class="ion-person-outline"></i>
            &nbsp; {{username}}
          </router-link>
        </li>
        <li v-if="username" class="nav-item">
          <a class="nav-link" href>Sign out</a>
        </li>
        <li v-if="!username" class="nav-item">
          <router-link class="nav-link" to="/signup">Sign up</router-link>
        </li>
        <li v-if="!username" class="nav-item">
          <router-link class="nav-link" to="/signin">Sign in</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import users from "@/store/modules/users";

@Component
export default class AppNavbar extends Vue {
  get username() {
    return users.username;
  }
}
</script>

