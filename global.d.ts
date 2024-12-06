import { Notyf } from "notyf";

declare global {
  interface Window {
    swal: Swal;
    toast: Notyf; // Notyf is too easy to typo, so, use toast here
  }
}
