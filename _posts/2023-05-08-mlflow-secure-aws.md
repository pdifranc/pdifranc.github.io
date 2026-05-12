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
MLflow and Amazon SageMaker are two of many tools on the market to help data scientists to implement end-to-end Machine Learning workloads.
SageMaker offers the possibility to run these workloads fully end-to-end on its own ecosystem as it has been designed to solve some of the common challenges that are peculiar to ML lifecycle workloads. 
Nonetheless, one of the great traits of the SageMaker ecosystem is also its flexibility and openess to integrate with other tools.
Today, we ultimately want to show how you can **securely** integrate SageMaker with MLflow using native AWS services to enable access control on the open-source version of MLflow.

**Full text [here](https://aws.amazon.com/blogs/machine-learning/securing-mlflow-in-aws-fine-grained-access-control-with-aws-native-services/), and GitHub repository [here](https://github.com/aws-samples/sagemaker-studio-mlflow-integration/)** ![GitHub stars](https://img.shields.io/github/stars/aws-samples/sagemaker-studio-mlflow-integration?style=social&cacheSeconds=3600)

<!--more-->

In this post, we show how to deploy an MLflow tracking server on serverless AWS infrastructure in a private subnet, and expose it through Amazon API Gateway with fine-grained access control implemented via IAM — so both SageMaker training jobs and SageMaker Studio users can authenticate with their existing execution roles, and UI access is handled through Amazon Cognito. We also cover using MLflow as a centralized registry in a multi-account setup and embedding the MLflow UI directly inside Studio with a JupyterLab extension.
