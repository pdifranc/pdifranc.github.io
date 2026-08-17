---
title: Secure MLflow in AWS Fine-grained access control with AWS native services
date: 2023-05-08
permalink: /posts/2023/05/secure-mlflow-aws
excerpt_separator: <!--more-->
toc: true
header:
 og_image: "posts/secure-mlflow-aws/mlflow-architecture.png"
tags:
  - mlflow
  - sagemaker
  - apigateway
  - cognito
---
Open-source MLflow has no access control out of the box — anyone who can reach the tracking server can read and write everything. That's fine on a laptop and a problem in an enterprise. In this post, we show how to run MLflow on serverless AWS infrastructure and put real authentication in front of it using only native AWS services: IAM for SageMaker jobs and Studio users, Amazon Cognito for the UI.

**Full text [here](https://aws.amazon.com/blogs/machine-learning/securing-mlflow-in-aws-fine-grained-access-control-with-aws-native-services/), and GitHub repository [here](https://github.com/aws-samples/sagemaker-studio-mlflow-integration/)** ![GitHub stars](https://img.shields.io/github/stars/aws-samples/sagemaker-studio-mlflow-integration?style=social&cacheSeconds=3600)

<!--more-->

In this post, we show how to deploy an MLflow tracking server on serverless AWS infrastructure in a private subnet, and expose it through Amazon API Gateway with fine-grained access control implemented via IAM — so both SageMaker training jobs and SageMaker Studio users can authenticate with their existing execution roles, and UI access is handled through Amazon Cognito. We also cover using MLflow as a centralized registry in a multi-account setup and embedding the MLflow UI directly inside Studio with a JupyterLab extension.
