import { useState, type FormEvent } from "react";
import Button from "../../../components/ui/Button";
import type {
  ReservationFormData,
  ReservationStatus,
} from "../types/reservation";
import styles from "./ReservationForm.module.css";

const initialFormData: ReservationFormData = {
  name: "",
  phone: "",
  date: "",
  time: "",
  guests: 2,
  notes: "",
};

function getTodayDate() {
  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset() * 60_000;

  return new Date(today.getTime() - timezoneOffset)
    .toISOString()
    .split("T")[0];
}

function ReservationForm() {
  const [formData, setFormData] =
    useState<ReservationFormData>(initialFormData);

  const [status, setStatus] =
    useState<ReservationStatus>("idle");

  function updateField<K extends keyof ReservationFormData>(
    field: K,
    value: ReservationFormData[K],
  ) {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      /*
       * Simulasi proses pengiriman.
       * Nantinya bagian ini diganti dengan API atau WhatsApp integration.
       */
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus("success");
      setFormData(initialFormData);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fieldGroup}>
        <label htmlFor="reservation-name">Full Name</label>

        <input
          id="reservation-name"
          type="text"
          value={formData.name}
          onChange={(event) =>
            updateField("name", event.target.value)
          }
          placeholder="Enter your full name"
          autoComplete="name"
          required
        />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="reservation-phone">
          WhatsApp Number
        </label>

        <input
          id="reservation-phone"
          type="tel"
          value={formData.phone}
          onChange={(event) =>
            updateField("phone", event.target.value)
          }
          placeholder="Example: 081234567890"
          autoComplete="tel"
          inputMode="tel"
          pattern="[0-9+\-\s]{8,16}"
          required
        />
      </div>

      <div className={styles.fieldRow}>
        <div className={styles.fieldGroup}>
          <label htmlFor="reservation-date">Date</label>

          <input
            id="reservation-date"
            type="date"
            value={formData.date}
            min={getTodayDate()}
            onChange={(event) =>
              updateField("date", event.target.value)
            }
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="reservation-time">Time</label>

          <select
            id="reservation-time"
            value={formData.time}
            onChange={(event) =>
              updateField("time", event.target.value)
            }
            required
          >
            <option value="">Select time</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
          </select>
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="reservation-guests">
          Number of Guests
        </label>

        <select
          id="reservation-guests"
          value={formData.guests}
          onChange={(event) =>
            updateField("guests", Number(event.target.value))
          }
          required
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((guest) => (
            <option key={guest} value={guest}>
              {guest} {guest === 1 ? "Guest" : "Guests"}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="reservation-notes">
          Additional Notes
          <span>Optional</span>
        </label>

        <textarea
          id="reservation-notes"
          value={formData.notes}
          onChange={(event) =>
            updateField("notes", event.target.value)
          }
          placeholder="Special request, preferred seating, or occasion"
          rows={4}
          maxLength={300}
        />

        <small>{formData.notes.length}/300</small>
      </div>

      <Button
        type="submit"
        fullWidth
        isLoading={status === "submitting"}
      >
        Reserve Your Table
        <span aria-hidden="true">→</span>
      </Button>

      <div className={styles.message} aria-live="polite">
        {status === "success" && (
          <p className={styles.successMessage}>
            Reservation received! We will contact you through
            WhatsApp shortly.
          </p>
        )}

        {status === "error" && (
          <p className={styles.errorMessage}>
            Reservation could not be submitted. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}

export default ReservationForm;