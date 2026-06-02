import { useState, useMemo, useEffect } from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock, MapPin, Phone, Check } from "lucide-react";
import { toast } from "sonner";
import { Reveal, Overline } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT, HOURS } from "@/data/content";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const inputCls =
  "w-full bg-[#F7F4EE] border border-[#2C1E16]/10 rounded-xl px-4 py-3.5 text-[#2C1E16] placeholder:text-[#2C1E16]/40 focus:outline-none focus:border-[#2F6042] focus:ring-2 focus:ring-[#2F6042]/20 transition-all";

const labelCls =
  "block text-xs uppercase tracking-[0.15em] font-semibold text-[#5C4A3D] mb-2";

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
const toLabel = (min) =>
  `${String(Math.floor(min / 60)).padStart(2, "0")}:${String(min % 60).padStart(2, "0")}`;

// Slots every 30 min within the café's working hours for the selected day,
// last slot is one hour before closing. Sat/Sun use weekend hours.
const generateTimeSlots = (date) => {
  const day = date ? date.getDay() : 1; // default to weekday hours
  const isWeekend = day === 0 || day === 6;
  const { open, close } = isWeekend ? HOURS.weekend : HOURS.weekday;
  const start = toMinutes(open);
  const end = toMinutes(close) - 60;
  const slots = [];
  for (let m = start; m <= end; m += 30) slots.push(toLabel(m));
  return slots;
};

const Reservation = () => {
  const { t } = useLanguage();
  const r = t.reservation;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [notes, setNotes] = useState("");

  const timeSlots = useMemo(() => generateTimeSlots(date), [date]);

  // Reset a chosen time if it falls outside the slots for the newly picked day.
  useEffect(() => {
    if (time && !timeSlots.includes(time)) setTime("");
  }, [timeSlots, time]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      name,
      phone,
      date: date ? format(date, "yyyy-MM-dd") : "",
      time,
      guests,
      notes,
      submittedAt: new Date().toISOString(),
    };
    console.log("Gossip Cafe — New Reservation Request:", reservation);
    toast.success(r.success, {
      icon: <Check className="w-4 h-4" />,
    });
    setName("");
    setPhone("");
    setDate(null);
    setTime("");
    setGuests("");
    setNotes("");
  };

  return (
    <section
      id="contact"
      data-testid="reservation-section"
      className="py-20 sm:py-32 bg-[#FDFBF7]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
        <Reveal>
          <Overline>{r.overline}</Overline>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#2C1E16] tracking-tight mt-4">
            {r.title}
          </h2>
          <p className="text-[#5C4A3D] text-lg mt-4 leading-relaxed max-w-md">{r.body}</p>

          <form
            onSubmit={handleSubmit}
            data-testid="reservation-form"
            className="mt-8 bg-white rounded-[2rem] border border-[#2C1E16]/8 shadow-[0_18px_50px_-25px_rgba(44,30,22,0.35)] p-6 sm:p-9 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls} htmlFor="res-name">{r.fields.name}</label>
                <input
                  id="res-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={r.fields.name}
                  data-testid="res-name-input"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="res-phone">{r.fields.phone}</label>
                <input
                  id="res-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={r.fields.phone}
                  data-testid="res-phone-input"
                  className={inputCls}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>{r.fields.date}</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      data-testid="res-date-trigger"
                      className={`${inputCls} flex items-center justify-between text-left ${
                        date ? "text-[#2C1E16]" : "text-[#2C1E16]/40"
                      }`}
                    >
                      {date ? format(date, "PPP") : r.fields.date}
                      <CalendarIcon className="w-4 h-4 text-[#2F6042]" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-[#FDFBF7]" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className={labelCls} htmlFor="res-time">{r.fields.time}</label>
                <Select value={time} onValueChange={setTime} required>
                  <SelectTrigger
                    id="res-time"
                    data-testid="res-time-trigger"
                    className={`${inputCls} ${time ? "text-[#2C1E16]" : "text-[#2C1E16]/40"}`}
                  >
                    <SelectValue placeholder={r.fields.time} />
                  </SelectTrigger>
                  <SelectContent className="bg-[#FDFBF7] max-h-60">
                    {timeSlots.map((slot) => (
                      <SelectItem
                        key={slot}
                        value={slot}
                        data-testid={`res-time-option-${slot}`}
                      >
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className={labelCls}>{r.fields.guests}</label>
              <Select value={guests} onValueChange={setGuests} required>
                <SelectTrigger
                  data-testid="res-guests-trigger"
                  className={`${inputCls} ${guests ? "text-[#2C1E16]" : "text-[#2C1E16]/40"}`}
                >
                  <SelectValue placeholder={r.fields.guests} />
                </SelectTrigger>
                <SelectContent className="bg-[#FDFBF7]">
                  {r.guestOptions.map((g, i) => (
                    <SelectItem key={i} value={g} data-testid={`res-guest-option-${i}`}>
                      {g}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className={labelCls} htmlFor="res-notes">{r.fields.notes}</label>
              <textarea
                id="res-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={r.fields.notes}
                rows={2}
                data-testid="res-notes-input"
                className={`${inputCls} resize-none`}
              />
            </div>

            <button
              type="submit"
              data-testid="res-submit-btn"
              className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#2F6042] text-[#FDFBF7] font-medium transition-all hover:bg-[#234B33] hover:-translate-y-0.5"
            >
              {r.submit}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bg-[#F5F2EB] rounded-[2rem] p-8 sm:p-10 h-full flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2 text-[#2F6042]">
                <Clock className="w-5 h-5" strokeWidth={1.8} />
                <h3 className="font-serif text-2xl text-[#2C1E16]">{r.hoursTitle}</h3>
              </div>
              <div className="mt-5 space-y-3">
                {r.hours.map((h, i) => (
                  <div
                    key={i}
                    data-testid={`hours-row-${i}`}
                    className="flex items-center justify-between border-b border-dashed border-[#2C1E16]/20 pb-3"
                  >
                    <span className="text-[#5C4A3D]">{h.day}</span>
                    <span className="font-medium text-[#2C1E16]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-[#2F6042]">
                <MapPin className="w-5 h-5" strokeWidth={1.8} />
                <h3 className="font-serif text-2xl text-[#2C1E16]">{r.contactTitle}</h3>
              </div>
              <div className="mt-5 space-y-2 text-[#5C4A3D]">
                <p className="font-medium text-[#2C1E16]">{CONTACT.name}</p>
                <p>{CONTACT.street}</p>
                <p>{CONTACT.city}</p>
                <a
                  href={CONTACT.phoneHref}
                  data-testid="contact-phone-link"
                  className="inline-flex items-center gap-2 mt-2 text-[#2F6042] hover:text-[#234B33] transition-colors"
                >
                  <Phone className="w-4 h-4" /> {CONTACT.phone}
                </a>
              </div>
            </div>

            <a
              href={CONTACT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="map-link"
              className="mt-auto inline-flex items-center justify-center px-7 py-3 rounded-full border border-[#2C1E16] text-[#2C1E16] font-medium transition-all hover:bg-[#2C1E16] hover:text-[#FDFBF7]"
            >
              Open in Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Reservation;
