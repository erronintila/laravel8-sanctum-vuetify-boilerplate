<template>
    <div>
        <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.mdAndUp" app>
            <!--  -->
        </v-navigation-drawer>

        <v-app-bar :clipped-left="$vuetify.breakpoint.mdAndUp" app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: null
        }
    },
}
</script>