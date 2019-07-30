<template>
    <nav id="navigation" class="nav nav-pills flex-column flex-sm-row justify-content-sm-center navigation unselectable">
        <router-link
                v-for=" navigation_panel_item in  navigation_panel_items"
                :to="navigation_panel_item.path"
                class= "text-sm-center nav-link"
                active-class="navigation_item_active"
                @click.native = "active_element_navigation_panel(navigation_panel_item.name)"
                :class = "{ 'navigation_item' : !navigation_panel_item.active}"
                v-html = "navigation_panel_item.value"
        >
        </router-link>

    </nav>

</template>

<script>
    const navigation_panel_items= {
        dashboard: {
            value: "<i class=\"fas fa-laptop\"></i> Dashboard",
            name: "dashboard",
            path: "dashboard",
            active: false
        },
        myListing: {
            value: "<i class=\"fas fa-list-ul\"></i> My Listing",
            name: "myListing",
            path: "mylisting",
            active: false
        },
        promotions: {
            value: "<i class=\"fas fa-bolt\"></i> Promotions",
            name: "promotions",
            path: "promotions",
            active: false
        },
        bookmarks: {
            value: "<i class=\"far fa-bookmark\"></i> Bookmarks",
            name: "bookmarks",
            path: "bookmarks",
            active: false
        },
        accountDetail: {
            value: "<i class=\"fas fa-cog\"></i> Account detail",
            name: "accountDetail",
            path: "accountdetail",
            active: false
        },
        logout: {
            value: "<i class=\"fas fa-lock\"></i> Logout",
            name: "logout",
            path: "/login",
            active: false
        }
    };

    export default {
        name: "navigation_panel",
        data(){
            return {
                navigation_panel_items: navigation_panel_items,
                navigation_panel_item: '',
                current_element: 'dashboard'
            }
        },

        computed: {
            isUserAuthenticated(){
                return this.$store.getters.isUserAuthenticated
            }
        },
        methods: {
            active_element_navigation_panel: function (item) {
                if (this.navigation_panel_items[item].name === 'logout') {
                    this.$store.dispatch('logout');
                    this.$router.push('/login')
                }else {
                    this.navigation_panel_items[this.current_element].active = false;
                    this.current_element = item;
                    this.navigation_panel_items[this.current_element].active = true;
                    return "v-bind: '{'navigation-item-active' : navigation_panel_item.active, 'navigation-item' : !navigation_panel_item.active'";
                }
            }
        }
    }
</script>

<style scoped>

    .nav-item {
        padding-left: 8px;
    }

    .menu-btn-add-img {
        color: #6d1df8;
    }

    .navigation {
        height: 65px;
        box-shadow: 0 1px 2px RGBA( 0, 0, 0, 0.2 );
    }

    .navigation_item {
        padding-top: 1.2%;
        width: 12%;
        text-decoration: none;
        color: #202125;
        position: relative;

    }

    .navigation_item:after {
        position: absolute;
        width: 0;
        content:"";
        height: 2px;
        background: #6d1df8;
        bottom: 0;
        right: 0;
        left: 0;
        transition: all .5s;
    }

    .navigation_item:hover {
        color: #202125;
    }

    .navigation_item:hover:after {
        width: 100%;
    }

    .navigation_item_active {
        color: #6d1df8 !important;
        padding-top: 1.2%;
        width: 12%;
        text-decoration: none;
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-bottom-color: #6d1df8;
        border-radius: 0 !important;
    }
    .navigation_item_active:hover {
        color: #6d1df8;
    }
</style>
