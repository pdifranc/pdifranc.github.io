---
title: Track your ML experiments end to end with Data Version Control and Amazon SageMaker Experiments
date: 2022-07-14
permalink: /posts/2022/07/dvc-sagemaker-experiments
excerpt_separator: <!--more-->
toc: true
tags:
  - sagemaker
  - mlops
  - dvc
  - experiments
---
Data scientists often work towards understanding the effects of various data preprocessing and feature engineering strategies in combination with different model architectures and hyperparameters. Doing so requires you to cover large parameter spaces iteratively, and it can be overwhelming to keep track of previously run configurations and results while keeping experiments reproducible.

<!--more-->

**Full text [here](https://aws.amazon.com/blogs/machine-learning/track-your-ml-experiments-end-to-end-with-data-version-control-and-amazon-sagemaker-experiments/), and GitHub repository [here](https://github.com/aws-samples/amazon-sagemaker-experiments-dvc-demo)** ![GitHub stars](https://img.shields.io/github/stars/aws-samples/amazon-sagemaker-experiments-dvc-demo?style=social&cacheSeconds=3600)

This post walks through how to use Data Version Control (DVC) alongside Amazon SageMaker Experiments to track data and code changes together with ML experiment metrics, providing end-to-end traceability for your ML workflows.

**2026 update.** SageMaker Experiments has since been superseded by [managed MLflow on Amazon SageMaker AI](https://docs.aws.amazon.com/sagemaker/latest/dg/mlflow.html) as the experiment-tracking layer. The core idea — versioning data and code together with experiment metrics — still applies unchanged; for the current take on it, see the successor post: [End-to-end lineage with DVC and SageMaker AI MLflow apps](/posts/2026/04/dvc-sagemaker-mlflow-lineage).
{: .notice--info}
