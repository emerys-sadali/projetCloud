import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { LoginComponent } from './login/login.component';
import { TopicsComponent } from './topics/topics.component';
import { PostsComponent } from './posts/posts.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { CreateTopicDialogComponent } from './create-topic-dialog/create-topic-dialog.component';
const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'cours', component: CoursComponent},
  {path:'topics/:id', component: TopicsComponent},
  {path:'posts/:id', component: PostsComponent},
  {path: 'create-topic',component: CreateTopicComponent},
  {path: 'create-topic-dialog',component:CreateTopicDialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
