import note from "./assets/image/Note.svg";
import work from "./assets/image/Work.svg";
import easy from "./assets/image/Easy.svg";
import visit from "./assets/image/start-visit.png";

export const deleteRecordConfirmationTitle = "Confirm deletion";

export const deleteRecordConfirmationContent =
  "Are you really want to delete this record? This action can not be undone.";

export const deleteRecordsConfirmationContent =
  "Are you really want to delete these records? This action can not be undone.";

export const clinicalCardContent = [
  {
    name: "Note",
    head: "Notes in your style, 10x faster",
    content:
      "Doctor-assist learns your style and format, with every edit. Get customized clinical notes in moments, not hours.",
    logo: note,
  },
  {
    name: "Work",
    head: "Works in every setting",
    content:
      "Capture notes accurately for any specialty visit up to 2 hours, be it virtual or in office, even if it’s noisy.",
    logo: work,
  },
  {
    name: "Easy",
    head: "Easy to user",
    content:
      "Copy and paste into your “favorite” EHR. Support your patient with easy to follow patient instructions.",
    logo: easy,
  },
];

export const simplicityCardContent = [
  {
    name: "card1",
    head: "1. Capture",
    content:
      "Select “Capture visit” when your visit begins. Doctor-assist can listen for up to two hours, whether it's a virtual or office visit.",
    logo: visit,
  },
  {
    name: "card2",
    head: "2. Edit",
    content:
      "Select “End visit” and view your completed patient note in about a minute. Edit to help Doctor-assist learn your style.",
    logo: visit,
  },
  {
    name: "card3",
    head: "3. Sign off",
    content:
      "Send simple patient instructions, and copy completed notes into any EHR.",
    logo: visit,
  },
];
