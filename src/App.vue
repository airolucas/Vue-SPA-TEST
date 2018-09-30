<template>
    <v-app>
        <v-toolbar :clipped-left="clipped" app="">
            <v-toolbar-title v-text="title">
            </v-toolbar-title>
            <v-spacer>
            </v-spacer>
            <v-toolbar-items>
                <v-btn flat to="/">Home</v-btn>
                <v-btn flat to="/users">Users</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <router-view>
            </router-view>
        </v-content>
        <v-footer :fixed="fixed" app="">
            <span>
                © 2018
            </span>
        </v-footer>
    </v-app>
</template>
<script>
export default {
    name: 'App',
    data () {
        return {
            clipped: false,
            drawer: true,
            fixed: false,
            items: [{
                icon: 'bubble_chart',
                title: 'Inspire'
            }],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vue SPA Test'
        }
    }
}
</script>
