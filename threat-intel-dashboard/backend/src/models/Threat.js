// backend/src/models/Threat.js
import mongoose from 'mongoose';

const threatSchema = new mongoose.Schema({
  threat_name: String,
  threat_category: String,
  cleaned_description: String,
  severity_score: Number
}, { timestamps: true });

export default mongoose.model('Threat', threatSchema);
