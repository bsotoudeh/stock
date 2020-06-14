<template>
  <div class="col-sm-6 col-md-4">
    <div class="card mt-4">
      <div class="card-header bg-info text-white text-left p-2">
        <h5 class="">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <input type="number" :class="{danger: insufficientFunds}"
                   class="form-control"
                   placeholder="Quantity"
                   v-model="quantity">
          </div>
          <div class="col-6">
            <button class="btn btn-success float-right w-100" @click="buyStock"
                    :disabled="insufficientFunds || quantity <= 0">{{ insufficientFunds ? 'unaffordable' : 'Buy'}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Stock',
    props: ['stock'],
    data () {
      return {
        quantity: 0
      }
    },
    computed: {
      myFunds () {
        return this.$store.getters.funds
      },
      insufficientFunds () {
        return this.quantity * this.stock.price > this.myFunds
      }
    },
    methods: {
      buyStock () {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        console.log(order)
        this.$store.dispatch('buyStock', order)
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
