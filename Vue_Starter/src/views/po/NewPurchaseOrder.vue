<template>
  <div class="animated fadeIn">
    <b-row class="d-flex align-items-stretch">
        <b-col sm="6">
            <b-card>
              <div slot="header">
                <strong>General Details</strong>
              </div>
              <b-row>
                <b-col sm="12">
                  <b-form-group>
                    <label>PO Title</label>
                    <b-form-input required type="text" id="title" v-model="newPurchase.title" placeholder="PO Title"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12">
                  <b-form-group>
                    <label>Supplier</label>
                    <vue-select v-model="newPurchase.supplier" :options="supplierOptions" placeholder="Select option"></vue-select>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col sm="12">
                  <b-form-group>
                    <label>Associated Work Orders</label>
                    <vue-select multiple v-model="newPurchase.workOrder" :options="workOrderOptions" placeholder="Select option"></vue-select>
                  </b-form-group>
                </b-col>
              </b-row>
              <div slot="footer">
                <b-button size="sm" variant="danger"><i class="fa fa-dot-circle-o"></i> Reset</b-button>
                <b-button size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Finalize PO</b-button>
              </div>
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
              <b-form-input type="number" v-model="newItem.quantity" id="item-quantity" placeholder="1"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label for="item-quantity">Price</label>
              <b-form-input v-model.lazy="newItem.price" id="item-quantity" v-money="{precision: 2, prefix: '£'}"></b-form-input>
            </b-form-group>
            <div slot="footer">
              <b-button @click="appendNewItem" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Add</b-button>
            </div>
          </b-card>
        </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <b-card>
          <div slot="header">
            <strong>Items</strong>
          </div>
          <b-table striped hover :items="newPurchase.items" :fields="fields">
            <template slot="buttons" slot-scope="data">
              <b-button @click="deleteItem(data.item)" size="sm" variant="danger"><i class="fa fa-dot-circle-o"></i> Delete</b-button>
            </template>
          </b-table>
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
        fields: [
          {
            key: 'name',
            label: 'Description'
          },
          {
            key: 'quantity',
            label: 'Quantity'
          },
          {
            key: 'price',
            label: 'Price'
          },
          {
            key: 'buttons',
            label: 'Buttons'
          }
        ],
        newItem: {
          name: '',
          quantity: 1,
          price: null
        },
        newPurchase: {
          title: 'New Purchase Order',
          items: [],
          supplier: '',
          workOrder: []
        },
        supplierOptions: [
          {value: 'bsonid1', label: 'Tremayne'},
          {value: 'bsonid2', label: 'Gibsons'},
          {value: 'bsonid3', label: 'Friendly Steel co'}
        ],
        workOrderOptions: [
          {value: 'bsonid1', label: 'N1774'},
          {value: 'bsonid2', label: 'N1775'},
          {value: 'bsonid3', label: 'N1776'}
        ]
      }
    },
    methods: {
      appendNewItem: function () {
        this.newPurchase.items.push(Object.assign({}, this.newItem)) // Ensure deep copy.
      },
      deleteItem: function (item) {
        console.log(item)
        let index = this.newPurchase.items.indexOf(item)

        if (index !== -1) {
          this.newPurchase.items.splice(index, 1)
        }
      }
    }
  }
</script>

<style scoped>

</style>
