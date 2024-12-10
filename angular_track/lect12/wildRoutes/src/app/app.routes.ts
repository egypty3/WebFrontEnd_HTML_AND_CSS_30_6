import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

export const routes: Routes = [
  // {path:'employee/:id/:name',component:EmployeeComponent},
   {path:'employee',component:EmployeeComponent},
   {path:'courseDetail',component:CourseDetailComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  //{path:'**',component: PageNotFoundComponent}
];
