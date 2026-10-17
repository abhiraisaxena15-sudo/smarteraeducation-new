# Website form ko Google Sheet se jodna (10 minute)

Yeh sab **info.smarteraeducation@gmail.com** se login karke karna hai.

## 1. Sheet banao
1. [sheets.google.com](https://sheets.google.com) kholo → **Blank** sheet.
2. Naam rakho: `Smart Era – Website Leads`.

## 2. Code paste karo
1. Sheet mein menu: **Extensions → Apps Script**.
2. Jo bhi code dikhe (`function myFunction…`) use hata do.
3. Is folder ki `Code.gs` file ka poora code copy karke paste karo.
4. Upar **Save** (💾) dabao.

## 3. Permission do + test karo
1. Upar function dropdown mein **testSetup** select karo → **Run**.
2. "Authorization required" aayega → **Review permissions** → apna account chuno →
   "Google hasn't verified this app" pe **Advanced → Go to (project name)** → **Allow**.
   (Yeh aapka khud ka script hai, isliye yeh warning normal hai.)
3. Sheet mein wapas jao — `Leads` naam ka tab bana hoga aur ek "Test Lead" row hogi.
   Email pe bhi notification aaya hoga. Test row delete kar sakte ho.

## 4. Web App deploy karo
1. Apps Script mein upar right: **Deploy → New deployment**.
2. ⚙️ (Select type) → **Web app**.
3. Settings:
   - Description: `Website leads`
   - Execute as: **Me (info.smarteraeducation@gmail.com)**
   - Who has access: **Anyone**
4. **Deploy** → jo **Web app URL** mile (`https://script.google.com/macros/s/…/exec`) use copy karo.

## 5. URL website mein lagao
Do mein se koi ek tarika:

- **Aasaan:** `src/data/site.ts` kholo aur yeh line:
  ```ts
  leadsEndpoint: (import.meta.env.VITE_LEADS_ENDPOINT as string | undefined) || '',
  ```
  mein last ke `''` ki jagah apna URL daal do:
  ```ts
  leadsEndpoint: (import.meta.env.VITE_LEADS_ENDPOINT as string | undefined) || 'https://script.google.com/macros/s/XXXX/exec',
  ```
- **Ya Vercel pe:** Project → Settings → Environment Variables →
  `VITE_LEADS_ENDPOINT` = apna URL → phir redeploy.

## 6. Live test
Website pe form bharo (apna number daal ke) → 5 second mein Sheet mein nayi row aani chahiye.

---

### Jab tak URL nahi lagaya
Form bhi kaam karta rahega: submit karne pe student ki details WhatsApp message mein bhar ke
**+91 63677 78950** (WhatsApp) pe bhejne ka option khulega, taaki koi lead gum na ho.

### Sheet mein kya aayega
Time (IST), Name, Phone, Email, Course, University, Mode (Regular/Online), City, Service,
aur ads se aaye ho toh UTM Source/Campaign. Last mein **Status** aur **Remarks** columns
aapki team ke follow-up ke liye khaali hain.

### Code mein badlav kiya ho toh
**Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy.**
URL wahi rahega.
