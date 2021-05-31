<template>
    <v-app>
        <v-app-bar v-if="user && authenticated" app color="primary" dark>
            <v-toolbar-title class="hidden-sm-and-down ml-0 pl-4 mr-4">
                <router-link
                    :to="{ name: 'home' }"
                    style="text-decoration: none; color: inherit;"
                >
                    <span class="title">Home</span>
                </router-link>
            </v-toolbar-title>

            <v-btn text v-if="authenticated" :to="{ name: 'dashboard' }">
                Dashboard
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon v-if="authenticated" :to="{ name: 'profile' }">
                <v-icon>mdi-account</v-icon>
            </v-btn>

            <v-btn icon v-if="authenticated" @click="onLogout">
                <v-icon>mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "app",
    computed: {
        ...mapGetters({
            user: "auth/user",
            authenticated: "auth/authenticated"
        })
    },
    methods: {
        ...mapActions({
            logout: "auth/AUTH_LOGOUT"
        }),
        async onLogout() {
            if (confirm("Do you want to log out?")) {
                try {
                    await this.logout();
                    this.$router.replace({ name: "login" });
                } catch (err) {
                    alert(err);
                }
            }
        }
    }
};
</script>
