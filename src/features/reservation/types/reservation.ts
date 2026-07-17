export interface ReservationFormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
}

export type ReservationStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error";