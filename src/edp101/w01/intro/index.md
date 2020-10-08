---
marp: true
title: "[EDP 101] Week 1 - Introduction to Electronic Data Processing"
description: "a.k.a how to use technology to make your life easier"
paginate: true
---

![bg right](https://source.unsplash.com/I_pOqP6kCOI/)

# Introduction to Electronic Data Processing

EDP 101 - Week 1

---

![bg blur](https://i.imgur.com/WuGXiGS.jpg)

## About the teacher

- swift as the coursing river
- with all the force of a great typhoon
- with all the strength of a raging fire
- mysterious as the dark side of the moon

---

![bg left](https://source.unsplash.com/RLw-UC03Gwc/)

## Remember, remember

- Please keep your **User ID** for yourself.
- Don't hesitate to ask questions. Satisfy your curiosity.
- The teacher doesn't know every thing. But I bet Google Search does.
- Everybody starts out as a beginner. Don't be afraid to try new things.
- Tell the teacher if the pace is too slow or too fast.

---

# What is Electronic Data Processing?

---

> **Electronic data processing (EDP)** can refer to the use of automated methods to process commercial data. Typically, this uses relatively simple, repetitive activities to process large volumes of similar information.

*- [Wikipedia](https://en.wikipedia.org/wiki/Electronic_data_processing)*

---

![bg left](https://source.unsplash.com/7lryofJ0H9s/)

## Course Outline

1. Introduction to the different apps in the Google ecosystem
2. Capturing meaningful data using Google Forms
3. Cleaning the data in Google Sheets
4. Telling a story using Google Data Studio
5. ???
6. Profit!

---

![bg left](https://source.unsplash.com/-NPoYf8RGRw/)

## The Google ecosystem

- Search
- Gmail
- YouTube
- Drive
- Docs
- Sheets
- Slides
- Forms
- Apps Scripts
- Data Studio
- ...and a whole lot more

---

![bg left](https://source.unsplash.com/-NPoYf8RGRw/)

## The Google ecosystem

- ***Search***
- Gmail
- YouTube
- Drive
- Docs
- ***Sheets***
- Slides
- ***Forms***
- Apps Scripts
- ***Data Studio***
- ...and a whole lot more

---

![bg left](https://source.unsplash.com/IClZBVw5W5A/)

## Use the right tool for the job.

---

![bg left](https://i.imgur.com/Z2XbxkK.jpg)

> To the man who only has a hammer, everything he encounters begins to look like a nail.

*- Abraham Maslow*

---

![bg left](https://source.unsplash.com/d9ILr-dbEdg/)

# Google Search

- [Beginner's guide to Google-fu](https://medium.com/analytics-vidhya/https-medium-com-what-is-googlefu-tips-and-tricks-to-be-googlefu-advanced-powersearching-with-google-f7e5661a8bca)
- [Search Education](https://www.google.com/insidesearch/searcheducation/)
- [Power Searching with Google](https://coursebuilder.withgoogle.com/sample/assess)

---

![bg left](https://source.unsplash.com/toQNPpuDuwI/)

# Gmail

- Huge storage space
- Easy to use UI
- One account to rule them all

---

![bg left](https://source.unsplash.com/2rCggxMjd_8/)

# YouTube

- 300 hours of video are uploaded to YouTube every minute
- almost 5 billion videos are watched on Youtube every single day
- great place to learn something new, for free

---

![bg left](https://source.unsplash.com/8e2gal_GIE8/)

# Google Drive

- single source of truth
- collaborating made easy
- auto-saves
- version control
- automation available

---

![bg left](https://source.unsplash.com/5cFwQ-WMcJU/)

# Google Docs

- writing more efficiently
  - voice typing
- [docs.new](http://docs.new)

---

![bg left](https://source.unsplash.com/I0yLAcAetNQ/)

# Google Sheets

- can be connected to different apps
  - e.g. Forms and Data Studio
- [sheets.new](http://sheets.new)

---

![bg left](https://source.unsplash.com/Rd9uwddKoRA/)

# Google Slides

- easy to embed to different (Google) sites
- easy to add drawings, images, and video
- [slides.new](http://slides.new)

---

![bg left](https://source.unsplash.com/BkW8d0QGELY/)

# Google Forms

- create surveys in minutes
- forms can be converted to a quiz
- can upload files directly to Google Drive
- [forms.new](http://forms.new)

---

![bg left](https://source.unsplash.com/sTnZRUJm-kI/)

# Google Apps Scripts

- make your own workflows!
- cloud-based scripting language
- able to access different Google Apps thru APIs

---

![bg left](https://source.unsplash.com/Cg9QlLuX120/)

# Google Data Studio

- turns your data into dashboards and reports that is:
  - informative,
  - easy to read,
  - easy to share,
  - and fully customizable

---

![bg left](https://source.unsplash.com/bn-D2bCvpik/)

# Demo

Creating your own Data Studio Dashboard

---

### Steps

1. Open [Data Studio](https://datastudio.google.com/).
2. Create a Blank Report.
3. Add a new Data Source.
4. ???
5. Done!

---

### Different terms

- **Fields**
  - the different "columns" of the data you collected
- **Dimensions**
  - describes or categorizes your data
  - adding dimensions to a chart groups the data by those dimensions
- **Metrics**
  - is the result of applying an aggregation to a set of values
  - could come from the underlying data set, or be the result of implicitly or
    explicitly applying an aggregation function, such as `COUNT()`, `SUM()`, or
    `AVG()`

---

![bg 60%](https://i.imgur.com/ymCZMpS.png)

---

### Adding Data from another worksheet

```
=IFERROR(
  INDEX(IMPORTRANGE("GOOGLE_DOCUMENT_ID", "SHEET_NAME!$VALUE_COLUMN$1:$VALUE_COLUMN$100"),
    MATCH($KEY2, IMPORTRANGE("GOOGLE_DOCUMENT_ID", "SHEET_NAME!$KEY_COLUMN$1:$KEY_COLUMN$100"), 0)
  ),
  ""
)
```

---

![bg contain](https://i.imgur.com/ZjJqoXO.png)
