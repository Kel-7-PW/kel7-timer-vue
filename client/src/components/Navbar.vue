<template>
    <div>
        <v-app-bar
            app
            dark
            color="teal lighten-1"
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Stopwatch</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            dark
            color="teal"
        >
            <!-- Avatar Admin -->
            <v-row justify="center" class="mt-5">
                <v-col cols="7">
                    <v-avatar
                        size="130"
                    >
                        <!-- <img src="#" alt="admin profile picture"> -->
                    </v-avatar>
                </v-col>
            </v-row>

            <!-- Nama Admin -->
            <v-row justify="center" class="mt-n1">
                <v-col
                    cols="9"
                >
                    <p class="white--text">Kel 7 Stopwatch</p>
                </v-col>
            </v-row>

            <!-- Navigasi -->
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="group"

                >
                    <v-list-item v-for="(item, index) in items" :key="index" :to="item.route">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

    </div>
</template>

<script>
export default {
    data(){
        return{
            drawer: false,
            group: null,
            items: [
                {icon: 'mdi-book-open', title: 'Stopwatch', route: '/'},
                {icon: 'mdi-book-open', title: 'HelloWorld', route: '/HelloWorld'}
            ]
        }
    },
    watch: {
        group(){
            this.drawer = false
        }
    }
}
</script>