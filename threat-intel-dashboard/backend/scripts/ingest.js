// backend/scripts/ingest.js
import fs from 'fs';
import csv from 'csv-parser';
import dotenv from 'dotenv';
import { connectDB } from '../src/config/db.js';
import Threat from '../src/models/Threat.js';

dotenv.config();
await connectDB();

const results = [];

// ── Read CSV and transform ──────────────────────────────────────────────
fs.createReadStream('threat_data.csv')
  .pipe(csv())
  .on('data', (row) => {
    results.push({
      // dataset has “Threat Actor” rather than “Threat Name”
      threat_name: row['Threat Actor'] || row['Threat_Actor'] || 'Unknown',

      threat_category: row['Threat Category'] || row['Threat_Category'] || 'Uncategorised',

      cleaned_description:
        row['Cleaned Threat Description'] ||
        row['Cleaned_Threat_Description'] ||
        '',

      severity_score:
        Number(row['Severity Score'] || row['Severity_Score']) || 1,
    });
  })
  .on('end', async () => {
    try {
      await Threat.deleteMany({});
      await Threat.insertMany(results);
      console.log(`✅ Inserted ${results.length} threats into MongoDB.`);
    } catch (err) {
      console.error('❌ Error inserting data:', err);
    } finally {
      process.exit();
    }
  });
