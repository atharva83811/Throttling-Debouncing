# Throttling & Debouncing in JavaScript

A practical demonstration of **Throttling** and **Debouncing** concepts in JavaScript, created to understand and visualize how event rate-limiting improves application performance and user experience.

---

## 📌 Overview

Web applications often handle events that fire repeatedly in a very short span of time—such as keyboard input, scrolling, resizing, or rapid button clicks.  
If every event triggers logic execution, it can cause **performance bottlenecks and unnecessary computations**.

This project explores two essential optimization techniques used to control such behavior:
- **Debouncing**
- **Throttling**

The goal is to clearly understand when and why each technique should be used in real-world applications.

---

## 🧠 Concepts Covered

### 🔹 Debouncing
Debouncing delays the execution of a function until a certain amount of time has passed since the last event trigger.

**Common use cases:**
- Search bars and autocomplete inputs
- Form field validations
- Auto-save functionality
- Window resize handling

---

### 🔹 Throttling
Throttling ensures that a function is executed at most once in a defined time interval, even if the event continues to fire.

**Common use cases:**
- Scroll event listeners
- Mouse movement tracking
- Button click rate limiting
- Infinite scrolling implementations

---

## 🎯 What This Project Demonstrates

- How uncontrolled event listeners can negatively impact performance
- The behavioral difference between throttling and debouncing
- How to apply event optimization techniques in UI-heavy applications
- Writing reusable, higher-order utility functions in JavaScript

---

## 📈 Possible Enhancements

- Visual counters to compare optimized vs non-optimized execution
- Integration with API calls to simulate real-world usage
- React or Angular implementations for framework-specific use cases
- Unit testing for event handling utilities

---
