// backend/src/controllers/threatController.js
import Threat from '../models/Threat.js';

export const getThreats = async (req, res) => {
  const { page = 1, limit = 20, category, search } = req.query;
  const filter = {};
  if (category) filter.threat_category = category;
  if (search)   filter.cleaned_description = { $regex: search, $options: 'i' };

  const threats = await Threat.find(filter)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  const total = await Threat.countDocuments(filter);
  res.json({ total, page: +page, limit: +limit, data: threats });
};

export const getThreatById = async (req, res) => {
  const threat = await Threat.findById(req.params.id);
  if (!threat) return res.status(404).json({ message: 'Not found' });
  res.json(threat);
};

export const getStats = async (_req, res) => {
  const total = await Threat.countDocuments();
  const byCategory = await Threat.aggregate([
    { $group: { _id: '$threat_category', count: { $sum: 1 } } }
  ]);
  const bySeverity = await Threat.aggregate([
    { $group: { _id: '$severity_score', count: { $sum: 1 } } }
  ]);
  res.json({ total, byCategory, bySeverity });
};
