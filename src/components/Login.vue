<template>
    <div>
        <navbar></navbar>
        <div id='spacer'></div>
        <div class="login container">
            <form class="card-panel" @submit.prevent="signup">
                <h2 class="center brown-text">Login</h2>
                <div class="field">
                    <label for="email">Email</label>
                    <input id="email" type="email" v-model="email">
                </div>
                <div class="field">
                    <label for="password">Password</label>
                    <input id="password" type="password" v-model="password">
                </div>
                <p class='red-text center' v-if='feedback'> {{ feedback }} </p>
                <div class="field center">
                    <button class="btn brown darken-4">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase';
    export default {
        name: 'login',
        data: function () {
            return {
                email: '',
                password: '',
                feedback: ''
            };
        },
        methods: {
            signup() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(user => {
                        alert(`You are logged in as ${user.email}`)
                        this.$router.push({ name: 'profile' })
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
    }; 
</script>
<style>
    #spacer {
        height: 70px;
    }
</style>