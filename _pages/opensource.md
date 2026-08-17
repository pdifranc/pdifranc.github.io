---
permalink: /opensource/
title: "Open Source"
author_profile: true
excerpt: "Open-source contributions by Paolo Di Francesco — MLflow, SageMaker Python SDK, and public AWS workshops."
---

Most of my open-source work orbits MLflow and Amazon SageMaker, because that's where my customers' problems live. A recurring theme: the hard part of ML in production is rarely the model. It's versioning, authentication, and the seams between tools. When I hit one of those seams often enough, I fix it upstream.

Stars are live.

## Contributions

<div class="oss-grid">
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">mlflow/mlflow</span>
      <span class="oss-card__stars"><img src="https://img.shields.io/github/stars/mlflow/mlflow?style=social&cacheSeconds=3600" alt="GitHub stars"></span>
    </div>
    <p class="oss-card__desc">Added AWS SigV4 request signing to the MLflow client via <code>MLFLOW_TRACKING_AWS_SIGV4</code>, enabling MLflow tracking servers to sit behind Amazon API Gateway with IAM authentication.</p>
    <span class="oss-card__tag">Pull Request</span>
    <a class="oss-card__stretched" href="https://github.com/mlflow/mlflow/pull/7044" aria-label="View PR on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">mlflow/mlflow</span>
      <span class="oss-card__stars"><img src="https://img.shields.io/github/stars/mlflow/mlflow?style=social&cacheSeconds=3600" alt="GitHub stars"></span>
    </div>
    <p class="oss-card__desc">Unblocked <code>mlflow sagemaker build-and-push-container</code> in SageMaker JupyterLab: added a <code>--network</code> flag for the restricted <code>sagemaker</code> network, plus a Docker CLI fallback for environments where the Python SDK can't reach the proxy socket.</p>
    <span class="oss-card__tag">Pull Request</span>
    <a class="oss-card__stretched" href="https://github.com/mlflow/mlflow/pull/22996" aria-label="View PR on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws/sagemaker-python-sdk</span>
      <span class="oss-card__stars"><img src="https://img.shields.io/github/stars/aws/sagemaker-python-sdk?style=social&cacheSeconds=3600" alt="GitHub stars"></span>
    </div>
    <p class="oss-card__desc">Added an example notebook demonstrating Inference Pipelines in SageMaker V3, using <code>ModelBuilder</code> and the new <code>sagemaker.core</code> components.</p>
    <span class="oss-card__tag">Pull Request</span>
    <a class="oss-card__stretched" href="https://github.com/aws/sagemaker-python-sdk/pull/5525" aria-label="View PR on GitHub"></a>
  </div>
</div>

## Workshops

Two public workshops I authored or co-authored, run by AWS field teams worldwide and delivered to thousands of customers.

<div class="oss-grid">
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws-samples/amazon-sagemaker-from-idea-to-production</span>
      <span class="oss-card__stars"><img src="https://img.shields.io/github/stars/aws-samples/amazon-sagemaker-from-idea-to-production?style=social&cacheSeconds=3600" alt="GitHub stars"></span>
    </div>
    <p class="oss-card__desc"><a class="oss-card__inline" href="https://catalog.workshops.aws/mlops-from-idea-to-production">MLOps from idea to production in six steps</a> — from a notebook to a fully automated CI/CD pipeline, one step at a time.</p>
    <span class="oss-card__tag">Author</span>
    <a class="oss-card__stretched" href="https://github.com/aws-samples/amazon-sagemaker-from-idea-to-production" aria-label="View repo on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws-samples/amazon-sagemaker-immersion-day</span>
      <span class="oss-card__stars"><img src="https://img.shields.io/github/stars/aws-samples/amazon-sagemaker-immersion-day?style=social&cacheSeconds=3600" alt="GitHub stars"></span>
    </div>
    <p class="oss-card__desc"><a class="oss-card__inline" href="https://sagemaker-immersionday.workshop.aws/">Amazon SageMaker Immersion Day</a> — a hands-on introduction to the SageMaker ML lifecycle, from data preparation to deployment.</p>
    <span class="oss-card__tag">Co-author</span>
    <a class="oss-card__stretched" href="https://github.com/aws-samples/amazon-sagemaker-immersion-day" aria-label="View repo on GitHub"></a>
  </div>
</div>

## Companion Code

Runnable code behind my blog posts. Each repository stands on its own: clone it, run the notebooks, keep what's useful.

<div class="oss-grid">
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">pdifranc/mlflow-deploy-on-sagemaker-hosting</span>
      <span class="oss-card__stars"><img src="https://img.shields.io/github/stars/pdifranc/mlflow-deploy-on-sagemaker-hosting?style=social&cacheSeconds=3600" alt="GitHub stars"></span>
    </div>
    <p class="oss-card__desc">Three ways to deploy an MLflow model to a SageMaker AI endpoint, demonstrated with the same scikit-learn model so the only variable is the deployment mechanism. Companion to <a class="oss-card__inline" href="/posts/2026/08/mlflow-deploy-sagemaker-hosting">this post</a>.</p>
    <span class="oss-card__tag">Author</span>
    <a class="oss-card__stretched" href="https://github.com/pdifranc/mlflow-deploy-on-sagemaker-hosting" aria-label="View repo on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws-samples/sample-amazon-sagemaker-mlflow-dvc-lineage</span>
      <span class="oss-card__stars"><img src="https://img.shields.io/github/stars/aws-samples/sample-amazon-sagemaker-mlflow-dvc-lineage?style=social&cacheSeconds=3600" alt="GitHub stars"></span>
    </div>
    <p class="oss-card__desc">End-to-end lineage with DVC and MLflow on SageMaker AI: dataset-level lineage via Git commit hashes, and record-level lineage for regulated environments. Companion to <a class="oss-card__inline" href="/posts/2026/04/dvc-sagemaker-mlflow-lineage">this post</a>.</p>
    <span class="oss-card__tag">Author</span>
    <a class="oss-card__stretched" href="https://github.com/aws-samples/sample-amazon-sagemaker-mlflow-dvc-lineage" aria-label="View repo on GitHub"></a>
  </div>
</div>
