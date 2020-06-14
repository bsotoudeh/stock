<template>
  <div class="col-sm-6 col-md-4">
    <div class="card mt-4">
      <div class="card-header bg-secondary text-white text-left p-2">
        <h5 class="">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
        </h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-4">
            <input type="number" :class="{danger : insufficientQuantity}"
                   class="form-control"
                   placeholder="Quantity"
                   v-model="quantity">
          </div>
          <div class="col-8">
            <button class="btn btn-success float-right w-100" @click="sellStock"
                    :disabled="insufficientQuantity || quantity <= 0">{{insufficientQuantity ? 'Not enough Stocks' :
              'sell'}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Stock',
    props: ['stock'],
    data () {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity () {
        return this.quantity > this.stock.quantity
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder:
          'sellStock'
      }),
      sellStock () {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.placeSellOrder(order)
        this.quantity = 0
      }
    }
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
