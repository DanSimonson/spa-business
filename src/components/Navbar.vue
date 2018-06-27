<template>
    <nav>
        <div class="nav-wrapper grey darken-3">
            <div class="container">
                <router-link to="/" class="brand-logo">My-Spa-Logo</router-link>
                <ul class="right hide-on-med-and-down">

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
                        <button v-on:click='logout' class="btn black">logout</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    import firebase from 'firebase';
    export default {
        name: 'navbar',
        data() {
            return {
                isLoggedIn: false,
                currentUser: false,
                user: null
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