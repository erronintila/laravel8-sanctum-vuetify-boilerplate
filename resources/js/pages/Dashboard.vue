<template>
    <v-container>
        <h1>Welcome <span v-if="user">{{ user.name }}</span></h1>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "dashboard",
    computed: {
        ...mapGetters({
            user: "auth/user"
        })
    }
};
</script>