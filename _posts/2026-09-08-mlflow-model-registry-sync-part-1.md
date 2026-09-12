---
title: "Govern models with MLflow and Amazon SageMaker AI Model Registry sync: Part 1"
date: 2026-09-08
permalink: /posts/2026/09/mlflow-model-registry-sync-part-1
excerpt_separator: <!--more-->
toc: true
header:
 teaser: "posts/mlflow-model-registry-sync/single-account.png"
 og_image: "posts/mlflow-model-registry-sync/single-account.png"
tags:
  - sagemaker
  - mlflow
  - model-registry
  - governance
  - mlops
---
Data scientists track dozens of candidate runs in MLflow, while governance officers need one authoritative registry to validate, approve, and audit the models that reach production. Managed MLflow on Amazon SageMaker AI now closes that gap: every model registered in MLflow syncs into the SageMaker AI Model Registry together with its training metrics, evaluation results, inference specification, and lineage — and lifecycle promotion is driven from MLflow itself. In this first of two posts, we introduce how automatic model registration works and walk through a single-account setup where IAM guardrails separate the data scientist from the governance officer.

<!--more-->

**Full text [here](https://aws.amazon.com/blogs/machine-learning/govern-models-with-mlflow-and-amazon-sagemaker-ai-model-registry-sync-part-1/), and GitHub repository [here](https://github.com/aws-samples/genai-ml-platform-examples/tree/main/operations/sagemaker-mlflow-model-registry-goverance)**

![Architecture: in a single AWS account, a data scientist logs a model, inference spec, and evaluation metrics to a managed MLflow app with Model Registry sync on; the sync creates the Model Package Group and version in the SageMaker AI Model Registry; an IAM condition key gate lets the data scientist promote to staging only, while the governance officer promotes to production and an ML engineer deploys via CI/CD](/images/posts/mlflow-model-registry-sync/single-account.png)

Co-authored with Derrick Choo, Melanie Li, and Ram Vittal, this post walks through the feature end to end. Sync is opt-in: you set `AutoModelRegistrationEnabled` on the MLflow app and grant its service role the registration and lineage permissions. From then on, a single `mlflow.register_model()` call creates the Model Package Group and version, and two optional artifacts — an inference specification logged with `sagemaker_mlflow.log_inference_specification()` and evaluation metrics from `sagemaker_mlflow.evaluate()` — travel with it so the model card and deployability are there before anyone opens the registry. Lifecycle is expressed through MLflow aliases following the `sagemakerlifecycle-{stage}-{status}` convention, and the guardrails are plain IAM: a `sagemaker:ModelLifeCycle/stage` condition key denies production promotions for the data-scientist role, and an `aws:ResourceTag/frozen` deny locks an approved Model Package Group against further change. We close with the governance officer's view in SageMaker Studio — synced metrics, the Evaluate tab, and the lineage graph — and the `sagemaker-mlflow` 0.5.0 additions (inference image logging, session injection) that Part 2 builds on.

**Why I wrote this.** Every MLOps conversation I have eventually lands on the same tension: data scientists want to live in MLflow, governance wants one registry it can audit. The old answer was a re-registration step someone had to own and maintain. With Model Registry sync the two systems of record stay in sync by construction, and this post is the guide I wanted to hand customers on day one — the feature, the IAM guardrails that make the personas real, and a runnable notebook.
{: .notice--info}
