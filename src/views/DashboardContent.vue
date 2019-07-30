<template>

    <div class=" dashboardContent-bg">
        <div class="justify-content-center cards">
            <div class="d-inline-flex">
                <div class="card card-info" style="margin-left: 0px">
                    <div class="card-body" style="background-color: #6d1cff">
                        <h5 class="card-title">11</h5>
                        <p class="card-text">Published Listings</p>
                    </div>
                </div>
            </div>

            <div class="d-inline-flex ">
                <div class="card card-info">
                    <div class="card-body" style="background-color: #911cff">
                        <h5 class="card-title" >0</h5>
                        <p class="card-text">Pending Listings</p>
                    </div>
                </div>
            </div>

            <div class="d-inline-flex ">
                <div class="card card-info" >
                    <div class="card-body" style="background-color: #6d1cff">
                        <h5 class="card-title" >0</h5>
                        <p class="card-text">Active Promotions</p>
                    </div>
                </div>
            </div>

            <div class="d-inline-flex ">
                <div class="card card-info">
                    <div class="card-body" style="background-color: #0079e1">
                        <h5 class="card-title ">180</h5>
                        <p class="card-text">Visits this week</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="">
            <div class="d-flex justify-content-center">
                <div class="col-sm-4">
                    <div class="card card-left-content shadow-sm">
                        <div class="card-header">
                            <img src="../assets/card_image.png" alt=""> Views
                        </div>
                        <div class="card-body ">
                            <h5 class="card-title">Специальный заголовок</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    <div class="card card-left-content shadow-sm">
                        <div class="card-header">
                            <img src="../assets/card_image.png" alt="">  Unique views
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Специальный заголовок</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    <div class="card card-left-content shadow-sm">
                        <div class="card-header">
                            Devices
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Специальный заголовок</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    <div class="card card-left-content shadow-sm">
                        <div class="card-header">
                            Top Countries
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Специальный заголовок</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-5">
                    <div class="card card-right-content shadow-sm">
                        <div class="card-header">
                            Featured
                        </div>
                        <div class="card-body ">
                            <h5 class="card-title">Специальный заголовок</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "DashboardContent"
    }
</script>

<style scoped>
    .dashboardContent-bg {
        background-color: #f4f4f4;
    }
    .card {
        border-radius: 4px;
    }
    .cards {
        display: flex;

    }
    .card-info {
        width: 19rem;
        height: 7rem;
        background-color: #6d1cff;
        margin-top: 50px;
        margin-left: 20px;
        color: white;

    }
    .card-text {
        font-size: 12px;
    }
    .card-left-content {
        margin-top: 20px;
        border: none;
    }
    .card-right-content {
        margin-top: 20px;
    }
    .card-header {
        background-color: white;
        border: none;
        display: table-cell;
        vertical-align: middle;

    }
</style>