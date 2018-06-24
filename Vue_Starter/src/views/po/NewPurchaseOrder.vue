<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>General Details</strong>
          </div>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="title">PO Title</label>
                <b-form-input required type="text" id="title" v-model="newPurchase.title" placeholder="PO Title"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="ccnumber">Supplier</label>
                <vue-select v-model="newItem.supplier" :options="supplierOptions" placeholder="Select option"></vue-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="ccnumber">Associated Work Orders</label>
                <vue-select multiple v-model="newItem.workOrder" :options="supplierOptions" placeholder="Select option"></vue-select>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Add Item</strong>
          </div>
          <b-form-group>
            <label for="item-name">Item Name</label>
            <b-form-input type="text" v-model="newItem.name" id="item-name" placeholder="Some item"></b-form-input>
          </b-form-group>
          <b-form-group>
            <label for="item-quantity">Item Amount</label>
            <b-form-input type="number" multiple v-model="newItem.quantity" id="item-quantity" placeholder="1"></b-form-input>
          </b-form-group>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i>Add</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import VueSelect from 'vue-select'

  export default {
    name: 'PurchaseOrders',
    components: {VueSelect},
    data () {
      return {
        newItem: {
          name: '',
          quantity: 1,
          supplier: '',
          workOrder: []
        },
        newPurchase: {
          title: 'New Purchase Order',
          items: []
        },
        supplierOptions: [
          {value: 'bsonid1', label: 'Tremayne'},
          {value: 'bsonid2', label: 'Gibsons'},
          {value: 'bsonid3', label: 'Friendly Steel co'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
