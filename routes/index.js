var express = require('express');
var router = express.Router();

const glossaryList = [
  {'ID' : '1', 'Term':'Agile software development' , 'Definition': 'It is an approach of software development process which focuses on delivery over documentation. It allows continuous delivery of valuable work which is completed in iterations where the development team constantly receives feedback from the client.', 'Reference': 'https://www.techtarget.com/searchsoftwarequality/definition/agile-software-development'},
  {'ID' : '2', 'Term':'Cloud computing' , 'Definition': 'It refers to the delivery of computer resources such as servers, storage, databases, analytics, etc over the internet which are hosted on cloud networks.', 'Reference': '2. https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-cloud-computing#:~:text=Simply%20put%2C%20cloud%20computing%20is,resources%2C%20and%20economies%20of%20scale.'},
  {'ID' : '3', 'Term':'Kubernetes' , 'Definition': 'Kubernetes allows automation for container deployment, management and scaling of containerised applications. It follows a master-node architecture which involves a main node and worker nodes, if a node fails the node is restarted and it resolves the issue. ', 'Reference': 'https://kubernetes.io'},
  {'ID' : '4', 'Term':'Containers' , 'Definition': 'Containers a tool that allows packaging of software program and their dependencies into one package, these packages can be run on the desired platform. These containers are light-weight and secure. ', 'Reference': 'https://www.docker.com/resources/what-container/'},
  {'ID' : '5', 'Term':'Continuous Integration(CI)' , 'Definition': 'It refers to the practice of pushing changed code into a shared repository frequently, building and testing it for frequent delivery of applications. the CI system provides an instant feedback on the same.', 'Reference': 'https://about.gitlab.com/topics/ci-cd/cloud-native-continuous-integration/#:~:text=CI%20is%20the%20practice%20of,repository%20as%20their%20source%20code.'},
  {'ID' : '6', 'Term':'Continuous Delivery(CD)' , 'Definition': 'It is a software development practice that automates the process of testing and pushes the code changes to a production like environment. It ensures that software is ready for deployment and can be deployed through a click of a button.', 'Reference': 'https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment'},
  {'ID' : '7', 'Term':'Micro-Services' , 'Definition': 'It refers to an architectural approach of software development, in this approach software services are divided based on functionalities and they are integrated to work as a whole. If there is a bug in one service it wont take down the whole system.', 'Reference': '7. https://www.bmc.com/blogs/devops-microservices/'},
  {'ID' : '8', 'Term':'Continuous Testing' , 'Definition': 'It refers to the process of automated testing of code overtime a change is made. These tests are carried out at regular interval throughout the development process.', 'Reference': 'https://www.globalapptesting.com/blog/what-is-continuous-testing#:~:text=Continuous%20testing%20in%20DevOps,-Continuous%20testing%20was&text=The%20main%20goal%20being%20to,time%20code%20changes%20are%20made.'},
  {'ID' : '9', 'Term':'Deployment' , 'Definition': 'It refers to the process of building and packaging the application code and packages, these go through a series of steps and is then released on the required platform for the end-user.', 'Reference': '9. https://octopus.com/devops/continuous-delivery/deployments-vs-releases/#:~:text=However%2C%20modern%20software%20delivery%20practices,software%20available%20to%20a%20user'},
  {'ID' : '10', 'Term':'DevOps' , 'Definition': 'It is the combination of software development and operations, where these two teams work together for faster delivery of software and for better communication and collaboration.', 'Reference': 'https://about.gitlab.com/topics/devops/'},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DevOps Glossary', Glossary: glossaryList });
});

module.exports = router;
