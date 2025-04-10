import { Payment, PaymentState, PaymentStore } from "../../types/payment";

import { create } from "zustand";
import { RecipientWallet } from "../../types/recipient";

const initialState: PaymentState = {
  payment: {
    recipient_address: "",
    amount: 0,
    token: "",
    blockchain: "",
    orderId: "",
    returnUrl: "",
    businessName: "",
    payer: "",
  } satisfies Payment,
  solanaWallets: [],
  businessName: "",
  tokenOptions: [],
  backUrl: "",
};

// Custom hook to use the context
export const usePaymentStore = create<PaymentStore>((set) => ({
  ...initialState,
  setPayment: (payment: Payment) => set({ payment }),
  setBackUrl: (url: string) => set({ backUrl: url }),
  setSolanaWallets: (wallets: RecipientWallet[]) =>
    set({ solanaWallets: wallets }),
  setBusinessName: (name: string) => set({ businessName: name }),
  setTokenOptions: (options: string[]) => set({ tokenOptions: options }),
}));
