<template>
    <div>
        <v-navigation-drawer
            app
            :clipped="$vuetify.breakpoint.mdAndUp"
            v-model="left_drawer"
        >
            <template v-slot:prepend>
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <v-sheet color="grey lighten-4" class="pa-4">
                            <v-avatar
                                class="mb-4"
                                color="grey darken-1"
                                size="64"
                            ></v-avatar
                        ></v-sheet>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Juan Dela Cruz</v-list-item-title>
                        <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>

            <v-divider></v-divider>
            <v-list>
                <template v-for="item in left_drawer_items">
                    <v-row
                        v-if="item.heading"
                        :key="item.heading"
                        align="center"
                    >
                        <v-col cols="6">
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-col>
                        <v-col cols="6" class="text-center">
                            <a href="#!" class="body-2 black--text">EDIT</a>
                        </v-col>
                    </v-row>
                    <v-list-group
                        color="green"
                        v-else-if="item.children"
                        :key="item.text"
                        v-model="item.model"
                        :prepend-icon="
                            item.model ? item.icon : item['icon-alt']
                        "
                        append-icon=""
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                            v-for="(child, i) in item.children"
                            :key="i"
                            link
                        >
                            <v-list-item-action v-if="child.icon">
                                <v-icon></v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ child.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item color="green" v-else :key="item.text" link>
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>

            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block>
                        Logout
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <v-app-bar clipped-left app>
            <v-app-bar-nav-icon
                @click.stop="left_drawer = !left_drawer"
            ></v-app-bar-nav-icon>

            <v-toolbar-title>Page title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-bell</v-icon>
            </v-btn>

            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-apps</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <!-- If using vue-router -->
                <div>
                    <v-breadcrumbs :items="breadcrumbs_list">
                        <template v-slot:divider>
                            <v-icon>mdi-chevron-right</v-icon>
                        </template>
                    </v-breadcrumbs>
                </div>
                <div>Hellow</div>
            </v-container>
        </v-main>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            left_drawer: true,
            breadcrumbs_list: [
                {
                    text: "Dashboard",
                    disabled: false,
                    href: "#"
                },
                {
                    text: "Link 1",
                    disabled: false,
                    href: "#"
                },
                {
                    text: "Link 2",
                    disabled: true,
                    href: "#"
                }
            ],
            left_drawer_items: [
                {
                    icon: "mdi-chart-areaspline",
                    text: "Item 1",
                    link: { name: "" }
                },
                {
                    icon: "mdi-cash-multiple",
                    text: "Item 2",
                    link: { name: "" }
                },
                {
                    icon: "mdi-chevron-up",
                    "icon-alt": "mdi-chevron-down",
                    text: "Item 3",
                    model: false,
                    children: [
                        {
                            icon: "mdi-circle-medium",
                            text: "Child 1",
                            link: { name: "" }
                        },
                        {
                            icon: "mdi-circle-medium",
                            text: "Child 2",
                            link: { name: "" }
                        },
                        {
                            icon: "mdi-circle-medium",
                            text: "Child 3",
                            link: { name: "" }
                        }
                    ]
                }
            ]
        };
    }
};
</script>
