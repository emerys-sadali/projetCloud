// Declare load balancer resources

resource "aws_alb" "external-endpoint" {
  name               = "hello-ext-alb"
  internal           = false
  load_balancer_type = "application"

  security_groups = [aws_security_group.main_security_group.id]

  subnets = [aws_subnet.public_1a.id, aws_subnet.public_1b.id]

}

resource "aws_lb_listener" "external-endpoint-http" {
  load_balancer_arn = aws_alb.external-endpoint.arn

  port     = "80"
  protocol = "HTTP"

  default_action {
    target_group_arn = aws_alb_target_group.hello-target-group.arn
    type             = "forward"
  }

}

resource "aws_alb_target_group" "hello-target-group" {
  vpc_id = aws_vpc.main.id

  name     = "hello-target-group"
  port     = 80
  protocol = "HTTP"

}

