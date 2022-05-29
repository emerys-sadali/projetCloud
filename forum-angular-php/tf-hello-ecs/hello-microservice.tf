// Hello Services

resource "aws_ecs_task_definition" "hello-microservice_task_definition" {
  family = "hello-ui-service"
  container_definitions = jsonencode([
    {
      name      = "hello-microservice-container"
      image     = "065062733237.dkr.ecr.us-east-1.amazonaws.com/hello-microservice:latest"
      cpu       = 10
      memory    = 128
      essential = true
      portMappings = [
        {
          containerPort = 5000
          hostPort      = 0
        }
      ]
    }
  ])
}

resource "aws_ecs_service" "hello-microservice" {
  name            = "hello-microservice-service"
  cluster         = aws_ecs_cluster.hello.id
  task_definition = aws_ecs_task_definition.hello_task_definition.arn
  desired_count   = 1

  load_balancer {
    target_group_arn = aws_alb_target_group.hello-target-group.arn
    container_name   = "hello-microservice-container"
    container_port   = 5000
  }

}

#resource "null_resource" "conf" {
#  triggers = {
#    value = aws_alb.external-endpoint.dns_name
#  }
#}
