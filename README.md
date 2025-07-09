# Threat Intel Dashboard

A full-stack web application to monitor, analyze, and visualize cybersecurity threat data using an intuitive dashboard. Designed for SOC teams, analysts, and cybersecurity researchers.

## 🔐 Features

- 📊 Real-time threat statistics and trends
- 🔎 Search, filter, and sort threat logs
- 🧠 ML-based threat category prediction (WIP)
- 📁 Upload threat data and auto-ingest
- 🧾 View and manage threat intelligence entries
- 👤 Admin/user authentication and access control (OAuth/NextAuth)
- 📈 Chart visualizations and summaries

## 🛠 Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- Axios
- React Router / ShadCN / Chart.js

### Backend
- FastAPI
- MongoDB
- Pydantic, Uvicorn

### Extras
- JWT-based secure APIs
- MongoDB Atlas integration
- ML threat classification endpoint (future work)
- Docker-ready (optional)

## 📂 Folder Structure


├── backend/ # FastAPI app
│ ├── api/ # Endpoints
│ ├── models/ # MongoDB schemas
│ └── ingest.py # Data ingestion script
├── frontend/ # Next.js app
│ ├── components/
│ ├── pages/
│ └── styles/


## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- Python ≥ 3.9
- MongoDB running locally or via Atlas

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

## Frontend Setup
cd frontend
npm install
npm run dev




Author:
Harini Sri
📧 harinisri32@gmail.com
🔗 github.com/harinisri32
