---
title: Accelerating ML experimentation with enhanced security AWS PrivateLink support for Amazon SageMaker with MLflow
date: 2024-12-09
permalink: /posts/2024/12/sagemaker-mlflow-privatelink
excerpt_separator: <!--more-->
toc: true
tags:
  - sagemaker
  - mlflow
  - privatelink
  - security
  - mlops
---
Regulated environments don't get to choose between experiment tracking and network isolation — they need both. With AWS PrivateLink support for Amazon SageMaker with MLflow, data sent to MLflow Tracking Servers stays inside the AWS network, never touching the public internet. In this post, we go all the way: a SageMaker environment in a private VPC with *no* internet access, running full ML experimentation with MLflow.

<!--more-->

**Full text [here](https://aws.amazon.com/blogs/machine-learning/accelerating-ml-experimentation-with-enhanced-security-aws-privatelink-support-for-amazon-sagemaker-with-mlflow/), and GitHub repository [here](https://github.com/aws-samples/sagemaker-mlflow-private)**

Co-authored with Xiaoyu Xing and Tomer Shenhar, this post walks through a fully deployable AWS CDK stack: a SageMaker Studio domain in a private VPC without internet access, AWS CodeArtifact as a private PyPI repository so packages can still be installed, and VPC endpoints connecting SageMaker to S3, ECR, CloudWatch, and the managed MLflow tracking server — all over PrivateLink. We then run data preprocessing and XGBoost training with the SageMaker Python SDK's `@remote` decorator, with every job tracked in MLflow, and show how to lock the SageMaker execution role down with an `aws:SourceVpc` condition so MLflow is only reachable from inside the VPC.

**Why I wrote this.** My [2023 post on securing self-hosted MLflow](/posts/2023/05/secure-mlflow-aws) solved authentication — who can talk to the tracking server. This one is the other half of enterprise security: network isolation — which paths the data is allowed to travel at all. With PrivateLink support in managed MLflow, the no-internet-access setups that regulated customers actually run finally work without workarounds.
{: .notice--info}
