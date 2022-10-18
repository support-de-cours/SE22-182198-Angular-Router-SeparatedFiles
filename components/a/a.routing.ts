import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

    // Page A - localhost/page-a
    {
        path: 'page-a',
        component: MainComponent,

        children: [
            // Page A, Child A - localhost/page-a/child-a
            {
                path: 'child-a',
                component: ChildAComponent
            },

            // Page A, Child B - localhost/page-a/child-b
            {
                path: 'child-b',
                component: ChildBComponent
            },

            // Default child - This is an Error
            {
                path: '',
                redirectTo: 'child-a',
                pathMatch: 'full'
            },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class A_RoutingModule { }