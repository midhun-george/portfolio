import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},  
{path:'about', component:AboutComponent},

{path:'skills', component:SkillsComponent},
{path:'works', component:WorksComponent},
{path:'project', component:ProjectsComponent},
{path:'contact', component:ContactComponent},
{path:'education', component:EducationComponent},
{path:'experience', component:ExperienceComponent},
{path:'**', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
