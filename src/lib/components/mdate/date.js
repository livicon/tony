import { writable } from "svelte/store";

export let date = writable({
    name: "holidays",
    version: "1.0.0",
    dependencies: "customise dates to holidays",
    dates: [
      {
        years: 2021,
        month: 11,
        day:2
      },{
        years: 2021,
        month: 12,
        day:17
      },{
        "years": 2021,
        "month": 12,
        "day":31
      },{
        "years": 2021,
        "month": 12,
        "day":30
      }
    ]
  }
  )