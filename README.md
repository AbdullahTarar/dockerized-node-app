Dockerized Node.js Employee Directory with Kind Cluster Deployment
==================================================================

Overview
--------

This project demonstrates deploying a simple Node.js employee directory application using Docker and Kubernetes. The app is deployed in a local Kind (Kubernetes in Docker) cluster and managed through a CI/CD pipeline for automated builds, deployments, and updates.

Features
--------

*   **Dockerized App**: Packaged Node.js app for easy deployment.
    
*   **Kind Cluster**: Lightweight Kubernetes cluster for local testing.
    
*   **Scalability**: Supports multiple replicas for load balancing.
    
*   **Automated CI/CD**: Builds and deploys via Jenkins.
    
*   **Local Access**: Access app locally through port 5000.
    

Prerequisites
-------------

*   Docker
    
*   Kind
    
*   Kubernetes CLI (kubectl)
    
*   Jenkins with Docker and Kubernetes plugins
    
*   Docker Hub account
    

Steps to Deploy
---------------

### 1\. Clone the Repository
```bash

git clone https://github.com/AbdullahTarar/dockerized-node-app.git   
cd dockerized-node-app`  
```
### 2\. Run Locally (Optional)
```bash
docker build -t <name of the container>:latest . 
docker run -p 5000:5000 <name of the container>:latest`  
```
### 3\. Set Up a Kind Cluster
```bash
curl -Lo ./kind https://kind.sigs.k8s.io/dl/latest/kind-linux-amd64 
chmod +x ./kind sudo mv ./kind /usr/local/bin/kind  
kind create cluster --name node-app-cluster    
kubectl cluster-info --context kind-node-app-cluster 
docker ps -a
```   

### 4\. Deploy the App
```bash
kubectl apply -f <deployment.yaml> 
kubectl apply -f <service.yaml>   
kubectl port-forward svc/node-app 5000:5000
```      
Open the app at [http://localhost:5000](http://localhost:5000).
    

### 5\. Set Up CI/CD with Jenkins

*   Install Jenkins and plugins (Docker, GitHub, Kubernetes CLI).
    
*   Add Docker Hub credentials in Jenkins.
    
*   Create a new pipeline using the Jenkinsfile in the repository.
    
*   Push changes to trigger the pipeline for build and deployment.
    

Monitoring
----------
```bash
kubectl get pods
    
kubectl rollout status deployment/node-app
```     

Contributors
------------

*   Abdullah Tarar
    

License
-------

This project is licensed under the MIT License.
Let me know if you’d like to simplify this further!
