---
title: End-to-end lineage with DVC and Amazon SageMaker AI MLflow apps
date: 2026-04-21
permalink: /posts/2026/04/dvc-sagemaker-mlflow-lineage
excerpt_separator: <!--more-->
toc: true
header:
 og_image: "posts/dvc-sagemaker-mlflow-lineage/architecture.png"
tags:
  - sagemaker
  - mlflow
  - dvc
  - mlops
  - lineage
---
Production ML teams often struggle to trace the full lineage of a model back to the exact data and code that trained it. In this post, we close that gap by combining DVC for data versioning, Amazon SageMaker AI for scalable processing and training, and Amazon SageMaker AI MLflow Apps for experiment tracking and model registry — turning multi-day audit investigations into a single query.

**Full text [here](https://aws.amazon.com/blogs/machine-learning/end-to-end-lineage-with-dvc-and-amazon-sagemaker-ai-mlflow-apps/), and GitHub repository [here](https://github.com/aws-samples/sample-amazon-sagemaker-mlflow-dvc-lineage)** ![GitHub stars](https://img.shields.io/github/stars/aws-samples/sample-amazon-sagemaker-mlflow-dvc-lineage?style=social&cacheSeconds=3600)

<!--more-->

We walk through two deployable patterns you can run end-to-end in your own AWS account: a foundational **dataset-level lineage** pattern, where every MLflow run logs the DVC commit hash (`data_git_commit_id`) that points to the exact versioned dataset in Amazon S3; and a **record-level lineage** pattern for regulated environments (healthcare, financial services, GDPR opt-out scenarios) that adds manifests and a consent registry so you can answer questions like *"which models were trained on patient X's data?"* instantly from MLflow artifacts. The result is a clean separation of concerns — DVC owns data-to-training lineage, MLflow owns training-to-deployment lineage, and the Git commit hash ties them together.
