---
permalink: /opensource/
title: "Open Source"
author_profile: true
excerpt: "Open-source contributions by Paolo Di Francesco — MLflow, SageMaker Python SDK, and public AWS workshops."
---

Most of my open-source work orbits MLflow and Amazon SageMaker, because that's where my customers' problems live. A recurring theme: the hard part of ML in production is rarely the model. It's versioning, authentication, and the seams between tools. When I hit one of those seams often enough, I fix it upstream.

## My MLflow thread

MLflow shows up everywhere in my work, so it deserves its own narrative. It started with a customer problem: open-source MLflow had no access control, and enterprises needed it. I [built the fix on AWS-native services](/posts/2023/05/secure-mlflow-aws) — and when the client side needed to sign requests, I contributed [AWS SigV4 authentication to MLflow itself](https://github.com/mlflow/mlflow/pull/7044). That field experience — POCs, blog posts, the upstream contribution — led to design discussions with the AWS service team during the development of [managed MLflow on Amazon SageMaker AI](https://docs.aws.amazon.com/sagemaker/latest/dg/mlflow.html), where I brought the customer perspective from running MLflow on AWS in production. The SigV4 work also led to the [sagemaker-mlflow plugin](https://github.com/aws/sagemaker-mlflow), which today handles authentication in managed MLflow using the same approach.

Since then the thread has continued: [network isolation for managed MLflow with AWS PrivateLink](/posts/2024/12/sagemaker-mlflow-privatelink), [tracking LLM evaluations in MLflow with FMEval](/posts/2025/01/sagemaker-mlflow-fmeval), [end-to-end data lineage with DVC and MLflow](/posts/2026/04/dvc-sagemaker-mlflow-lineage), [three patterns for deploying MLflow models to SageMaker endpoints](/posts/2026/08/mlflow-deploy-sagemaker-hosting), and a [second merged MLflow PR](https://github.com/mlflow/mlflow/pull/22996) unblocking container builds in SageMaker JupyterLab. Every piece follows the same rule: hit the seam in the field, fix it upstream, write it down.

## Contributions

<div class="oss-grid">
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">mlflow/mlflow</span>
    </div>
    <p class="oss-card__desc">Added AWS SigV4 request signing to the MLflow client via <code>MLFLOW_TRACKING_AWS_SIGV4</code>, enabling MLflow tracking servers to sit behind Amazon API Gateway with IAM authentication.</p>
    <span class="oss-card__tag">Pull Request</span>
    <a class="oss-card__stretched" href="https://github.com/mlflow/mlflow/pull/7044" aria-label="View PR on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">mlflow/mlflow</span>
    </div>
    <p class="oss-card__desc">Unblocked <code>mlflow sagemaker build-and-push-container</code> in SageMaker JupyterLab: added a <code>--network</code> flag for the restricted <code>sagemaker</code> network, plus a Docker CLI fallback for environments where the Python SDK can't reach the proxy socket.</p>
    <span class="oss-card__tag">Pull Request</span>
    <a class="oss-card__stretched" href="https://github.com/mlflow/mlflow/pull/22996" aria-label="View PR on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws/sagemaker-python-sdk</span>
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
    </div>
    <p class="oss-card__desc"><a class="oss-card__inline" href="https://catalog.workshops.aws/mlops-from-idea-to-production">MLOps from idea to production in six steps</a> — from a notebook to a fully automated CI/CD pipeline, one step at a time.</p>
    <span class="oss-card__tag">Author</span>
    <a class="oss-card__stretched" href="https://github.com/aws-samples/amazon-sagemaker-from-idea-to-production" aria-label="View repo on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws-samples/amazon-sagemaker-immersion-day</span>
    </div>
    <p class="oss-card__desc"><a class="oss-card__inline" href="https://sagemaker-immersionday.workshop.aws/">Amazon SageMaker Immersion Day</a> — a hands-on introduction to the SageMaker ML lifecycle, from data preparation to deployment.</p>
    <span class="oss-card__tag">Co-author</span>
    <a class="oss-card__stretched" href="https://github.com/aws-samples/amazon-sagemaker-immersion-day" aria-label="View repo on GitHub"></a>
  </div>
</div>

## Current Project: Agentic Developer Portal

My main project right now re-imagines the developer portal: instead of clicking through forms, developers describe their application and an agent bootstraps the infrastructure across AWS accounts according to codified best practices. It's built on [Strands Agents SOPs](https://github.com/strands-agents/agent-sop) — machine-readable runbooks with RFC 2119 keywords, parameterized inputs, and progress tracking. The reference implementation takes a web application from description to production across three AWS accounts (~150 resources, 6 Terraform modules) in under an hour, with a human reviewing the plan and gating production.

<div class="oss-grid">
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">strands-agents/agent-sop</span>
    </div>
    <p class="oss-card__desc">The open-source framework the project builds on: Standard Operating Procedures as machine-readable runbooks that agents can execute with human oversight. See <a class="oss-card__inline" href="/talks/2026-aws-ai-sdlc-vienna">the talk</a> for the architecture and a walkthrough of the reference implementation.</p>
    <span class="oss-card__tag">Built on</span>
    <a class="oss-card__stretched" href="https://github.com/strands-agents/agent-sop" aria-label="View repo on GitHub"></a>
  </div>
</div>

## Companion Code

Runnable code behind my blog posts. Each repository stands on its own: clone it, run the notebooks, keep what's useful.

<div class="oss-grid">
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">pdifranc/mlflow-deploy-on-sagemaker-hosting</span>
    </div>
    <p class="oss-card__desc">Three ways to deploy an MLflow model to a SageMaker AI endpoint, demonstrated with the same scikit-learn model so the only variable is the deployment mechanism. Companion to <a class="oss-card__inline" href="/posts/2026/08/mlflow-deploy-sagemaker-hosting">this post</a>.</p>
    <span class="oss-card__tag">Author</span>
    <a class="oss-card__stretched" href="https://github.com/pdifranc/mlflow-deploy-on-sagemaker-hosting" aria-label="View repo on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws-samples/sample-amazon-sagemaker-mlflow-dvc-lineage</span>
    </div>
    <p class="oss-card__desc">End-to-end lineage with DVC and MLflow on SageMaker AI: dataset-level lineage via Git commit hashes, and record-level lineage for regulated environments. Companion to <a class="oss-card__inline" href="/posts/2026/04/dvc-sagemaker-mlflow-lineage">this post</a>.</p>
    <span class="oss-card__tag">Author</span>
    <a class="oss-card__stretched" href="https://github.com/aws-samples/sample-amazon-sagemaker-mlflow-dvc-lineage" aria-label="View repo on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws-samples/sagemaker-custom-project-templates</span>
    </div>
    <p class="oss-card__desc">S3-based templates for SageMaker AI Projects: one-click provisioning of a ModelOps environment integrated with GitHub Actions, without a Service Catalog. Companion to <a class="oss-card__inline" href="/posts/2026/01/sagemaker-s3-project-templates">this post</a>.</p>
    <span class="oss-card__tag">Contributor</span>
    <a class="oss-card__stretched" href="https://github.com/aws-samples/sagemaker-custom-project-templates/tree/main/s3_templates" aria-label="View repo on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws-samples/track-fmeval-evaluation-using-mlflow</span>
    </div>
    <p class="oss-card__desc">Programmatic LLM evaluation with FMEval, tracked and compared in SageMaker managed MLflow — accuracy, toxicity, fairness, and robustness as first-class experiment data. Companion to <a class="oss-card__inline" href="/posts/2025/01/sagemaker-mlflow-fmeval">this post</a>.</p>
    <span class="oss-card__tag">Author</span>
    <a class="oss-card__stretched" href="https://github.com/aws-samples/track-fmeval-evaluation-using-mlflow" aria-label="View repo on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws-samples/sagemaker-mlflow-private</span>
    </div>
    <p class="oss-card__desc">SageMaker Studio in a private VPC with no internet access, connected to managed MLflow over AWS PrivateLink — CDK stack with CodeArtifact as private PyPI and end-to-end experimentation via the <code>@remote</code> decorator. Companion to <a class="oss-card__inline" href="/posts/2024/12/sagemaker-mlflow-privatelink">this post</a>.</p>
    <span class="oss-card__tag">Co-author</span>
    <a class="oss-card__stretched" href="https://github.com/aws-samples/sagemaker-mlflow-private" aria-label="View repo on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws-samples/sagemaker-studio-mlflow-integration</span>
    </div>
    <p class="oss-card__desc">Open-source MLflow on serverless AWS with real access control: IAM for SageMaker jobs and Studio users, Amazon Cognito for the UI, and the MLflow UI embedded in Studio. Companion to <a class="oss-card__inline" href="/posts/2023/05/secure-mlflow-aws">this post</a>.</p>
    <span class="oss-card__tag">Author</span>
    <a class="oss-card__stretched" href="https://github.com/aws-samples/sagemaker-studio-mlflow-integration" aria-label="View repo on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws-samples/sagemaker-experiments-and-pipelines</span>
    </div>
    <p class="oss-card__desc">Automatic experiment tracking inside SageMaker Pipelines: organize, track, and visualize every pipeline execution as an experiment. Companion to <a class="oss-card__inline" href="/posts/2022/07/sagemaker-experiments-pipelines">this post</a>.</p>
    <span class="oss-card__tag">Author</span>
    <a class="oss-card__stretched" href="https://github.com/aws-samples/sagemaker-experiments-and-pipelines" aria-label="View repo on GitHub"></a>
  </div>
  <div class="oss-card">
    <div class="oss-card__head">
      <span class="oss-card__repo">aws-samples/amazon-sagemaker-experiments-dvc-demo</span>
    </div>
    <p class="oss-card__desc">Data Version Control alongside SageMaker Experiments: track data and code changes together with experiment metrics for reproducible ML workflows. Companion to <a class="oss-card__inline" href="/posts/2022/07/dvc-sagemaker-experiments">this post</a>.</p>
    <span class="oss-card__tag">Author</span>
    <a class="oss-card__stretched" href="https://github.com/aws-samples/amazon-sagemaker-experiments-dvc-demo" aria-label="View repo on GitHub"></a>
  </div>
</div>
