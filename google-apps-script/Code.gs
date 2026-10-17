/**
 * Smart Era Education — Website Leads → Google Sheet
 *
 * Yeh code Google Sheet ke andar Extensions → Apps Script mein paste karna hai.
 * Poore steps: google-apps-script/SETUP.md
 */

const SHEET_NAME = 'Leads';

/** Har nayi lead pe is email pe notification aayega. Band karna ho toh '' kar do. */
const NOTIFY_EMAIL = 'info.smarteraeducation@gmail.com';

const HEADERS = [
  'Timestamp (IST)', 'Name', 'Phone', 'Email', 'Course', 'University', 'Mode', 'City', 'State',
  'Service', 'UTM Source', 'UTM Medium', 'UTM Campaign', 'UTM Content', 'UTM Term',
  'gclid', 'fbclid', 'Page', 'Status', 'Remarks',
];

function doPost(e) {
  const p = (e && e.parameter) || {};

  // Bot protection: hidden "website" field sirf bots bharte hain
  if (p.website) return json_({ ok: true });

  const phone = String(p.phone || '').replace(/\D/g, '').slice(-10);
  const name = clean_(p.name, 80);
  if (!/^[6-9]\d{9}$/.test(phone) || name.length < 2) {
    return json_({ ok: false, error: 'invalid' });
  }

  // Same number se 2 minute ke andar double-submit ignore
  const cache = CacheService.getScriptCache();
  if (cache.get('lead_' + phone)) return json_({ ok: true, duplicate: true });
  cache.put('lead_' + phone, '1', 120);

  const row = [
    Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd-MM-yyyy HH:mm:ss'),
    name,
    "'" + phone,
    clean_(p.email, 120),
    clean_(p.course, 40),
    clean_(p.university, 80),
    clean_(p.mode, 20),
    clean_(p.city, 60),
    clean_(p.state, 60),
    clean_(p.service, 60),
    clean_(p.utm_source, 100),
    clean_(p.utm_medium, 100),
    clean_(p.utm_campaign, 150),
    clean_(p.utm_content, 150),
    clean_(p.utm_term, 100),
    clean_(p.gclid, 200),
    clean_(p.fbclid, 200),
    clean_(p.page, 300),
    'New',
    '',
  ];

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    getSheet_().appendRow(row);
  } finally {
    lock.releaseLock();
  }

  if (NOTIFY_EMAIL) {
    try {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: 'New website lead: ' + name + ' — ' + (row[4] || 'Course not given'),
        body: [
          'Name: ' + name,
          'Phone: ' + phone,
          'Email: ' + row[3],
          'Course: ' + row[4],
          'University: ' + row[5],
          'Mode: ' + row[6],
          'City: ' + row[7],
          'State: ' + row[8],
          'Service: ' + row[9],
          'Source: ' + [row[10], row[11], row[12]].filter(String).join(' / '),
          '',
          'Call: tel:+91' + phone,
          'WhatsApp: https://wa.me/91' + phone,
        ].join('\n'),
      });
    } catch (err) {
      // Email quota khatam ho jaye toh bhi lead Sheet mein save rahegi
    }
  }

  return json_({ ok: true });
}

/** Browser mein Web App URL kholne par yeh dikhega — test ke liye */
function doGet() {
  return ContentService.createTextOutput('Smart Era leads endpoint is working.');
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  // Purani sheet mein 'State' column nahi hai toh City ke baad add kar do
  if (sheet.getLastRow() > 0) {
    const header = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    if (header.indexOf('State') === -1) {
      const cityCol = header.indexOf('City') + 1;
      if (cityCol > 0) {
        sheet.insertColumnAfter(cityCol);
        sheet.getRange(1, cityCol + 1).setValue('State');
      }
    }
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#1e3a8a').setFontColor('#ffffff');
  }
  return sheet;
}

/** Text saaf karta hai aur formula-injection (=, +, -, @ se shuru) rokta hai */
function clean_(value, maxLen) {
  let s = String(value || '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, maxLen || 200);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Setup ke baad ek baar Run karo — permission dene ke liye aur test row daalne ke liye */
function testSetup() {
  doPost({ parameter: { name: 'Test Lead', phone: '9999999999', course: 'MBA', city: 'Noida', state: 'Uttar Pradesh', page: 'manual test' } });
}
