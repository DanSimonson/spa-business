<template>
    <div class="Navbar" v-bind:style="{ opacity: activeOpacity }">
        <div class="Navbar__Link Navbar__Link-brand">
            <span class="poppingText">Body Essence Spa </span>
        </div>
        <div class="Navbar__Link Navbar__Link-toggle">
            <i class="fas fa-bars"></i>
        </div>
        <!--<nav class="Navbar__Items">
            <div class="Navbar__Link">
                Home
            </div>
            <div class="Navbar__Link">
                Location
            </div>
            <div class="Navbar__Link">
                Contact
            </div>
        </nav>-->
        <nav class="Navbar__Items Navbar__Items--right">
            <div class="Navbar__Link">
                <router-link to="/">Home</router-link>
            </div>
            <div class="Navbar__Link">
                <router-link to="/profile">Member Specials</router-link>
            </div>
            <div class="Navbar__Link">
                <router-link to="/contact">Contact</router-link>
            </div>
            <div v-if="!mySession" class="Navbar__Link">
                <router-link to="/login">Login</router-link>
            </div>
            <div v-else class="Navbar__Link">
                <button v-on:click='logout'>Logout</button>
            </div>
        </nav>
    </div>


    <!--<nav class="nav-wrapper grey darken-3">            
            <router-link to="/" class="poppingWhiteText brand-logo left hide-on-small-only">The Essentials of
                Relaxation</router-link>
            <ul class="right">
                
                <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="material-icons">menu</i></a></li>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li v-if="!mySession">
                    <router-link to="/login">Login</router-link>
                </li>
                <li v-else>
                    <button v-on:click='logout'>Logout</button>
                </li>
                <li>
                    <router-link to="/profile">Member Promos</router-link>
                </li>
            </ul>            
        </nav>-->
</template>

<script>
    import firebase from 'firebase';
    export default {
        name: 'Navbar',
        data() {
            return {
                scrolled: false,
                activeOpacity: ''
            }
        },
        /*created() {
            //let user = firebase.auth().currentUser
            firebase.auth().onAuthStateChanged((user) => {

                if (user) {
                    this.user = user
                } else {
                    this.user = null
                }
            })

        },*/
        beforeCreate() {
            firebase.auth().onAuthStateChanged((user) => {
                this.$store.commit('SET_SESSION', user || false)
            });
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        mounted() {
            function classToggle() {
                const navs = document.querySelectorAll('.Navbar__Items')

                navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
            }
            document.querySelector('.Navbar__Link-toggle')
                .addEventListener('click', classToggle);


        },
        computed: {
            mySession() {
                return this.$store.getters.session;
            }
        },
        methods: {
            logout() {
                firebase.auth().signOut().then(() => {
                    //this.$router.push(('/'))
                    this.$router.go({ path: this.$router.path });
                })
            },
            handleScroll() {
                this.scrolled = window.scrollY > 20;
                if (window.scrollY < 20) {
                    this.activeOpacity = .5
                } else if (window.scrollY < 60) {
                    this.activeOpacity = .8
                } else if (window.scrollY < 80) {
                    this.activeOpacity = 1
                }
                /*if (this.scrolled) {
                    this.activeOpacity = 1;
                } else {
                    this.activeOpacity = .5;
                }*/
            }
        }
    }

</script>
<style>
    @import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond');
    @import url('https://fonts.googleapis.com/css?family=Proza+Libre');

    .poppingText {
        font-family: 'Cormorant Garamond', serif;
        text-align: center;
        font-size: 1.5em;
        /*background-color: #fff;*/
        color: #FFFF8D;
        /*text-shadow: 0 1px #808d93,
            -1px 0 #cdd2d5,
            -1px 2px #808d93,
            -2px 1px #cdd2d5,
            -2px 3px #808d93,
            -3px 2px #cdd2d5,
            -3px 4px #808d93,
            -4px 3px #cdd2d5,
            -4px 5px #808d93,
            -5px 4px #cdd2d5,
            -5px 6px #808d93,
            -6px 5px #cdd2d5,
            -6px 7px #808d93,
            -7px 6px #cdd2d5,
            -7px 8px #808d93,
            -8px 7px #cdd2d5;*/
    }

    .Navbar {
        background-color: #212121;
        display: flex;
        padding: 16px;
        font-family: sans-serif;
        color: white;
        position: fixed;
        top: 0;
        z-index: 999999999;
        width: 100%;
        opacity: 0.5;

    }

    .Navbar__Link {
        padding-right: 8px;
        font-size: 16px;
        font-weight: bold;
        margin-right: 2px;
        font-family: 'Proza Libre', sans-serif;
    }

    .Navbar__Link-brand {
        display: inline-flex;
    }


    .Navbar__Items {
        display: flex;
        background-color: #212121;
        margin-left: 10px;
    }

    .Navbar__Items--right {
        margin-left: auto;
    }

    .Navbar__Link-toggle {
        display: none;
    }

    @media only screen and (max-width: 768px) {

        .Navbar__Items,
        .Navbar {
            flex-direction: column;
        }

        .Navbar__Items {
            display: none;
            height: 200px;
        }

        .Navbar__Items--right {
            margin-left: 0;
            height: 260px;
        }

        .Navbar__ToggleShow {
            display: flex;
        }

        .Navbar__Link-toggle {
            align-self: flex-end;
            display: initial;
            position: absolute;
            cursor: pointer;
        }
    }

    /*
    .nav-wrapper {
        position: fixed;
        top: 0;
        z-index: 999999999;
    }

    .poppingWhiteText {
        /*background-color: #edde9c;
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
    */
</style>