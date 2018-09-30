<template>
	<v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
				<!-- <v-data-table :headers="headers" :items="users" class="elevation-1" hide-actions="" :loading="loading" :pagination.sync="pagination"> -->
				<v-data-table :headers="headers" :items="users" :loading="loading" :pagination.sync="pagination" :total-items="totalUsers" class="elevation-1">
				    <template slot="items" slot-scope="props">
				        <td>
				            {{ props.item.name }}
				        </td>
				        <td>
				            {{ props.item.username }}
				        </td>
				        <td>
				            {{ props.item.email }}
				        </td>
				        <td>
				            {{ props.item.address.city }}
				        </td>
				        <td>
				            {{ props.item.phone }}
				        </td>
				        <td>
				            {{ props.item.website }}
				        </td>
				        <td>
                            {{ props.item.company.name }}
                        </td>
                        <td>
                            <v-tooltip top>
                                <v-icon slot="activator" small class="mr-2" @click="$router.push('/users/'+props.item.id)">
                                    info
                                </v-icon>
                                <span>Full Details</span>
                            </v-tooltip>
				        </td>
                        
				    </template>
				</v-data-table>                
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
export default {
    name: 'Demo',
    data () {
        return {
            loading: true,
            search: '',
        	pagination: {
        		page: 1,
		      	rowsPerPage: 5,
		      	totalItems: 0
        	},
        	selected: [],
            headers: [{
		        text: 'Name',
		        value: 'name'
		    }, {
		        text: 'Username',
		        value: 'username'
		    }, {
		        text: 'Email',
		        value: 'email'
		    }, {
		        text: 'City',
		        value: 'city'
		    }, {
		        text: 'Phone',
		        value: 'phone'
		    }, {
		        text: 'Website',
		        value: 'website'
		    }, {
                text: 'Company',
                value: 'company'
            }, {
		        text: 'Actions',
		        value: 'id',
                sortable: false
		    }],
			users: [],
			totalUsers: 0
        }
    },
     watch: {
        pagination: {
            handler() {
                this.getUsers();
            },
            deep: true
        }
    },
    methods:{
    	getUsers(){
    		this.loading = true;
    		this.axios({
    		    method: 'GET',
    		    url: 'https://jsonplaceholder.typicode.com/users'
    		}).then(response => {
    			const {
                    sortBy,
                    descending,
                    page,
                    rowsPerPage
                } = this.pagination

    			let items = response.data;
    			const total = items.length
                if (this.pagination.sortBy) {
                    items = items.sort((a, b) => {
                        const sortA = a[sortBy]
                        const sortB = b[sortBy]
                        if (descending) {
                            if (sortA < sortB) return 1
                            if (sortA > sortB) return -1
                            return 0
                        } else {
                            if (sortA < sortB) return -1
                            if (sortA > sortB) return 1
                            return 0
                        }
                    })
                }
                if (rowsPerPage > 0) {
                    items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
                }

    			this.loading = false
    			this.users = items
    			this.totalUsers = total
    		}).catch((e)=>{
    		    console.log(e);
    		});
    	},
    	getDataFromApi() {
		    this.loading = true
		    return new Promise((resolve, reject) => {
		        const {
		            sortBy,
		            descending,
		            page,
		            rowsPerPage
		        } = this.pagination
		        let items = this.users
		        const total = items.length
		        if (this.pagination.sortBy) {
		            items = items.sort((a, b) => {
		                const sortA = a[sortBy]
		                const sortB = b[sortBy]
		                if (descending) {
		                    if (sortA < sortB) return 1
		                    if (sortA > sortB) return -1
		                    return 0
		                } else {
		                    if (sortA < sortB) return -1
		                    if (sortA > sortB) return 1
		                    return 0
		                }
		            })
		        }
		        if (rowsPerPage > 0) {
		            items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
		        }
		        setTimeout(() => {
		            this.loading = false
		            resolve({
		                items,
		                total
		            })
		        }, 1000)
		    })
		},
    },
    created(){
    	this.getUsers();
    }
}
</script>

<style lang="css" scoped>
</style>