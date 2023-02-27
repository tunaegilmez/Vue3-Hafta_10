<template>
  <div class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center">
    <appSideBar :invoices="invoiceList" :editInvoice="editInvoice" />
    <invoiceContent :saveInvoice="saveInvoice" :activeInvoice="state.activeInvoice" />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import appSideBar from "./components/appSideBar.vue";
import invoiceContent from "./components/invoiceContent.vue";

const invoiceList = ref([
  {
    id: new Date().getTime(),
    contact: {
      contact_name: "Demo1",
      email: "demo@demo.com",
      city: "demo city",
      country: "demo country",
      zipcode: "demo zip code",
    },
    items: [
      {
        id: new Date().getTime(),
        name: "demo ürün1",
        qty: 1,
        unit_price: 10.0,
        total_price: 10.0,
      },
    ],
  },
]);

const state = reactive({ activeInvoice: null });

const saveInvoice = (invoice) => {
  console.log("invoice => ", invoice);
  invoiceList.value.push(invoice);
};

const editInvoice = (invoice) => {
  console.log(invoice);
  state.activeInvoice = invoice;
};
</script>
