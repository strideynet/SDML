<template>
  <div>
    <b-row>
      <b-col cols="6" lg="3">
        <b-card :no-body="true" footer-class="px-3 py-2">
          <b-card-body class="p-3 clearfix">
            <i class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-primary mb-0 mt-2">112</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Purchase Orders</div>
          </b-card-body>
          <div slot="footer">
            <b-link class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></b-link>
          </div>
        </b-card>
      </b-col>
      <b-col cols="6" lg="3">
        <b-card :no-body="true" footer-class="px-3 py-2">
          <b-card-body class="p-3 clearfix">
            <i class="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-info mb-0 mt-2">12</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Customers</div>
          </b-card-body>
          <div slot="footer">
            <b-link class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></b-link>
          </div>
        </b-card>
      </b-col>
      <b-col cols="6" lg="3">
        <b-card :no-body="true" footer-class="px-3 py-2">
          <b-card-body class="p-3 clearfix">
            <i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-warning mb-0 mt-2">12</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Undelivered POs</div>
          </b-card-body>
          <div slot="footer">
            <b-link class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></b-link>
          </div>
        </b-card>
      </b-col>
      <b-col cols="6" lg="3">
        <b-card :no-body="true" footer-class="px-3 py-2">
          <b-card-body class="p-3 clearfix">
            <i class="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-danger mb-0 mt-2">400</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Completed Work Orders</div>
          </b-card-body>
          <div slot="footer">
            <b-link class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></b-link>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <p> Some other shortened tables/overviews/recent changes will go down here along with any other statistics you fancy</p>
  </div>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>
