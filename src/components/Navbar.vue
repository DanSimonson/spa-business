<template>
    <!--<v-app>
        <v-navigation-drawer v-model="sidenav">

        </v-navigation-drawer>
        <v-toolbar fixed class="grey black-text">
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
            </v-toolbar-title>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat>
                    <router-link to="/">Dashboard</router-link>
                </v-btn>
                <v-btn flat v-if="!user">
                    <router-link to="/login">Login</router-link>
                </v-btn>
                <v-btn flat v-if="!user">
                    <router-link to="/register">Signup</router-link>
                </v-btn>
                <v-btn flat v-if="user">
                    <router-link to="/profile">Profile</router-link>
                </v-btn>
                <v-btn flat v-if="user">
                    <button v-on:click='logout' class="btn black white-text">logout</button>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </v-app>-->


    <nav class="nav-wrapper grey darken-3">
        <div class="container">
            <router-link to="/" class="brand-logo center hide-on-small-only">My-Spa-Logo</router-link>
            <ul class="left">

                <li>
                    <router-link to="/">Dashboard</router-link>
                </li>
                <li v-if="!user">
                    <router-link to="/login">Login</router-link>
                </li>
                <li v-if="!user">
                    <router-link to="/register">Signup</router-link>
                </li>
                <li v-if="user">
                    <router-link to="/profile">Profile</router-link>
                </li>
                <li v-if="user">
                    <button v-on:click='logout'>Logout</button>
                    <!--<a class="waves-effect waves brown darken-2 btn">Logout</a>-->
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
    .strngBtn {
        color: #BDBDBD;
        font-weight: 900;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
</style>