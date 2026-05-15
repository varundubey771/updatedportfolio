import type { Experience } from "@/app/types";

export const experience: Experience[] = [
  {
    company: "ZS Associates",
    location: "Bangalore",
    period: "Nov 2024 – Present",
    title: "Senior Software Engineer",
    highlights: [
      "Leading Quill — an AI-powered medical-legal review platform: designed scalable microservices (FastAPI, Celery, Redis, pgvector) for RAG-based retrieval across 150k+ docs, deployed on Kubernetes.",
      "Modernized a legacy monolith into a modular, horizontally scalable architecture with stateless services, async task queues, and layered design patterns.",
      "Built a multi-agent orchestration framework (LangGraph) and integrated Langfuse for real-time LLM observability and prompt tuning.",
      "Applied distributed systems principles — state decoupling, async processing, and layered architecture — to improve throughput and system reliability.",
    ],
  },
  {
    company: "Jio",
    location: "Navi Mumbai",
    period: "Jul 2022 – Nov 2024",
    title: "Software Development Engineer",
    highlights: [
      "Optimized 50+ FastAPI endpoints from 60s → <500ms using Python concurrency, connection pooling, and Elasticsearch query restructuring.",
      "Built Kafka-based real-time data pipelines and Kubernetes KPI microservices for monitoring 1500+ government servers.",
      "Designed ARP data collection pipelines achieving ~100% network topology visibility for project-wide network graphs.",
      "Developed high-performance FastAPI microservices for real-time Kubernetes cluster monitoring across all levels.",
    ],
  },
];
