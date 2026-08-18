---
title: "From Runbooks to Production: AI-Orchestrated Infrastructure at Enterprise Scale"
collection: talks
type: "Workshop"
permalink: /talks/2026-aws-ai-sdlc-vienna
venue: "AWS AI SDLC Workshop"
date: 2026-06-17
location: "Vienna, Austria"
tags:
  - agentic-ai
  - generative-ai
---

How do you turn a two-week, multi-account infrastructure runbook into a one-hour conversation? This session presented a re-imagined developer portal experience built on Strands Agents SOPs: architecture decisions, security constraints, and deployment steps codified once as machine-readable runbooks (RFC 2119 keywords, parameterized inputs, progress tracking), executed by an agent that generates Terraform and application code, monitors deployments, and adapts to failures — with a human setting parameters, reviewing the plan, and gating production. The live demonstration took a web application from description to production across three AWS accounts: ~150 resources, 6 Terraform modules (VPC, ALB, CloudFront, ECS, RDS, Cognito), in under an hour. Presented at the [AWS AI SDLC Workshop](https://aws-experience.com/emea/de-central-growth/e/66807/aws-ai-sdlc-workshop-vienna) in Vienna.

![Architecture: three-tier Django application on AWS ECS Fargate with a cross-account CI/CD pipeline — CodePipeline and Terraform in the dev account deploying CloudFront, ALB, ECS Fargate, RDS PostgreSQL, and Cognito to dev, staging, and production accounts with a manual approval gate before production](/images/talks/aisdlc-architecture.png)

*The target architecture the agent bootstraps: a three-tier web application deployed by a single CI/CD pipeline across dev, staging, and production accounts, with a manual approval gate before production.*
