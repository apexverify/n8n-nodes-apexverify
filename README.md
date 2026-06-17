![ApexVerify Dashboard](https://files.buildwithfern.com/apexverify.docs.buildwithfern.com/b6ffdc430aceb1957b50c56dbbb3c1dc304a588f0afb74e074408d4c1ad26726/docs/assets/images/overview/quickstart/first-verification-login.png)

# n8n-nodes-apexverify

[![npm version](https://img.shields.io/npm/v/n8n-nodes-apexverify.svg)](https://www.npmjs.com/package/n8n-nodes-apexverify)
[![n8n Community Node](https://img.shields.io/badge/n8n-Community%20Node-blue.svg)](https://n8n.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**ApexVerify** is the complete toolkit to keep campaign data updated and accurate at scale. From a single real-time check to millions of records processed in batch, ApexVerify gives you clean, actionable data, with detailed quality signals, targeting metadata, and full export flexibility.

This is the official [n8n](https://n8n.io/) community node for **ApexVerify**, allowing you to seamlessly integrate enterprise-grade email verification and phone number validation directly into your automated workflows.

---

## 🚀 Features

Stop letting fake leads and hard bounces ruin your marketing efforts. With this node, you can automate your data hygiene using our core capabilities:

*   📧 **Email Verification & Validation:** Syntax checks, MX validation, SMTP probes, catch-all detection, and disposable / role / free provider flags.
*   📱 **Phone Number Verification:** Detect number type (mobile, landline, VoIP), live status, porting status, and operator identification.
*   🎯 **Targeting Context:** Configure country, audience role, industry, and campaign objective to tune verification scoring.
*   🧠 **Smart Caching:** Utilize account and global caches to receive up to 50% credit refunds on repeat verifications.
*   ⚡ **Real-Time Unit Checks:** Get results in under 5 seconds—perfect for live form validation (Google Forms, Typeform, Webhooks) and CRM data cleaning (Salesforce, HubSpot).

---

## 📦 Installation

You can install this node directly from your n8n dashboard or via npm.

### Option 1: Install via n8n UI (Recommended)
1. Open your n8n dashboard.
2. Go to **Settings** > **Community Nodes**.
3. Click **Install**.
4. Enter `n8n-nodes-apexverify`.
5. Click **Install** and wait for n8n to restart.

### Option 2: Install via npm
If you are hosting n8n on your own server, run this command in your n8n installation directory (usually `~/.n8n`):

```bash
npm install n8n-nodes-apexverify