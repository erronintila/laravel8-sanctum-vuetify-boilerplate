<template>
    <v-container fill-height fluid>
        <v-row>
            <v-col align="center" justify="center">
                <v-card elevation="0" light width="30rem">
                    <v-card-title>
                        <v-layout align-center justify-space-between>
                            <h3 class="headline">
                                Register
                            </h3>
                        </v-layout>
                    </v-card-title>

                    <v-card-text>
                        <v-form ref="form" v-model="valid">
                            <v-text-field
                                v-model="form.name"
                                label="Name"
                                :rules="rules.name"
                                :error-messages="errors.name"
                                @input="errors = []"
                                prepend-icon="mdi-account-outline"
                            ></v-text-field>
                            <v-text-field
                                v-model="form.email"
                                label="Email Address"
                                :rules="rules.email"
                                :error-messages="errors.email"
                                @input="errors = []"
                                type="email"
                                prepend-icon="mdi-email-outline"
                            ></v-text-field>
                            <v-text-field
                                v-model="form.password"
                                label="Password"
                                :rules="rules.password"
                                :error-messages="errors.password"
                                @input="errors = []"
                                type="password"
                                prepend-icon="mdi-lock-outline"
                            ></v-text-field>
                            <v-text-field
                                v-model="form.password_confirmation"
                                label="Confirm Password"
                                :rules="rules.password_confirmation"
                                :error-messages="errors.password_confirmation"
                                @input="errors = []"
                                type="password"
                                prepend-icon="mdi-lock-outline"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <div class="d-flex">
                            <v-btn
                                text
                                color="primary"
                                class="mr-4"
                                :to="{ name: 'login' }"
                            >
                                Login
                            </v-btn>
                        </div>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary dark"
                            class="mr-4"
                            @click="onRegister"
                        >
                            Register
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "login",
    data() {
        return {
            valid: true,
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            errors: {
                name: [],
                email: [],
                password: [],
                password_confirmation: []
            },
            rules: {
                name: [v => !!v || "This field is required"],
                email: [
                    v => !!v || "This field is required",
                    v =>
                        !v ||
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/.test(v) ||
                        "Invalid Email address"
                ],
                password: [
                    v => !!v || "This field is required",
                    v =>
                        (v && v.length >= 8) ||
                        "Password must have at least 8 characters"
                ],
                password_confirmation: [
                    v => !!v || "This field is required",
                    v =>
                        this.password === this.password_confirmation ||
                        "Password does not match"
                ]
            }
        };
    },
    methods: {
        ...mapActions({
            register: "auth/AUTH_REGISTER"
        }),
        async onRegister() {
            try {
                if (this.$refs.form.validate()) {
                    await this.register(this.form);
                    this.$router.push({ name: "home" });
                }
            } catch (error) {
                this.errors = error.response.data.errors;
                alert(error);
            }
        }
    }
};
</script>