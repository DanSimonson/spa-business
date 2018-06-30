<template>
    <!--<v-app>
        <v-navigation-drawer v-model="drawer" temporary absolute height='400px' class='grey darken-4 white--text'>
            <v-list>
                <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
                    <v-list-tile-action>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>{{item.title}}</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar fixed dark class="primary">
            <v-toolbar-side-icon @click.stop="drawer= !drawer" class='strngBtnhidden-sm-and-up'></v-toolbar-side-icon>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">Logo</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat v-for="item in items" :key="item.title">
                    <v-icon left dark>{{item.icon}}</v-icon>
                    {{item.title}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </v-app>-->

    <nav class="nav-wrapper grey darken-3">
        <div class="container">
            <router-link to="/" class="poppingWhiteText brand-logo right hide-on-small-only">The Essentials of Relaxation</router-link>
            <ul class="left">

                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li v-if="!user">
                    <router-link to="/login">Login</router-link>
                </li>
                <li v-if="!user">
                    <router-link to="/register">Signup</router-link>
                </li>
                <li v-if="user">
                    <router-link to="/profile">Members</router-link>
                </li>
                <li v-if="user">
                    <button v-on:click='logout'>Logout</button>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import firebase from 'firebase';
    export default {
        name: 'navbar',
        data() {
            return {
                drawer: null,
                sidenav: false,
                user: null,
                items: [
                    { title: 'Home', icon: 'home', link: '/' },
                    { title: 'Login', icon: 'message', link: '/login' },
                    { title: 'Register', icon: 'message', link: '/register' },
                    { title: 'Profile', icon: 'message', link: '/profile' }
                ]
            }
        },
        created() {
            //let user = firebase.auth().currentUser
            firebase.auth().onAuthStateChanged((user) => {

                if (user) {
                    this.user = user
                } else {
                    this.user = null
                }
            })

        },
        methods: {
            logout() {
                firebase.auth().signOut().then(() => {
                    //this.$router.push(('/'))
                    this.$router.go({ path: this.$router.path });
                })
            }
        }
    }

</script>
<style>
    .poppingWhiteText {
        /*background-color: #edde9c;*/
        color: #bc2e1e;
        text-shadow: 0 1px 0px #378ab4,
        1px 0 0px #5dabcd,
        1px 2px 1px #378ab4,
        2px 1px 1px #5dabcd,
        2px 3px 2px #378ab4,
        3px 2px 2px #5dabcd,
        3px 4px 2px #378ab4,
        4px 3px 3px #5dabcd,
        4px 5px 3px #378ab4,
        5px 4px 2px #5dabcd,
        5px 6px 2px #378ab4,
        6px 5px 2px #5dabcd,
        6px 7px 1px #378ab4,
        7px 6px 1px #5dabcd,
        7px 8px 0px #378ab4,
        8px 7px 0px #5dabcd;
    }

    .strngBtn {
        color: #BDBDBD;
        font-weight: 900;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
</style>