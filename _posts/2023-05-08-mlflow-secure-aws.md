---
title: Secure MLflow in AWS
output:
  md_document:
    variant: gfm+footnotes
    preserve_yaml: TRUE
knit: (function(inputFile, encoding) {
  rmarkdown::render(inputFile, encoding = encoding, output_dir = "../_posts") })
date: 2023-05-08
permalink: /posts/2023/05/secure-mlflow-aws
excerpt_separator: <!--more-->
toc: false
header:
 og_image: "posts/secure-mlflow-aws/mlflow-architecture.png"
tags:
  - mlflow
  - sagemaker
  - apigateway
  - cognito
---
Full text [here](https://aws.amazon.com/blogs/machine-learning/securing-mlflow-in-aws-fine-grained-access-control-with-aws-native-services/), and code sample [here](https://github.com/aws-samples/sagemaker-studio-mlflow-integration/)