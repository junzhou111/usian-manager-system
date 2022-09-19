<template>
    <div class="login">
        <div class="login-box">
            <div class="box">
                <h1 class="tilte">积云后台管理</h1>
                <input class="username" type="text" v-model="from.username" placeholder="username">
                <input class="password" type="text" v-model="from.password" placeholder="password">
                <button class="btn" @click="tolog">登录</button>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            from: {
                username: "",
                password: ""
            }
        };
    },
    components: {},
    methods: {
        tolog() {
            this.$axios.post('http://vue.mengxuegu.com/pro-api/user/login', this.from).then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.data.token)

                this.$router.push('/home')

                console.log(11);
            })
        }
    },
    watch: {},
    computed: {},

}
</script>
<style lang='scss'>
* {
    margin: 0;
    padding: 0;
}

.login {
    width: 100vw;
    height: 100vh;
    background-color: #0b1036;
    overflow: hidden;

    .login-box {
        width: 500px;
        height: 300px;
        background-color: #fff;
        margin: 200px auto;

        .tilte {
            width: 100%;
            text-align: center;
        }

        .box {
            width: 80%;
            margin: 0 auto;
            height: 100%;
        }

        .username,
        .password {
            width: 100%;
            margin: 20px auto;
            height: 30px;
            padding: 0 0 0 10px;
        }

        .btn {
            width: 100%;
            height: 50px;
            background-color: rgb(108, 190, 244);
            border: 1px solid rgb(108, 190, 244);
            color: #fff;
            border-radius: 5px;
            font-size: 18px;
        }

    }
}
</style>
