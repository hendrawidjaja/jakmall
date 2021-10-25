import create from "zustand";
import { persist } from "zustand/middleware";

const useJakmallStore = create(
  persist(
    (set, get) => ({
      totalItemPurchased: 10,
      costOfGood: 50000,
      dropshippingFee: 5900,
      isDropshipper: false,
      isDeliveryReady: false,
      isPaymentReady: false,
      isAllReady: false,
      checkoutProcess: { delivery: false, payment: false, finish: false },

      toggleDropshipper: (isDropshipper) => {
        set({
          isDropshipper,
        });
      },

      setCheckoutProcess: ({ delivery, payment, finish }) => {
        set({
          checkoutProcess: {
            delivery,
            payment,
            finish,
          },
        });
      },
    }),
    {
      name: "jakmall", // unique name
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export default useJakmallStore;
