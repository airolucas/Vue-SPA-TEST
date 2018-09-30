<template>
    <v-container grid-list-md>
        <v-slide-y-transition mode="out-in">
            <v-layout row wrap>
                <v-flex xs12>
                    <v-btn fab @click="$router.go(-1)"><v-icon>arrow_back</v-icon></v-btn>
                </v-flex>
                <v-flex lg4 xs12>
                    <v-card>
                        <v-list two-line="">
                            <v-subheader inset>Contact</v-subheader>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon color="indigo">
                                        face
                                    </v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{user.name}}
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        Name
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-divider inset="">
                            </v-divider>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon color="indigo">
                                        phone
                                    </v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{user.phone}}
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        Phone
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-divider inset="">
                            </v-divider>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon color="indigo">
                                        mail
                                    </v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{user.email}}
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        Email
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-divider inset="">
                            </v-divider>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon color="indigo">
                                        web
                                    </v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{user.website}}
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        Website
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-card> 
                </v-flex>
                <v-flex lg4 xs12>
                    <v-card>
                        <v-list two-line>
                            <v-subheader inset>Address</v-subheader>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon color="indigo">
                                        location_on
                                    </v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{user.address.street}}
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        Street
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-action>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{user.address.city}}
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        City
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-action>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{user.address.suite}}
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        Suite
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-action>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{user.address.zipcode}}
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        Zip Code
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-action>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        Lat: {{user.address.geo.lat}} &nbsp; Lng: {{user.address.geo.lng}}
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        Geolocation
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>

                        </v-list>
                    </v-card>
                </v-flex>
                <v-flex lg4>
                    <v-card>
                        <v-list two-line>
                            <v-subheader inset>Company</v-subheader>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon color="indigo">
                                        work
                                    </v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{user.company.name}}
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        Name
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-action></v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{user.company.bs}}
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        Business
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-action></v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{user.company.catchPhrase}}
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        Catch Phrase
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>

                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
export default {
    name: 'UserDetails',
    data () {
        return {
            loading: true,
            user:{
                email: null,
                id: null,
                name: null,
                phone: null,
                username: null,
                website: null,
                address: {
                    city: null,
                    geo: {lat:null, lng:null},
                    street: null,
                    suite: null,
                    zipcode: null
                },
                company:{
                    bs: null,
                    catchPhrase: null,
                    name: null
                }
            }
        }
    },
    methods:{
        getUser(){
            this.loading = true
            this.axios({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/users/'+this.$route.params.id
            }).then(response => {
                this.user = response.data
                this.loading = false
            }).catch((e)=>{
                console.log(e);
            });
        }
    },
    created(){
        this.getUser();
    }
}
</script>

<style lang="css" scoped>
</style>