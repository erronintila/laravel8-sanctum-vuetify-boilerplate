<template>
    <v-container>
        <h1>
            Welcome <span v-if="user">, {{ user.name }}</span>
        </h1>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "home",
    computed: {
        ...mapGetters({
            user: "auth/user"
        })
    },
    methods: {
        ...mapActions({
            logout: "auth/AUTH_LOGOUT"
        }),
        async onLogout() {
            await this.logout();
            window.location.replace("/");
        }
    }
};