<template>
    <v-container>
        <h1>Profile</h1>
        <div class="my-4">
            <p>Name: {{ user ? user.name : "" }}</p>
            <p>Email: {{ user ? user.email : "" }}</p>
            <p>Date Created: {{ user ? user.created_at : "" }}</p>
        </div>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "profile",
    computed: {
        ...mapGetters({
            user: "auth/user"
        })
    }
};
</script>