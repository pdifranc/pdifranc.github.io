---
title: "Govern models with MLflow and Amazon SageMaker AI Model Registry sync: Part 2"
date: 2026-09-09
permalink: /posts/2026/09/mlflow-model-registry-sync-part-2
excerpt_separator: <!--more-->
toc: true
header:
 teaser: "posts/mlflow-model-registry-sync/hub-and-spoke-central.png"
 og_image: "posts/mlflow-model-registry-sync/hub-and-spoke-central.png"
tags:
  - sagemaker
  - mlflow
  - model-registry
  - governance
  - cross-account
  - mlops
---
Larger organizations rarely stop at one account: they run multiple development accounts, a central governance function, and — in regulated environments — a hard rule that development workloads cannot write into production-grade accounts. In this second post, we extend the building blocks from [Part 1](/posts/2026/09/mlflow-model-registry-sync-part-1) to two cross-account governance topologies, show how an approved model moves from the registry to a deployed endpoint through CI/CD, and compare the options so you can pick one.

<!--more-->

**Full text [here](https://aws.amazon.com/blogs/machine-learning/govern-models-with-mlflow-and-amazon-sagemaker-ai-model-registry-sync-part-2/), and GitHub repository [here](https://github.com/aws-samples/genai-ml-platform-examples/tree/main/operations/sagemaker-mlflow-model-registry-goverance)**

![Architecture: hub-and-spoke central governance — the hub account shares its managed MLflow app with a spoke development account via AWS RAM; a data scientist in the spoke registers a model against the shared app, automatic sync creates the Model Package Group in the hub registry, the hub RAM-shares the group back to the spoke, the governance officer promotes to production in the hub, and an ML engineer deploys via CI/CD to the spoke or a dedicated deployment account](/images/posts/mlflow-model-registry-sync/hub-and-spoke-central.png)

Co-authored with Melanie Li and Ram Vittal, this post covers two patterns. The **hub-and-spoke central** topology shares one MLflow app from a governance hub to every development account with AWS Resource Access Manager (AWS RAM); the data scientist's workflow is identical to Part 1 except the tracking URI points at the hub, automatic registration lands the Model Package Group in the hub synchronously with the register call, and the hub shares the group back with the `AllowDeploy` managed permission. The **hub-and-spoke hybrid** topology is for regulated customers who don't want spokes writing into the hub at all: each development account keeps its own MLflow app and registry, a local model owner approves, and an EventBridge-triggered workflow copies the approved package cross-account — replicating artifacts into a hub-owned bucket, rewriting the inference specification, and registering into a shared destination group with provenance metadata — so the hub copy has no runtime dependency on the source account.

![Architecture: hub-and-spoke hybrid governance — a data scientist registers to the spoke's own MLflow app, sync lands the model in the spoke-local registry, the model owner approves locally, an EventBridge approval-triggered workflow copies model artifacts and metadata into the hub destination group shared via AWS RAM, the governance officer re-validates and approves in the hub, and an ML engineer deploys via CI/CD in the spoke](/images/posts/mlflow-model-registry-sync/hub-and-spoke-hybrid.png)

Along the way we call out the details that bite in practice: cross-account S3 access is needed on both the bucket-policy and identity side before `log_model` will even succeed; automatic registration appends a hash suffix to the group name, so reference groups by ARN; and lineage is recorded where the sync executes and is not shared back by AWS RAM. We finish with the approval-to-deployment path — an EventBridge rule on `ModelApprovalStatus: Approved` driving a CI/CD pipeline — and a comparison table across single-account, central, and hybrid.

**Why I wrote this.** Part 1 answers "how does the sync work"; this is the post for the platform team that has to make it work across an organization. The hybrid topology in particular came straight from customer conversations in financial services and healthcare, where "the hub is a production account and nobody in dev gets a write path into it" is not a preference but a compliance requirement. Writing it down with runnable notebooks was the fastest way to stop re-deriving the same answer on every call.
{: .notice--info}
