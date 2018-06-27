<template>
    <div>
        <navbar></navbar>
        <div id='spacer'></div>
        <div class="signup container">
            <form class="card-panel" @submit.prevent="signup">
                <h2 class="center deep-purple-text">Signup</h2>
                <div class="field">
                    <label for="email">Email</label>
                    <input id="email" type="email" v-model="email">
                </div>
                <div class="field">
                    <label for="password">Password</label>
                    <input id="password" type="password" v-model="password">
                </div>
                <!--<div class="field">
                <label for="name">Alias</label>
                <input id="name" type="text" v-model="alias">
            </div>-->
                <p class='red-text center' v-if='feedback'> {{ feedback }} </p>
                <div class="field center">
                    <button class="btn deep-purple">Signup</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import slugify from 'slugify'
    import db from '@/firebase/init'
    import firebase from 'firebase'
    export default {

        name: 'Signup',
        data() {
            return {
                user_id: '',
                email: null,
                password: null,
                alias: null,
                feedback: null,
                slugify: null
            }
        },
        methods: {
            signup() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(user => {
                        alert(`Account created for ${user.email}`)
                        //this.$router.push({ name: 'Home' })
                        this.$router.go({ path: this.$router.path });
                    },
                        err => {
                            alert(err.message)
                        })

                e.preventDefault()



                /*if (this.alias) {
                    if (this.alias) {
                        this.slug = slugify(this.alias, {
                            replacement: '-',
                            remove: /[$*_+~.()'"!\-:@]/g,
                            lower: true
                        })
                        let ref = db.collection('users').doc(this.slug)
                        ref.get().then(doc => {
                            if (doc.exists) {
                                this.feedback = 'this alias already exists'
                            } else {
                                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                                    .then(user => {
                                        ref.set({
                                            alias: this.alias,
                                            email: this.email,
                                            user_id: user.uid
                                        })
                                    }).then(() => {
                                        this.$router.push({ name: 'profile' })
                                    })
                                    .catch(err => {
                                        console.log(err)
                                        this.feedback = err.message
                                    })
                            }
                        })
                    } else {
                        this.feedback = 'Please fill in all fields'
                    }
                }*/
            }
        }
    }


</script>

<style>
    .signup {
        max-width: 400px;
        margin-top: 60px;
    }

    .signup h2 {
        font-size: 2.4em;
    }

    .signup .field {
        margin-bottom: 16px;
    }

    #spacer {
        height: 70px;
    }
</style>