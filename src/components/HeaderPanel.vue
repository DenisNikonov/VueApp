<template>
    <nav class="navbar navbar-expand-lg navbar-bg-black">
        <a class="navbar-brand " href="#"><i class="far fa-compass white"></i></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        </button>

        <div class="navbar-collapse" id="navbarTogglerDemo02">
            <form class="form-inline my-lg-4 has-search w-50">
                <span class="fa fa-search form-control-feedback"></span>
                <input class="form-control mr-sm-3 navbar-input-search w-50" type="search" placeholder="What are you looking for?">
            </form>
        </div>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 menu">
            <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Explore</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Shop</a>
            </li>
            <li class="nav-item dropdown">

                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Denis</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-shopping-basket"></i></a>
            </li>
            <li class="nav-item">
                <button class="btn menu-btn-add">
                    <img src="../assets/add_listing.png" alt="" class="menu-btn-add-img">
                    <strong>Add a listing</strong>
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

    .white {
        color: white;
    }

    .menu a {
        text-decoration:none;
        color: white;

    }

    .navbar-bg-black {
        background-color: #202125 !important;

    }

    .has-search .form-control {
        padding-left: 2.375rem;
    }

    .has-search .form-control-feedback {
        position: absolute;
        z-index: 2;
        display: block;
        width: 2.375rem;
        height: 2.375rem;
        line-height: 2.375rem;
        text-align: center;
        pointer-events: none;
        color: #ffffff;
    }

    .navbar-input-search {
        background:  #202125;
        color: white;
        border: 0;
    }

    .navbar-input-search:focus {
        background-color:  #202125;
        color: white;
        box-shadow: none;
        border-color:  #202125;
    }

    .navbar-input-search:focus::-webkit-input-placeholder {
        color:transparent;
    }

    .menu-btn-add {
        margin-left: 10px;
        color: #6d1df8;
        background: white;

    }
    .nav-item {
        padding-left: 8px;
    }

    .menu-btn-add-img {
        color: #6d1df8;
    }
</style>